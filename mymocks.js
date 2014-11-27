

(function () {
             var conf = new mockdoc.Config(
                     "MY PROJECT MOCKUPS",
                     "Admin UI",
                     "0.1",
                     "https://github.com/DavidLeoni/mockdoc",
                     "https://github.com/DavidLeoni/mockdoc/wiki/deliverables/",
                     "mockdoc-example-mockups",
                     "26.nov.2014");

             mockdoc.configure(conf);
             mockdoc.renderMockups();
             
             $(".has-tooltip-in-html-example").tooltip({
                 // tooltipClass: "???",
                 content: function () {
                     return $("#tooltip-in-html-example")[0].outerHTML;
                 }

             });

         })();