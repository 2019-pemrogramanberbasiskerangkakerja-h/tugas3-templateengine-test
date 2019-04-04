// Compiled using marko@4.16.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        sayHi: function() {
          alert("Hi");
        }
      },
    marko_componentType = "/empty$1.0.0/src/pages/home/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Marko Demo</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Tugas 3 " +
    marko_escapeXml(data.kelas) +
    "</h1><p>Kami menggunakan <b>template " +
    marko_escapeXml(data.templat) +
    " </b>untuk tugas template engine.</p><ul>");

  var for__9 = 0;

  marko_forEach(data.lists, function(list) {
    var keyscope__10 = "[" + ((for__9++) + "]");

    out.w("<li>" +
      marko_escapeXml(list.no) +
      " NRP: " +
      marko_escapeXml(list.nrp) +
      " Nama: " +
      marko_escapeXml(list.nama) +
      ", Asal daerah:" +
      marko_escapeXml(list.asal) +
      "</li>");
  });

  out.w("</ul><p>Dosen:<b> " +
    marko_escapeXml(data.dosen) +
    " </b></p>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "14");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "div {\r\n\t\tcolor: green;\r\n\t}",
          virtualPath: "./template.marko.css",
          path: "./template.marko"
        }
    ],
    id: "/empty$1.0.0/src/pages/home/template.marko",
    component: "./template.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
