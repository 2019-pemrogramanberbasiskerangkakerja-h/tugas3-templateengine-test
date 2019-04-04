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

  out.w("<h1>Marko Demo</h1> Hello " +
    marko_escapeXml(data.name) +
    ", <br> Your age is " +
    marko_escapeXml(data.age) +
    marko_escapeXml(data.np) +
    "<ul>");

  var for__8 = 0;

  marko_forEach(data.no, function(nos) {
    var keyscope__9 = "[" + ((for__8++) + "]");

    out.w("<li>" +
      marko_escapeXml(nos) +
      "</li>");
  });

  marko_forEach(data.nrp, function(nrps) {
    out.w(marko_escapeXml(nrps));
  });

  out.w("</ul><div>Hello world</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "12");

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
