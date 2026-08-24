/* Gartenberatung – Renderer
 * Liest window.GARTENBERATUNG_DATA und füllt die in gartenberatung.html
 * vorbereiteten Platzhalter. Layout und Markup werden nicht verändert,
 * nur Inhalte und Anker-Ziele aus der zentralen Daten-Datei übernommen.
 *
 * Robustheit: Wenn das Skript ohne Daten geladen wird (z. B. weil die
 * data.js nicht erreichbar ist), bleibt die Seite mit den statischen
 * Fallback-Inhalten aus dem HTML sichtbar.
 */

(function () {
  "use strict";

  var data = window.GARTENBERATUNG_DATA;
  if (!data || typeof data !== "object") {
    return;
  }

  // --- Einfache Datenbindung über data-bind="a.b.c" ---
  function getPath(obj, path) {
    return String(path).split(".").reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : undefined;
    }, obj);
  }

  function bindText() {
    var nodes = document.querySelectorAll("[data-bind]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var value = getPath(data, node.getAttribute("data-bind"));
      if (value !== undefined) {
        node.textContent = String(value);
      }
    }
  }

  // --- Text-Inhalt über data-bind-text="key" auf <span>/<p> etc. ---
  function bindNestedText() {
    var nodes = document.querySelectorAll("[data-bind-text]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var value = getPath(data, node.getAttribute("data-bind-text"));
      if (value !== undefined) {
        node.textContent = String(value);
      }
    }
  }

  // --- Anchor-Target und Label aus Daten ---
  function bindAnchors() {
    var nodes = document.querySelectorAll("[data-bind-href]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var target = getPath(data, node.getAttribute("data-bind-href"));
      if (typeof target === "string") {
        node.setAttribute("href", "#" + target);
      }
    }
    var labelled = document.querySelectorAll("[data-bind-label]");
    for (var j = 0; j < labelled.length; j++) {
      var el = labelled[j];
      var label = getPath(data, el.getAttribute("data-bind-label"));
      if (typeof label === "string") {
        el.textContent = label;
      }
    }
  }

  // --- Icon-Mapping für Kontaktkanäle ---
  var ICON_MAP = {
    email: "✉",
    phone: "☎",
    region: "◎"
  };

  function bindIcons() {
    var nodes = document.querySelectorAll("[data-bind-icon]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-bind-icon");
      var value = ICON_MAP[key];
      if (value === undefined) {
        // Fallback: Wenn data-bind-icon="kind" und wir sind in einem
        // Template-Item, wird der Wert im renderTemplate-Schritt gesetzt.
        return;
      }
      node.textContent = value;
    });
  }

  // --- Listen rendern: <[data-list="path"]> wird mit Vorlagen ersetzt ---
  // Wenn der Container ein erstes Kind hat, wird dieses als Vorlage geklont.
  // Dadurch wird automatisch der im HTML gewählte Element-Typ übernommen
  // (<article>, <li>, <details> …) und es entstehen keine Validitätsprobleme
  // in <ul>/<ol> bzw. <div>-Containern.
  function renderList(container, items, templateName, isOrdered) {
    var sample = container.firstElementChild;
    var frag = document.createDocumentFragment();
    items.forEach(function (item) {
      var node;
      if (sample) {
        node = sample.cloneNode(true);
      } else {
        // Fallback: sinnvoller Default je nach Template
        var tag = isOrdered
          ? "li"
          : (templateName === "package-card" || templateName === "note-card" ? "article"
            : templateName === "faq-item" ? "details"
            : "li");
        node = document.createElement(tag);
      }
      node.className = templateName;
      renderTemplate(node, item, templateName);
      frag.appendChild(node);
    });
    container.innerHTML = "";
    container.appendChild(frag);
  }

  function renderTemplate(node, item, templateName) {
    // data-bind-text="key" im Template wird ersetzt
    var binds = node.querySelectorAll("[data-bind-text]");
    var ownBind = node.matches("[data-bind-text]") ? [node] : [];
    var allBinds = Array.prototype.slice.call(binds).concat(ownBind);
    allBinds.forEach(function (el) {
      var key = el.getAttribute("data-bind-text");
      var value = item[key];
      if (value !== undefined) {
        el.textContent = String(value);
      }
    });

    // data-bind-icon="kind" im Template
    var iconNodes = node.querySelectorAll("[data-bind-icon]");
    iconNodes.forEach(function (el) {
      var key = el.getAttribute("data-bind-icon");
      var value = item[key];
      if (value !== undefined && ICON_MAP[value] !== undefined) {
        el.textContent = ICON_MAP[value];
      }
    });

    // data-kind für Channel-Templates weitergeben
    if (templateName === "contact-channel" && item.kind !== undefined) {
      node.setAttribute("data-kind", String(item.kind));
    }

    // Verschachtelte Liste: data-list-nested="key"
    var nested = node.querySelector("[data-list-nested]");
    if (nested) {
      var key = nested.getAttribute("data-list-nested");
      var subItems = item[key] || [];
      nested.innerHTML = "";
      subItems.forEach(function (txt) {
        var li = document.createElement("li");
        li.textContent = String(txt);
        nested.appendChild(li);
      });
    }
  }

  function bindLists() {
    var lists = document.querySelectorAll("[data-list]");
    lists.forEach(function (container) {
      var path = container.getAttribute("data-list");
      var value = getPath(data, path);
      if (!Array.isArray(value)) {
        return;
      }
      var templateName = container.getAttribute("data-template") || "item";
      var isOrdered = container.tagName.toLowerCase() === "ol";
      // Für Hero/about nicht in Templates rendern – einfache <p>/<li> ohne Template
      if (!templateName || templateName === "item") {
        container.innerHTML = "";
        value.forEach(function (txt) {
          var tag = isOrdered ? "li" : "p";
          var el = document.createElement(tag);
          el.textContent = String(txt);
          container.appendChild(el);
        });
        return;
      }
      renderList(container, value, templateName, isOrdered);
    });
  }

  // --- E-Mail-Adressen in Kontaktkanälen automatisch verlinken ---
  function bindChannelLinks() {
    var channels = document.querySelectorAll(".contact-channel");
    channels.forEach(function (channel) {
      var kind = channel.getAttribute("data-kind");
      var valueNode = channel.querySelector(".contact-channel__value");
      if (!valueNode) return;
      var valueText = valueNode.textContent.trim();

      if (kind === "email" && valueText && valueText.indexOf("@") !== -1) {
        var link = document.createElement("a");
        link.href = "mailto:" + valueText + "?subject=" + encodeURIComponent("Erstgespräch Gartenberatung");
        link.textContent = valueText;
        valueNode.innerHTML = "";
        valueNode.appendChild(link);
      }
    });
  }

  // --- CTA-Mailto korrekt zusammensetzen ---
  function bindCtaMailto() {
    var cta = data.cta && data.cta.primary;
    if (!cta) {
      return;
    }
    var btn = document.getElementById("cta-mailto");
    if (!btn) {
      return;
    }
    var email = (data.contact && data.contact.email) || "";
    var subject = encodeURIComponent(cta.mailtoSubject || "Erstgespräch Gartenberatung");
    // mailtoBody ist in der Daten-Datei bereits URL-encoded vorbereitet,
    // daher nur Platzhalter-Plus-Sanitisierung, kein doppeltes Encoding.
    var bodyParam = (cta.mailtoBody || "").replace(/%20/g, "+");
    btn.setAttribute("href", "mailto:" + email + "?subject=" + subject + "&body=" + bodyParam);
    if (typeof cta.label === "string") {
      btn.textContent = cta.label;
    }
  }

  function init() {
    bindText();
    bindNestedText();
    bindAnchors();
    bindIcons();
    bindLists();
    bindChannelLinks();
    bindCtaMailto();
    document.documentElement.setAttribute("data-rendered", "true");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
