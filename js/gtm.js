// Copyright 2012 Google Inc. All rights reserved.

(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");

(function () {
  var data = {
    resource: {
      version: "11",

      macros: [
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var b="',
            ["escape", ["macro", 0], 7],
            '",c="',
            ["escape", ["macro", 1], 7],
            '",a=new Date("2022-05-11 23:59:00 EST"),d=new Date;a=d.getTime()\u003Ca.getTime();if("themes.shopify.com"===b\u0026\u0026"/ /themes /themes/dawn/styles/default /themes/dawn/styles/default/preview /themes/impulse/syles/modern /themes/impulse/styles/modern/preview".split(" ").includes(c)\u0026\u0026a)return"true"})();',
          ],
        },
        { function: "__e" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "_shopify_y" },
        {
          function: "__v",
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "event_location",
        },
        { function: "__e" },
        {
          function: "__v",
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "event_type",
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "compliance_zone",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "no-geo-location-code",
          vtp_name: "continent_code",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "no-geo-location-code",
          vtp_name: "country_code",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return(new Date).toISOString().replace(/T/," ").replace(/\\..+/,"")})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=new Date;return a.toISOString()})();",
          ],
        },
        { function: "__cvt_59974050_13" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 0], 8, 16],
            "+",
            ["escape", ["macro", 1], 8, 16],
            "})();",
          ],
        },
        { function: "__cid" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "_shopify_s" },
        {
          function: "__v",
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "page_language",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "event_category",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "event_action",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "event_label",
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        { function: "__r" },
      ],
      tags: [
        {
          function: "__hjtc",
          metadata: ["map"],
          once_per_event: true,
          vtp_hotjar_site_id: "2850175",
          tag_id: 4,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 4, 0]],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "x-dc-match_id",
              "parameterValue",
              ["macro", 4],
            ],
            [
              "map",
              "parameter",
              "firing_tag",
              "parameterValue",
              "GA - ssGTM GA4 - EVENT - page_view",
            ],
          ],
          vtp_userProperties: [
            "list",
            ["map", "name", "user_token", "value", ["macro", 4]],
          ],
          vtp_eventName: "page_view",
          vtp_measurementIdOverride: "G-W6NECZNE63",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 22,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 4, 0]],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "event_category",
              "parameterValue",
              ["macro", 5],
            ],
            [
              "map",
              "parameter",
              "event_action",
              "parameterValue",
              ["macro", 6],
            ],
            ["map", "parameter", "event_label", "parameterValue", ["macro", 7]],
            [
              "map",
              "parameter",
              "x-dc-match_id",
              "parameterValue",
              ["macro", 4],
            ],
            [
              "map",
              "parameter",
              "firing_tag",
              "parameterValue",
              "GA - ssGTM GA4 - EVENT - link_click",
            ],
            [
              "map",
              "parameter",
              "click_location",
              "parameterValue",
              ["macro", 5],
            ],
            [
              "map",
              "parameter",
              "click_description",
              "parameterValue",
              ["macro", 7],
            ],
            ["map", "parameter", "click_url", "parameterValue", ["macro", 8]],
          ],
          vtp_userProperties: [
            "list",
            ["map", "name", "user_token", "value", ["macro", 4]],
          ],
          vtp_eventName: "link_click",
          vtp_measurementIdOverride: "G-W6NECZNE63",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 27,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 4, 0]],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "event_category",
              "parameterValue",
              ["macro", 5],
            ],
            [
              "map",
              "parameter",
              "event_action",
              "parameterValue",
              ["macro", 6],
            ],
            ["map", "parameter", "event_label", "parameterValue", ["macro", 7]],
            [
              "map",
              "parameter",
              "x-dc-match_id",
              "parameterValue",
              ["macro", 4],
            ],
            [
              "map",
              "parameter",
              "firing_tag",
              "parameterValue",
              "GA - ssGTM GA4 - EVENT - button_click",
            ],
            [
              "map",
              "parameter",
              "click_location",
              "parameterValue",
              ["macro", 5],
            ],
            [
              "map",
              "parameter",
              "click_description",
              "parameterValue",
              ["macro", 7],
            ],
            ["map", "parameter", "click_url", "parameterValue", ["macro", 8]],
          ],
          vtp_userProperties: [
            "list",
            ["map", "name", "user_token", "value", ["macro", 4]],
          ],
          vtp_eventName: "button_click",
          vtp_measurementIdOverride: "G-W6NECZNE63",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 30,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-W6NECZNE63",
          vtp_configSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "compliance_zone",
              "parameterValue",
              ["macro", 9],
            ],
            [
              "map",
              "parameter",
              "continent_code",
              "parameterValue",
              ["macro", 10],
            ],
            [
              "map",
              "parameter",
              "country_code",
              "parameterValue",
              ["macro", 11],
            ],
            [
              "map",
              "parameter",
              "utc_datetime",
              "parameterValue",
              ["macro", 12],
            ],
            [
              "map",
              "parameter",
              "iso_8601_date",
              "parameterValue",
              ["macro", 13],
            ],
            [
              "map",
              "parameter",
              "unix_timestamp",
              "parameterValue",
              ["macro", 14],
            ],
            [
              "map",
              "parameter",
              "page_hostname_path",
              "parameterValue",
              ["macro", 15],
            ],
            [
              "map",
              "parameter",
              "firing_tag",
              "parameterValue",
              "GA - ssGTM GA4 - Config",
            ],
            [
              "map",
              "parameter",
              "container_id",
              "parameterValue",
              ["macro", 16],
            ],
            [
              "map",
              "parameter",
              "fb_event_id",
              "parameterValue",
              ["macro", 17],
            ],
            [
              "map",
              "parameter",
              "page_hostname",
              "parameterValue",
              ["macro", 0],
            ],
            ["map", "parameter", "page_path", "parameterValue", ["macro", 1]],
            ["map", "parameter", "language", "parameterValue", ["macro", 18]],
            ["map", "parameter", "send_page_view", "parameterValue", "false"],
            [
              "map",
              "parameter",
              "allow_custom_scripts",
              "parameterValue",
              "true",
            ],
            [
              "map",
              "parameter",
              "server_container_url",
              "parameterValue",
              "https://gtm.shopify.com",
            ],
          ],
          tag_id: 10,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 2], arg1: "true" },
        { function: "_eq", arg0: ["macro", 3], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 3], arg1: "link_click" },
        { function: "_eq", arg0: ["macro", 3], arg1: "button_click" },
      ],
      rules: [
        [
          ["if", 0, 1],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1],
        ],
        [
          ["if", 2],
          ["add", 2],
        ],
        [
          ["if", 3],
          ["add", 3],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_59974050_13",
        [46, "a"],
        [52, "b", ["require", "getTimestampMillis"]],
        [36, ["b"]],
      ],
      [
        50,
        "__cid",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "containerId",
          ],
        ],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__hjtc",
        [46, "a"],
        [52, "b", ["require", "createArgumentsQueue"]],
        [52, "c", ["require", "encodeUriComponent"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "setInWindow"]],
        ["b", "hj", "hj.q"],
        [52, "g", [17, [15, "a"], "hotjar_site_id"]],
        [
          "f",
          "_hjSettings",
          [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"],
        ],
        [
          "d",
          [
            0,
            [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]],
            ".js?sv=7",
          ],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__jsm",
        [46, "a"],
        [52, "b", ["require", "internal.executeJavascriptString"]],
        [22, [20, [17, [15, "a"], "javascript"], [44]], [46, [36]]],
        [36, ["b", [17, [15, "a"], "javascript"]]],
      ],
      [
        50,
        "__r",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "generateRandom"]],
            [
              "$0",
              [30, [17, [15, "a"], "min"], 0],
              [30, [17, [15, "a"], "max"], 2.147483647e9],
            ],
          ],
        ],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __cid: { 2: true, 4: true, 3: true },
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
      __r: { 2: true },
    },
    blob: { 1: "11" },
    permissions: {
      __cvt_59974050_13: {},
      __cid: { read_container_data: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __hjtc: {
        access_globals: {
          keys: [
            { key: "hj", read: true, write: true, execute: false },
            { key: "hj.q", read: true, write: true, execute: false },
            { key: "_hjSettings", read: true, write: true, execute: false },
          ],
        },
        inject_script: { urls: ["https://static.hotjar.com/c/hotjar-*"] },
      },
      __jsm: { unsafe_run_arbitrary_javascript: {} },
      __r: {},
    },

    sandboxed_scripts: ["__cvt_59974050_13"],

    security_groups: {
      customScripts: ["__jsm"],
      google: ["__cid", "__e", "__googtag", "__r"],
      nonGoogleScripts: ["__hjtc"],
    },
  };

  var ba,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ea = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    fa = ea(this),
    ia = function (a, b) {
      if (b)
        a: {
          for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            da(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ia("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      da(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ja = function (a) {
      return (a.raw = a);
    },
    ka = function (a, b) {
      a.raw = b;
      return a;
    },
    na = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: ca(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    oa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    pa = function (a) {
      return a instanceof Array ? a : oa(na(a));
    },
    qa =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ia("Object.assign", function (a) {
    return a || qa;
  });
  var ra =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    sa;
  if (typeof Object.setPrototypeOf == "function") sa = Object.setPrototypeOf;
  else {
    var ta;
    a: {
      var ua = { a: !0 },
        va = {};
      try {
        va.__proto__ = ua;
        ta = va.a;
        break a;
      } catch (a) {}
      ta = !1;
    }
    sa = ta
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var wa = sa,
    ya = function (a, b) {
      a.prototype = ra(b.prototype);
      a.prototype.constructor = a;
      if (wa) wa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Ln = b.prototype;
    },
    za = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self,
    Ba = function (a) {
      return a;
    };
  var Ca = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Da = function () {
    this.j = {};
    this.H = {};
  };
  ba = Da.prototype;
  ba.get = function (a) {
    return this.j["dust." + a];
  };
  ba.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.j[a] = b);
  };
  ba.Ph = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  ba.has = function (a) {
    return this.j.hasOwnProperty("dust." + a);
  };
  ba.remove = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.j[a];
  };
  var Fa = function () {};
  Fa.prototype.reset = function () {};
  var Ga = function (a, b) {
    this.R = a;
    this.parent = b;
    this.j = this.D = void 0;
    this.M = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Da();
  };
  Ga.prototype.add = function (a, b) {
    Ha(this, a, b, !1);
  };
  var Ha = function (a, b, c, d) {
    a.M || (d ? a.values.Ph(b, c) : a.values.set(b, c));
  };
  Ga.prototype.set = function (a, b) {
    this.M ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Ga.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Ga.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ia = function (a) {
    var b = new Ga(a.R, a);
    a.D && (b.D = a.D);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Ga.prototype.pd = function () {
    return this.R;
  };
  Ga.prototype.Ja = function () {
    this.M = !0;
  };
  function Ja(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Ka(a, b[d])), c instanceof Ca);
      d++
    );
    return c;
  }
  function Ka(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || typeof c.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.D;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var La = function () {
    this.D = new Fa();
    this.j = new Ga(this.D);
  };
  ba = La.prototype;
  ba.pd = function () {
    return this.D;
  };
  ba.execute = function (a) {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.Nh(b);
  };
  ba.Nh = function () {
    for (var a, b = 0; b < arguments.length; b++) a = Ka(this.j, arguments[b]);
    return a;
  };
  ba.Ik = function (a) {
    var b = Ia(this.j);
    b.j = a;
    for (var c, d = 1; d < arguments.length; d++) c = Ka(b, arguments[d]);
    return c;
  };
  ba.Ja = function () {
    this.j.Ja();
  };
  var Ma = function () {
    Da.call(this);
    this.D = !1;
  };
  ya(Ma, Da);
  var Na = function (a, b) {
    var c = [],
      d;
    for (d in a.j)
      if (a.j.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  Ma.prototype.set = function (a, b) {
    this.D || Da.prototype.set.call(this, a, b);
  };
  Ma.prototype.Ph = function (a, b) {
    this.D || Da.prototype.Ph.call(this, a, b);
  };
  Ma.prototype.remove = function (a) {
    this.D || Da.prototype.remove.call(this, a);
  };
  Ma.prototype.Ja = function () {
    this.D = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Pa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Qa = function (a) {
      if (a == null) return String(a);
      var b = Pa.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Ra = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Ta = function (a) {
      if (!a || Qa(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Ra(a, "constructor") &&
          !Ra(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Ra(a, b);
    },
    h = function (a, b) {
      var c = b || (Qa(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Ra(a, d)) {
          var e = a[d];
          Qa(e) == "array"
            ? (Qa(c[d]) != "array" && (c[d] = []), (c[d] = h(e, c[d])))
            : Ta(e)
            ? (Ta(c[d]) || (c[d] = {}), (c[d] = h(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Ua(a) {
    if (a == void 0 || Array.isArray(a) || Ta(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Va(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Wa = function (a) {
    this.j = [];
    this.H = !1;
    this.D = new Ma();
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Va(b) ? (this.j[Number(b)] = a[Number(b)]) : this.D.set(b, a[b]));
  };
  ba = Wa.prototype;
  ba.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.j.length; c++) {
      var d = this.j[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Wa
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  ba.set = function (a, b) {
    if (!this.H)
      if (a === "length") {
        if (!Va(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.j.length = Number(b);
      } else Va(a) ? (this.j[Number(a)] = b) : this.D.set(a, b);
  };
  ba.get = function (a) {
    return a === "length"
      ? this.length()
      : Va(a)
      ? this.j[Number(a)]
      : this.D.get(a);
  };
  ba.length = function () {
    return this.j.length;
  };
  ba.Ob = function () {
    for (var a = Na(this.D, 1), b = 0; b < this.j.length; b++) a.push(b + "");
    return new Wa(a);
  };
  ba.remove = function (a) {
    Va(a) ? delete this.j[Number(a)] : this.D.remove(a);
  };
  ba.pop = function () {
    return this.j.pop();
  };
  ba.push = function () {
    return this.j.push.apply(this.j, Array.prototype.slice.call(arguments));
  };
  ba.shift = function () {
    return this.j.shift();
  };
  ba.splice = function (a, b) {
    return new Wa(this.j.splice.apply(this.j, arguments));
  };
  ba.unshift = function () {
    return this.j.unshift.apply(this.j, Array.prototype.slice.call(arguments));
  };
  ba.has = function (a) {
    return (Va(a) && this.j.hasOwnProperty(a)) || this.D.has(a);
  };
  ba.Ja = function () {
    this.H = !0;
    Object.freeze(this.j);
    this.D.Ja();
  };
  function Xa(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var Ya = function () {
    Ma.call(this);
  };
  ya(Ya, Ma);
  Ya.prototype.Ob = function () {
    return new Wa(Na(this, 1));
  };
  var Za = function (a) {
    for (var b = Na(a, 3), c = new Wa(), d = 0; d < b.length; d++) {
      var e = new Wa(b[d]);
      c.push(e);
    }
    return c;
  };
  function ab() {
    for (var a = bb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function cb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var bb, db;
  function eb(a) {
    bb = bb || cb();
    db = db || ab();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(bb[m], bb[n], bb[p], bb[q]);
    }
    return b.join("");
  }
  function fb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = db[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    bb = bb || cb();
    db = db || ab();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var gb = {};
  function hb(a, b) {
    gb[a] = gb[a] || [];
    gb[a][b] = !0;
  }
  function ib(a) {
    var b = gb[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return eb(c.join("")).replace(/\.+$/, "");
  }
  function jb() {
    for (var a = [], b = gb.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  var kb = [],
    lb = {};
  function mb(a) {
    return kb[a] === void 0 ? !1 : kb[a];
  }
  function nb() {}
  function ob(a) {
    return typeof a === "function";
  }
  function l(a) {
    return typeof a === "string";
  }
  function pb(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function qb(a) {
    return Array.isArray(a) ? a : [a];
  }
  function rb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function sb(a, b) {
    if (!pb(a) || !pb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function tb(a, b) {
    for (var c = new ub(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function z(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function vb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function wb(a) {
    return Math.round(Number(a)) || 0;
  }
  function xb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function yb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function zb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function Ab() {
    return new Date(Date.now());
  }
  function Bb() {
    return Ab().getTime();
  }
  var ub = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  ub.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ub.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  ub.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function Cb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function Db(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function Eb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function Fb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function Gb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function Hb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function Ib(a, b) {
    var c = E;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function Jb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var Kb = /^\w{1,9}$/;
  function Lb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    z(a, function (d, e) {
      Kb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Mb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Nb(a) {
    if (!a) return a;
    var b = a;
    if (mb(3))
      try {
        b = decodeURIComponent(a);
      } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  var Ob,
    Pb = function () {
      if (Ob === void 0) {
        var a = null,
          b = Aa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Ba,
              createScript: Ba,
              createScriptURL: Ba,
            });
          } catch (c) {
            Aa.console && Aa.console.error(c.message);
          }
          Ob = a;
        } else Ob = a;
      }
      return Ob;
    };
  var Qb = {},
    Rb = function (a) {
      this.j = a;
    };
  Rb.prototype.toString = function () {
    return this.j + "";
  };
  var Sb = function (a) {
      return a instanceof Rb && a.constructor === Rb
        ? a.j
        : "type_error:TrustedResourceUrl";
    },
    Tb = function (a) {
      var b = a,
        c = Pb(),
        d = c ? c.createScriptURL(b) : b;
      return new Rb(d, Qb);
    }; /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Ub = ja([""]),
    Vb = ka(["\x00"], ["\\0"]),
    Wb = ka(["\n"], ["\\n"]),
    Xb = ka(["\x00"], ["\\u0000"]);
  function Yb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Yb(function (a) {
    return a(Ub);
  }) ||
    Yb(function (a) {
      return a(Vb);
    }) ||
    Yb(function (a) {
      return a(Wb);
    }) ||
    Yb(function (a) {
      return a(Xb);
    });
  var Zb = function (a) {
    this.j = a;
  };
  Zb.prototype.toString = function () {
    return this.j;
  };
  var $b = new Zb("about:invalid#zClosurez");
  var ac = function (a) {
    this.bm = a;
  };
  function bc(a) {
    return new ac(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var cc = [
    bc("data"),
    bc("http"),
    bc("https"),
    bc("mailto"),
    bc("ftp"),
    new ac(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function dc(a, b) {
    b = b === void 0 ? cc : b;
    if (a instanceof Zb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof ac && d.bm(a)) return new Zb(a);
    }
  }
  function ec(a) {
    var b;
    b = b === void 0 ? cc : b;
    return dc(a, b) || $b;
  }
  var fc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function gc(a) {
    var b;
    if (a instanceof Zb)
      if (a instanceof Zb) b = a.j;
      else throw Error("");
    else b = fc.test(a) ? a : void 0;
    return b;
  }
  var ic = function () {
    this.j = hc[0].toLowerCase();
  };
  ic.prototype.toString = function () {
    return this.j;
  };
  var jc = function (a) {
    this.j = a;
  };
  jc.prototype.toString = function () {
    return this.j + "";
  };
  function kc(a, b) {
    var c = [new ic()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof ic) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function lc(a, b) {
    var c = gc(b);
    c !== void 0 && (a.action = c);
  }
  var mc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function nc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var E = window,
    F = document,
    oc = navigator,
    pc = function () {
      var a;
      try {
        a = oc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    qc = F.currentScript,
    rc = qc && qc.src,
    sc = function (a, b) {
      var c = E[a];
      E[a] = c === void 0 ? b : c;
      return E[a];
    };
  function tc(a) {
    return (oc.userAgent || "").indexOf(a) !== -1;
  }
  var uc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    vc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function wc(a, b, c) {
    b &&
      z(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var xc = function (a, b, c, d, e) {
      var f = F.createElement("script");
      wc(f, d, uc);
      f.type = "text/javascript";
      f.async = d && d.async === !1 ? !1 : !0;
      var g;
      g = Tb(nc(a));
      f.src = Sb(g);
      var k,
        m,
        n,
        p =
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector) == null
            ? void 0
            : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", k);
      b && (f.onload = b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = F.getElementsByTagName("script")[0] || F.body || F.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    yc = function () {
      if (rc) {
        var a = rc.toLowerCase();
        if (a.indexOf("https://") === 0) return 2;
        if (a.indexOf("http://") === 0) return 3;
      }
      return 1;
    },
    zc = function (a, b, c, d, e) {
      var f;
      f = f === void 0 ? !0 : f;
      var g = e,
        k = !1;
      g || ((g = F.createElement("iframe")), (k = !0));
      wc(g, c, vc);
      d &&
        z(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      a !== void 0 && (g.src = a);
      if (k) {
        var m = (F.body && F.body.lastChild) || F.body || F.head;
        m.parentNode.insertBefore(g, m);
      }
      b && (g.onload = b);
      return g;
    },
    Ac = function (a, b, c, d) {
      var e = new Image(1, 1);
      wc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
      return e;
    },
    Bc = function (a, b, c, d) {
      Ac(a, b, c, d);
    },
    Cc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Dc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      E.setTimeout(a, 0);
    },
    Ec = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Fc = function (a) {
      function b(e) {
        e && e != " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        e && e != " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        e && (e = e.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return e;
      }
      var c = b(a.innerText || a.textContent || "");
      if (mb(10)) {
        var d = b(a.textContent || "");
        hb("TAGGING", 26);
        d !== c && hb("TAGGING", 25);
      }
      return c;
    },
    Gc = function (a) {
      var b = F.createElement("div"),
        c = b,
        d,
        e = nc("A<div>" + a + "</div>"),
        f = Pb();
      d = new jc(f ? f.createHTML(e) : e);
      if (c.nodeType === 1) {
        var g = c.tagName;
        if (g === "SCRIPT" || g === "STYLE") throw Error("");
      }
      var k;
      if (d instanceof jc) k = d.j;
      else throw Error("");
      c.innerHTML = k;
      b = b.lastChild;
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild));
      return m;
    },
    Hc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Ic = function (a) {
      var b;
      try {
        b = oc.sendBeacon && oc.sendBeacon(a);
      } catch (c) {
        hb("TAGGING", 15);
      }
      b || Ac(a);
    },
    Jc = function (a, b) {
      try {
        return oc.sendBeacon(a, b);
      } catch (c) {
        hb("TAGGING", 15);
      }
      return !1;
    },
    Kc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    Mc = function (a, b, c) {
      if (Lc()) {
        var d = Object.assign({}, Kc);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          var e = E.fetch(a, d);
          e && e.catch(nb);
          return !0;
        } catch (f) {}
      }
      if (c && c.noFallback) return !1;
      if (b) return Jc(a, b);
      Ic(a);
      return !0;
    },
    Lc = function () {
      return typeof E.fetch === "function";
    },
    Nc = function (a, b) {
      var c = a[b];
      c && typeof c.animVal === "string" && (c = c.animVal);
      return c;
    },
    Oc = function () {
      var a = E.performance;
      if (a && ob(a.now)) return a.now();
    },
    Pc = function () {
      return E.performance || void 0;
    };
  function Qc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Rc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Sc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Tc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Uc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Vc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = E.location.href;
        b instanceof Ya &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  }
  var Wc = function (a, b) {
    Ma.call(this);
    this.Lj = a;
    this.kh = b;
  };
  ya(Wc, Ma);
  ba = Wc.prototype;
  ba.toString = function () {
    return this.Lj;
  };
  ba.getName = function () {
    return this.Lj;
  };
  ba.Ob = function () {
    return new Wa(Na(this, 1));
  };
  ba.invoke = function (a) {
    return this.kh.apply(
      new Xc(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  ba.fb = function (a) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (b) {}
  };
  var Xc = function (a, b) {
    this.kh = a;
    this.F = b;
  };
  Xc.prototype.evaluate = function (a) {
    var b = this.F;
    return Array.isArray(a) ? Ka(b, a) : a;
  };
  Xc.prototype.getName = function () {
    return this.kh.getName();
  };
  Xc.prototype.pd = function () {
    return this.F.pd();
  };
  var Yc = function () {
    this.map = new Map();
  };
  Yc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Yc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Zc = function () {
    this.keys = [];
    this.values = [];
  };
  Zc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Zc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function $c() {
    try {
      return Map ? new Yc() : new Zc();
    } catch (a) {
      return new Zc();
    }
  }
  var ad = function (a) {
    if (a instanceof ad) return a;
    if (Ua(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  ad.prototype.getValue = function () {
    return this.value;
  };
  ad.prototype.toString = function () {
    return String(this.value);
  };
  var cd = function (a) {
    Ma.call(this);
    this.promise = a;
    this.set("then", bd(this));
    this.set("catch", bd(this, !0));
    this.set("finally", bd(this, !1, !0));
  };
  ya(cd, Ya);
  var bd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Wc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Wc || (d = void 0);
      e instanceof Wc || (e = void 0);
      var f = Ia(this.F),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new cd(k);
    });
  };
  function I(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m = Na(g, 1), n = 0; n < m.length; n++)
          k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Wa) {
          var m = [];
          d.set(g, m);
          for (var n = g.Ob(), p = 0; p < n.length(); p++)
            m[n.get(p)] = f(g.get(n.get(p)));
          return m;
        }
        if (g instanceof cd) return g.promise;
        if (g instanceof Ya) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Wc) {
          var r = function () {
            for (
              var u = Array.prototype.slice.call(arguments, 0), v = 0;
              v < u.length;
              v++
            )
              u[v] = dd(u[v], b, c);
            var w = new Ga(b ? b.pd() : new Fa());
            b && (w.j = b.j);
            return f(g.invoke.apply(g, [w].concat(u)));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var t = !1;
        switch (c) {
          case 1:
            t = !0;
            break;
          case 2:
            t = !1;
            break;
          case 3:
            t = !1;
            break;
          default:
        }
        if (g instanceof ad && t) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function dd(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || vb(g)) {
          var m = new Wa([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Ta(g)) {
          var p = new Ya();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Wc("", function () {
            for (
              var x = Array.prototype.slice.call(arguments, 0), y = 0;
              y < x.length;
              y++
            )
              x[y] = I(this.evaluate(x[y]), b, c);
            return f((0, this.F.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var v = typeof g;
        if (g === null || v === "string" || v === "number" || v === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new ad(g);
      };
    return f(a);
  }
  function ed() {
    var a = !1;
    return a;
  }
  var fd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Wa)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Wa(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Wa(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Wa(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Xa(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Wa(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Xa(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var gd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ya(gd, Error);
  var hd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    id = new Ca("break"),
    jd = new Ca("continue");
  function kd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function ld(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function md(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof Wa))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = I(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (ed()) throw new gd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (hd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = I(c, void 0, k);
        return dd(a[b].apply(a, m), this.F);
      }
      var n = "TypeError: " + b + " is not a function";
      if (ed()) throw new gd(n);
      throw Error(n);
    }
    if (a instanceof Wa) {
      if (a.has(b)) {
        var p = a.get(b);
        if (p instanceof Wc) {
          var q = Xa(c);
          q.unshift(this.F);
          return p.invoke.apply(p, q);
        }
        var r = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(r);
        throw Error(r);
      }
      if (fd.supportedMethods.indexOf(b) >= 0) {
        var t = Xa(c);
        t.unshift(this.F);
        return fd[b].apply(a, t);
      }
    }
    if (a instanceof Wc || a instanceof Ya) {
      if (a.has(b)) {
        var u = a.get(b);
        if (u instanceof Wc) {
          var v = Xa(c);
          v.unshift(this.F);
          return u.invoke.apply(u, v);
        }
        var w = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Wc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has.apply(a, Xa(c));
    }
    if (a instanceof ad && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (ed()) throw new gd(x);
    throw Error(x);
  }
  function nd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.F;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function od() {
    var a = Ia(this.F),
      b = Ja(a, Array.prototype.slice.apply(arguments));
    if (b instanceof Ca) return b;
  }
  function pd() {
    return id;
  }
  function qd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ca) return d;
    }
  }
  function rd() {
    for (var a = this.F, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ha(a, c, d, !0);
      }
    }
  }
  function sd() {
    return jd;
  }
  function vd(a, b) {
    return new Ca(a, this.evaluate(b));
  }
  function wd(a, b) {
    var c = new Wa();
    b = this.evaluate(b);
    for (var d = 0; d < b.length; d++) c.push(b[d]);
    var e = [51, a, c].concat(
      Array.prototype.splice.call(arguments, 2, arguments.length - 2)
    );
    this.F.add(a, this.evaluate(e));
  }
  function xd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function yd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof ad,
      d = b instanceof ad;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function zd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function Ad(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ja(f, d);
      if (g instanceof Ca) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function Bd(a, b, c) {
    if (typeof b === "string")
      return Ad(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof Ya || b instanceof Wa || b instanceof Wc) {
      var d = b.Ob(),
        e = d.length();
      return Ad(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Bd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Bd(
      function (e) {
        var f = Ia(d);
        Ha(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Bd(
      function (e) {
        var f = Ia(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Gd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Hd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Gd(
      function (e) {
        var f = Ia(d);
        Ha(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Id(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Gd(
      function (e) {
        var f = Ia(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    if (typeof b === "string")
      return Ad(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Wa)
      return Ad(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (ed()) throw new gd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Jd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var t = f.get(r);
        q.add(t, p.get(t));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Wa))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.F;
    d = this.evaluate(d);
    var k = Ia(g);
    for (e(g, k); Ka(k, b); ) {
      var m = Ja(k, d);
      if (m instanceof Ca) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Ia(g);
      e(k, n);
      Ka(n, c);
      k = n;
    }
  }
  function Kd(a, b) {
    var c = this.F,
      d = this.evaluate(b);
    if (!(d instanceof Wa))
      throw Error("Error: non-List value given for Fn argument names.");
    var e = Array.prototype.slice.call(arguments, 2);
    return new Wc(
      a,
      (function () {
        return function (f) {
          var g = Ia(c);
          g.j === void 0 && (g.j = this.F.j);
          for (
            var k = Array.prototype.slice.call(arguments, 0), m = 0;
            m < k.length;
            m++
          )
            if (((k[m] = this.evaluate(k[m])), k[m] instanceof Ca)) return k[m];
          for (var n = d.get("length"), p = 0; p < n; p++)
            p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
          g.add("arguments", new Wa(k));
          var q = Ja(g, e);
          if (q instanceof Ca) return q.type === "return" ? q.data : q;
        };
      })()
    );
  }
  function Ld(a) {
    a = this.evaluate(a);
    var b = this.F;
    if (Md && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Nd(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    if (a instanceof Ya || a instanceof Wa || a instanceof Wc) c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Va(b) && (c = a[b]);
    else if (a instanceof ad) return;
    return c;
  }
  function Od(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Pd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Qd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof ad && (a = a.getValue());
    b instanceof ad && (b = b.getValue());
    return a === b;
  }
  function Rd(a, b) {
    return !Qd.call(this, a, b);
  }
  function Sd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ja(this.F, d);
    if (e instanceof Ca) return e;
  }
  var Md = !1;
  function Td(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Ud(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Vd() {
    for (var a = new Wa(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Wd() {
    for (var a = new Ya(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Xd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Yd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Zd(a) {
    return -this.evaluate(a);
  }
  function $d(a) {
    return !this.evaluate(a);
  }
  function ae(a, b) {
    return !yd.call(this, a, b);
  }
  function be() {
    return null;
  }
  function ce(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function de(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function ee(a) {
    return this.evaluate(a);
  }
  function fe() {
    return Array.prototype.slice.apply(arguments);
  }
  function ge(a) {
    return new Ca("return", this.evaluate(a));
  }
  function he(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    (a instanceof Wc || a instanceof Wa || a instanceof Ya) && a.set(b, c);
    return c;
  }
  function ie(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function je(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Ca)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ca && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function ke(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function le(a) {
    a = this.evaluate(a);
    return a instanceof Wc ? "function" : typeof a;
  }
  function me() {
    for (var a = this.F, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function ne(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ja(this.F, e);
      if (f instanceof Ca) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ja(this.F, e);
      if (g instanceof Ca) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function oe(a) {
    return ~Number(this.evaluate(a));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function ue(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ve() {}
  function we(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ca) return g;
    } catch (r) {
      if (!(r instanceof gd && a)) throw ((f = r instanceof gd), r);
      var k = Ia(this.F),
        m = new ad(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ja(k, n);
      if (p instanceof Ca) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ca) return q;
      }
    }
  }
  var ye = function () {
    this.j = new La();
    xe(this);
  };
  ye.prototype.execute = function (a) {
    return this.j.Nh(a);
  };
  var xe = function (a) {
    var b = function (c, d) {
      var e = new Wc(String(c), d);
      e.Ja();
      a.j.j.set(String(c), e);
    };
    b("map", Wd);
    b("and", Qc);
    b("contains", Tc);
    b("equals", Rc);
    b("or", Sc);
    b("startsWith", Uc);
    b("variable", Vc);
  };
  var Ae = function () {
    this.D = !1;
    this.j = new La();
    ze(this);
    this.D = !0;
  };
  Ae.prototype.execute = function (a) {
    return Be(this.j.Nh(a));
  };
  var Ce = function (a, b, c) {
    return Be(a.j.Ik(b, c));
  };
  Ae.prototype.Ja = function () {
    this.j.Ja();
  };
  var ze = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new Wc(e, d);
      f.Ja();
      a.j.j.set(e, f);
    };
    b(0, kd);
    b(1, ld);
    b(2, md);
    b(3, nd);
    b(56, se);
    b(57, pe);
    b(58, oe);
    b(59, ue);
    b(60, qe);
    b(61, re);
    b(62, te);
    b(53, od);
    b(4, pd);
    b(5, qd);
    b(52, rd);
    b(6, sd);
    b(49, vd);
    b(7, Vd);
    b(8, Wd);
    b(9, qd);
    b(50, wd);
    b(10, xd);
    b(12, yd);
    b(13, zd);
    b(51, Kd);
    b(47, Cd);
    b(54, Dd);
    b(55, Ed);
    b(63, Jd);
    b(64, Fd);
    b(65, Hd);
    b(66, Id);
    b(15, Ld);
    b(16, Nd);
    b(17, Nd);
    b(18, Od);
    b(19, Pd);
    b(20, Qd);
    b(21, Rd);
    b(22, Sd);
    b(23, Td);
    b(24, Ud);
    b(25, Xd);
    b(26, Yd);
    b(27, Zd);
    b(28, $d);
    b(29, ae);
    b(45, be);
    b(30, ce);
    b(32, de);
    b(33, de);
    b(34, ee);
    b(35, ee);
    b(46, fe);
    b(36, ge);
    b(43, he);
    b(37, ie);
    b(38, je);
    b(39, ke);
    b(67, we);
    b(40, le);
    b(44, ve);
    b(41, me);
    b(42, ne);
  };
  Ae.prototype.pd = function () {
    return this.j.pd();
  };
  function Be(a) {
    if (
      a instanceof Ca ||
      a instanceof Wc ||
      a instanceof Wa ||
      a instanceof Ya ||
      a instanceof ad ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var De = function (a) {
    this.message = a;
  };
  function Ee(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new De(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Fe(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Ge = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function He(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + Ee(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + Ee(a | b) + c);
  }
  var Ie = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      lk: a("consent"),
      Zh: a("convert_case_to"),
      ai: a("convert_false_to"),
      bi: a("convert_null_to"),
      di: a("convert_true_to"),
      ei: a("convert_undefined_to"),
      gn: a("debug_mode_metadata"),
      ma: a("function"),
      Pg: a("instance_name"),
      Lk: a("live_only"),
      Mk: a("malware_disabled"),
      METADATA: a("metadata"),
      Pk: a("original_activity_id"),
      qn: a("original_vendor_template_id"),
      pn: a("once_on_load"),
      Ok: a("once_per_event"),
      lj: a("once_per_load"),
      sn: a("priority_override"),
      tn: a("respected_consent_types"),
      tj: a("setup_tags"),
      se: a("tag_id"),
      yj: a("teardown_tags"),
    };
  })();
  var Je = [],
    Ke = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    Le = function (a) {
      return Ke[a];
    },
    Me = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Se = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Te = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\v": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    },
    Ue = function (a) {
      return Te[a];
    };
  Je[7] = function (a) {
    return String(a).replace(Se, Ue);
  };
  Je[8] = function (a) {
    if (a == null) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Se, Ue) + "'";
    }
  };
  var bf =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    cf = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    },
    df = function (a) {
      return cf[a];
    };
  Je[16] = function (a) {
    return a;
  };
  var ff;
  var gf = [],
    hf = [],
    jf = [],
    kf = [],
    lf = [],
    mf = {},
    nf,
    of;
  function pf(a) {
    of = of || a;
  }
  function qf(a) {}
  var rf,
    sf = [],
    tf = [];
  function uf(a, b) {
    var c = {};
    c[Ie.ma] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function vf(a, b, c) {
    try {
      return nf(wf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function xf(a) {
    var b = a[Ie.ma];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!mf[b];
  }
  var wf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = yf(a[e], b, c));
      return d;
    },
    yf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(yf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = gf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Ie.Pg]);
            try {
              var m = wf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = zf(m, { event: b, index: f, type: 2, name: k });
              rf && (d = rf.jl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[yf(a[n], b, c)] = yf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = yf(a[q], b, c);
              of && (p = p || of.Yl(r));
              d.push(r);
            }
            return of && p ? of.nl(d) : d.join("");
          case "escape":
            d = yf(a[1], b, c);
            if (of && Array.isArray(a[1]) && a[1][0] === "macro" && of.Zl(a))
              return of.zm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Je[a[t]] && (d = Je[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!kf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { Ej: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Ie.ma] = a[1];
            var w = vf(v, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    zf = function (a, b) {
      var c = a[Ie.ma],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = mf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          sf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          Gb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = gf[q];
                  break;
                case 1:
                  r = kf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[Ie.Pg];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && tf.indexOf(c) === -1) {
        tf.push(c);
        var x = Bb();
        u = e(g);
        var y = Bb() - x,
          A = Bb();
        v = ff(c, k, b);
        w = y - (Bb() - A);
      } else if ((e && (u = e(g)), !e || f)) v = ff(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Ua(u)
          ? (Array.isArray(u)
              ? Array.isArray(v)
              : Ta(u)
              ? Ta(v)
              : typeof u === "function"
              ? typeof v === "function"
              : u === v) || d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    };
  var Af = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ya(Af, Error);
  Af.prototype.getMessage = function () {
    return this.message;
  };
  function Bf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Bf(a[c], b[c]);
    }
  }
  var Cf = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.qm = a;
    this.j = [];
    this.D = b;
  };
  ya(Cf, Error);
  function Df() {
    return function (a, b) {
      a instanceof Cf || (a = new Cf(a, Ef));
      b && a instanceof Cf && a.j.push(b);
      throw a;
    };
  }
  function Ef(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) pb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Ff(a) {
    function b(r) {
      for (var t = 0; t < r.length; t++) d[r[t]] = !0;
    }
    for (var c = [], d = [], e = Gf(a), f = 0; f < hf.length; f++) {
      var g = hf[f],
        k = Hf(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < kf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Hf(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Gf(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = vf(jf[c], a));
      return b[c];
    };
  }
  var If = {
    jl: function (a, b) {
      b[Ie.Zh] &&
        typeof a === "string" &&
        (a = b[Ie.Zh] === 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Ie.bi) && a === null && (a = b[Ie.bi]);
      b.hasOwnProperty(Ie.ei) && a === void 0 && (a = b[Ie.ei]);
      b.hasOwnProperty(Ie.di) && a === !0 && (a = b[Ie.di]);
      b.hasOwnProperty(Ie.ai) && a === !1 && (a = b[Ie.ai]);
      return a;
    },
  };
  var Jf = function () {
      this.j = {};
    },
    Lf = function (a, b) {
      var c = Kf.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, pa(za.apply(0, arguments)));
      });
    };
  function Mf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new Af(c, d, g);
      }
  }
  function Nf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Mf(e, b, d, g);
          Mf(f, b, d, g);
        }
      }
    };
  }
  var Rf = function () {
      var a = data.permissions || {},
        b = Of.ctid,
        c = this;
      this.D = {};
      this.j = new Jf();
      var d = {},
        e = {},
        f = Nf(this.j, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      z(a, function (g, k) {
        function m(p) {
          var q = za.apply(1, arguments);
          if (!n[p])
            throw Pf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(pa(q)));
        }
        var n = {};
        z(k, function (p, q) {
          var r = Qf(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.N);
          r.Aj && !e[p] && (e[p] = r.Aj);
        });
        c.D[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Pf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [m].concat(pa(t.slice(1))));
        };
      });
    },
    Sf = function (a) {
      return Kf.D[a] || function () {};
    };
  function Qf(a, b) {
    var c = uf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Pf;
    try {
      return zf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Af(e, {}, "Permission " + e + " is unknown.");
        },
        N: function () {
          throw new Af(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Pf(a, b, c) {
    return new Af(a, b, c);
  }
  var Tf = !1;
  var Uf = {};
  Uf.dk = xb("");
  Uf.sl = xb("");
  var $f = {},
    ag =
      (($f.uaa = !0),
      ($f.uab = !0),
      ($f.uafvl = !0),
      ($f.uamb = !0),
      ($f.uam = !0),
      ($f.uap = !0),
      ($f.uapv = !0),
      ($f.uaw = !0),
      $f);
  var ig = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!gg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!hg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? Gb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    hg = /^[a-z$_][\w$]*$/i,
    gg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var jg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function kg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var lg = new ub();
  function mg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = lg.get(e);
      f || ((f = new RegExp(b, d)), lg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function ng(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function og(a, b) {
    return String(a) === String(b);
  }
  function pg(a, b) {
    return Number(a) >= Number(b);
  }
  function qg(a, b) {
    return Number(a) <= Number(b);
  }
  function rg(a, b) {
    return Number(a) > Number(b);
  }
  function sg(a, b) {
    return Number(a) < Number(b);
  }
  function tg(a, b) {
    return Gb(String(a), String(b));
  }
  var ug = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    vg = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      ug(b, "/*") && (b = b.slice(0, -2));
      ug(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    wg = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    zg = function (a, b) {
      var c;
      if (!(c = !wg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!xg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!yg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var t = m.hostname,
          u = q;
        if (u.indexOf("*.") !== 0) r = t.toLowerCase() === u.toLowerCase();
        else {
          u = u.slice(2);
          var v = t.toLowerCase().indexOf(u.toLowerCase());
          r =
            v === -1
              ? !1
              : t.length === u.length
              ? !0
              : t.length !== u.length + v
              ? !1
              : t[v - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = vg(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    xg = /^[a-z0-9-]+$/i,
    yg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var Ag =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Bg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function J(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = Ag.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Wc
          ? (n = "Fn")
          : m instanceof Wa
          ? (n = "List")
          : m instanceof Ya
          ? (n = "PixieMap")
          : m instanceof ad && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Bg[n] || n) + ", which does not match required type ") +
              ((Bg[k] || k) + ".")
          );
      }
    }
  }
  function Cg(a) {
    return "" + a;
  }
  function Dg(a, b) {
    var c = [];
    return c;
  }
  function Eg(a, b) {
    var c = new Wc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (ed()) throw new gd(g.message);
        throw g;
      }
    });
    c.Ja();
    return c;
  }
  function Fg(a, b) {
    var c = new Ya(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        ob(e)
          ? c.set(d, Eg(a + "_" + d, e))
          : Ta(e)
          ? c.set(d, Fg(a + "_" + d, e))
          : (pb(e) || l(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ja();
    return c;
  }
  function Gg(a, b) {
    J(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new Ya();
    return (d = Fg("AssertApiSubject", c));
  }
  function Hg(a, b) {
    J(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof cd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new Ya();
    return (d = Fg("AssertThatSubject", c));
  }
  function Ig(a) {
    return function () {
      for (var b = [], c = this.F, d = 0; d < arguments.length; ++d)
        b.push(I(arguments[d], c));
      return dd(a.apply(null, b));
    };
  }
  function Jg() {
    for (var a = Math, b = Kg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Ig(a[e].bind(a)));
    }
    return c;
  }
  function Lg(a) {
    var b;
    return b;
  }
  function Mg(a) {
    var b;
    return b;
  }
  function Ng(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function Og(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function Tg(a) {
    J(this.getName(), ["message:?string"], arguments);
  }
  function Ug(a, b) {
    J(this.getName(), ["min:!number", "max:!number"], arguments);
    return sb(a, b);
  }
  function Vg() {
    return new Date().getTime();
  }
  function Wg(a) {
    if (a === null) return "null";
    if (a instanceof Wa) return "array";
    if (a instanceof Wc) return "function";
    if (a instanceof ad) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function Xg(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Tf || Uf.dk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return dd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(I(c));
      }),
    };
  }
  function Yg(a) {
    return wb(I(a, this.F));
  }
  function Zg(a) {
    return Number(I(a, this.F));
  }
  function $g(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function ah(a, b, c) {
    var d = null,
      e = !1;
    J(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new Ya();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof Ya &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Kg = "floor ceil round max min abs pow sqrt".split(" ");
  function bh() {
    var a = {};
    return {
      Dl: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Yj: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function ch(a, b) {
    return function () {
      var c = Array.prototype.slice.call(za.apply(0, arguments), 0);
      c.unshift(b);
      return Wc.prototype.invoke.apply(a, c);
    };
  }
  function dh(a, b) {
    J(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function eh(a, b) {
    J(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var fh = {};
  var gh = function (a) {
    var b = new Ya();
    if (a instanceof Wa)
      for (var c = a.Ob(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Wc)
      for (var f = Na(a, 1), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  fh.keys = function (a) {
    J(this.getName(), ["input:!*"], arguments);
    if (a instanceof Wa || a instanceof Wc || typeof a === "string") a = gh(a);
    if (a instanceof Ya) return a.Ob();
    return new Wa();
  };
  fh.values = function (a) {
    J(this.getName(), ["input:!*"], arguments);
    if (a instanceof Wa || a instanceof Wc || typeof a === "string") a = gh(a);
    if (a instanceof Ya) return new Wa(Na(a, 2));
    return new Wa();
  };
  fh.entries = function (a) {
    J(this.getName(), ["input:!*"], arguments);
    if (a instanceof Wa || a instanceof Wc || typeof a === "string") a = gh(a);
    if (a instanceof Ya) return Za(a);
    return new Wa();
  };
  fh.freeze = function (a) {
    (a instanceof Ya || a instanceof Wa || a instanceof Wc) && a.Ja();
    return a;
  };
  fh.delete = function (a, b) {
    if (a instanceof Ya && !a.D) return a.remove(b), !0;
    return !1;
  };
  function M(a, b) {
    var c = za.apply(2, arguments),
      d = a.F.j;
    if (!d) throw Error("Missing program state.");
    if (d.Fm) {
      try {
        d.Bj.apply(null, [b].concat(pa(c)));
      } catch (e) {
        throw (hb("TAGGING", 21), e);
      }
      return;
    }
    d.Bj.apply(null, [b].concat(pa(c)));
  }
  var hh = function () {
    this.D = {};
    this.j = {};
    this.H = !0;
  };
  hh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.D[a] : void 0;
    return c;
  };
  hh.prototype.contains = function (a) {
    return this.D.hasOwnProperty(a);
  };
  hh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.D[a] = c ? void 0 : ob(b) ? Eg(a, b) : Fg(a, b);
  };
  function ih(a, b) {
    var c = void 0;
    return c;
  }
  function jh() {
    var a = {};
    return a;
  }
  function kh(a) {
    return lh ? F.querySelectorAll(a) : null;
  }
  function mh(a, b) {
    if (!lh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!F.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var nh = !1;
  if (F.querySelectorAll)
    try {
      var oh = F.querySelectorAll(":root");
      oh && oh.length == 1 && oh[0] == F.documentElement && (nh = !0);
    } catch (a) {}
  var lh = nh;
  var ph = /^[0-9A-Fa-f]{64}$/;
  function qh(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function rh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = E.crypto) == null ? 0 : b.subtle) {
      if (ph.test(a)) return Promise.resolve(a);
      try {
        var c = qh(a);
        return E.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return E.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function O(a) {
    hb("GTM", a);
  }
  var P = {
      g: {
        wa: "ad_personalization",
        P: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        Db: "region",
        Rb: "consent_updated",
        Ze: "wait_for_update",
        gi: "app_remove",
        hi: "app_store_refund",
        ii: "app_store_subscription_cancel",
        ji: "app_store_subscription_convert",
        ki: "app_store_subscription_renew",
        pk: "consent_update",
        Yf: "add_payment_info",
        Zf: "add_shipping_info",
        kc: "add_to_cart",
        mc: "remove_from_cart",
        cg: "view_cart",
        Sb: "begin_checkout",
        nc: "select_item",
        ib: "view_item_list",
        Eb: "select_promotion",
        jb: "view_promotion",
        Ga: "purchase",
        oc: "refund",
        La: "view_item",
        dg: "add_to_wishlist",
        qk: "exception",
        li: "first_open",
        mi: "first_visit",
        ba: "gtag.config",
        Sa: "gtag.get",
        ni: "in_app_purchase",
        Tb: "page_view",
        rk: "screen_view",
        oi: "session_start",
        sk: "timing_complete",
        tk: "track_social",
        Lc: "user_engagement",
        uk: "user_id_update",
        kb: "gclgb",
        Ta: "gclid",
        ri: "gclgs",
        si: "gclst",
        fa: "ads_data_redaction",
        ui: "gad_source",
        vi: "gad_source_src",
        Dd: "gclid_url",
        wi: "gclsrc",
        eg: "gbraid",
        af: "wbraid",
        ja: "allow_ad_personalization_signals",
        bf: "allow_custom_scripts",
        Ed: "allow_direct_google_requests",
        cf: "allow_display_features",
        Fd: "allow_enhanced_conversions",
        lb: "allow_google_signals",
        Aa: "allow_interest_groups",
        vk: "app_id",
        wk: "app_installer_id",
        xk: "app_name",
        yk: "app_version",
        Fb: "auid",
        xi: "auto_detection_enabled",
        Ub: "aw_remarketing",
        df: "aw_remarketing_only",
        Gd: "discount",
        Hd: "aw_feed_country",
        Id: "aw_feed_language",
        da: "items",
        Jd: "aw_merchant_id",
        fg: "aw_basket_type",
        Mc: "campaign_content",
        Nc: "campaign_id",
        Oc: "campaign_medium",
        Pc: "campaign_name",
        Qc: "campaign",
        Rc: "campaign_source",
        Sc: "campaign_term",
        nb: "client_id",
        yi: "rnd",
        gg: "consent_update_type",
        zi: "content_group",
        Ai: "content_type",
        Xa: "conversion_cookie_prefix",
        Tc: "conversion_id",
        oa: "conversion_linker",
        Bi: "conversion_linker_disabled",
        Vb: "conversion_api",
        ef: "cookie_deprecation",
        Ua: "cookie_domain",
        Ma: "cookie_expires",
        Ya: "cookie_flags",
        qc: "cookie_name",
        Gb: "cookie_path",
        Na: "cookie_prefix",
        rc: "cookie_update",
        sc: "country",
        xa: "currency",
        Kd: "customer_lifetime_value",
        Uc: "custom_map",
        hg: "gcldc",
        Ld: "dclid",
        Ci: "debug_mode",
        ka: "developer_id",
        Di: "disable_merchant_reported_purchases",
        Vc: "dc_custom_params",
        Ei: "dc_natural_search",
        ig: "dynamic_event_settings",
        jg: "affiliation",
        Md: "checkout_option",
        ff: "checkout_step",
        kg: "coupon",
        Wc: "item_list_name",
        hf: "list_name",
        Fi: "promotions",
        Xc: "shipping",
        jf: "tax",
        Nd: "engagement_time_msec",
        Od: "enhanced_client_id",
        Pd: "enhanced_conversions",
        lg: "enhanced_conversions_automatic_settings",
        Qd: "estimated_delivery_date",
        kf: "euid_logged_in_state",
        Yc: "event_callback",
        zk: "event_category",
        pb: "event_developer_id_string",
        Ak: "event_label",
        uc: "event",
        Rd: "event_settings",
        Sd: "event_timeout",
        Bk: "description",
        Ck: "fatal",
        Gi: "experiments",
        lf: "firebase_id",
        vc: "first_party_collection",
        Td: "_x_20",
        qb: "_x_19",
        Hi: "fledge_drop_reason",
        mg: "fledge",
        ng: "flight_error_code",
        og: "flight_error_message",
        Ii: "fl_activity_category",
        Ji: "fl_activity_group",
        pg: "fl_advertiser_id",
        Ki: "fl_ar_dedupe",
        qg: "match_id",
        Li: "fl_random_number",
        Mi: "tran",
        Ni: "u",
        Ud: "gac_gclid",
        wc: "gac_wbraid",
        rg: "gac_wbraid_multiple_conversions",
        sg: "ga_restrict_domain",
        ug: "ga_temp_client_id",
        xc: "gdpr_applies",
        vg: "geo_granularity",
        Hb: "value_callback",
        rb: "value_key",
        yc: "_google_ng",
        zc: "google_signals",
        wg: "google_tld",
        Vd: "groups",
        xg: "gsa_experiment_id",
        Oi: "gtm_up",
        Ib: "iframe_state",
        Zc: "ignore_referrer",
        nf: "internal_traffic_results",
        Wb: "is_legacy_converted",
        Jb: "is_legacy_loaded",
        Wd: "is_passthrough",
        bd: "_lps",
        Oa: "language",
        Xd: "legacy_developer_id_string",
        qa: "linker",
        Ac: "accept_incoming",
        tb: "decorate_forms",
        W: "domains",
        Kb: "url_position",
        yg: "method",
        Dk: "name",
        dd: "new_customer",
        zg: "non_interaction",
        Pi: "optimize_id",
        Qi: "page_hostname",
        ed: "page_path",
        Ba: "page_referrer",
        Za: "page_title",
        Ag: "passengers",
        Bg: "phone_conversion_callback",
        Ri: "phone_conversion_country_code",
        Cg: "phone_conversion_css_class",
        Si: "phone_conversion_ids",
        Dg: "phone_conversion_number",
        Eg: "phone_conversion_options",
        Fg: "_protected_audience_enabled",
        fd: "quantity",
        Yd: "redact_device_info",
        pf: "referral_exclusion_definition",
        Xb: "restricted_data_processing",
        Ti: "retoken",
        Ek: "sample_rate",
        qf: "screen_name",
        Lb: "screen_resolution",
        Ui: "search_term",
        Ha: "send_page_view",
        Yb: "send_to",
        gd: "server_container_url",
        hd: "session_duration",
        Zd: "session_engaged",
        rf: "session_engaged_time",
        ub: "session_id",
        ae: "session_number",
        tf: "_shared_user_id",
        jd: "delivery_postal_code",
        Fk: "temporary_client_id",
        uf: "topmost_url",
        Vi: "tracking_id",
        vf: "traffic_type",
        ya: "transaction_id",
        Mb: "transport_url",
        Gg: "trip_type",
        Zb: "update",
        Va: "url_passthrough",
        wf: "_user_agent_architecture",
        xf: "_user_agent_bitness",
        yf: "_user_agent_full_version_list",
        zf: "_user_agent_mobile",
        Af: "_user_agent_model",
        Bf: "_user_agent_platform",
        Cf: "_user_agent_platform_version",
        Df: "_user_agent_wow64",
        Ca: "user_data",
        Hg: "user_data_auto_latency",
        Ig: "user_data_auto_meta",
        Jg: "user_data_auto_multi",
        Kg: "user_data_auto_selectors",
        Lg: "user_data_auto_status",
        kd: "user_data_mode",
        be: "user_data_settings",
        za: "user_id",
        ab: "user_properties",
        Wi: "_user_region",
        de: "us_privacy_string",
        la: "value",
        Mg: "wbraid_multiple_conversions",
        he: "_fpm_parameters",
        dj: "_host_name",
        ej: "_in_page_command",
        fj: "_is_passthrough_cid",
        Nb: "non_personalized_ads",
        pe: "_sst_parameters",
        ob: "conversion_label",
        ra: "page_location",
        sb: "global_developer_id_string",
        Bc: "tc_privacy_string",
      },
    },
    Ph = {},
    Qh = Object.freeze(
      ((Ph[P.g.ja] = 1),
      (Ph[P.g.cf] = 1),
      (Ph[P.g.Fd] = 1),
      (Ph[P.g.lb] = 1),
      (Ph[P.g.da] = 1),
      (Ph[P.g.Ua] = 1),
      (Ph[P.g.Ma] = 1),
      (Ph[P.g.Ya] = 1),
      (Ph[P.g.qc] = 1),
      (Ph[P.g.Gb] = 1),
      (Ph[P.g.Na] = 1),
      (Ph[P.g.rc] = 1),
      (Ph[P.g.Uc] = 1),
      (Ph[P.g.ka] = 1),
      (Ph[P.g.ig] = 1),
      (Ph[P.g.Yc] = 1),
      (Ph[P.g.Rd] = 1),
      (Ph[P.g.Sd] = 1),
      (Ph[P.g.vc] = 1),
      (Ph[P.g.sg] = 1),
      (Ph[P.g.zc] = 1),
      (Ph[P.g.wg] = 1),
      (Ph[P.g.Vd] = 1),
      (Ph[P.g.nf] = 1),
      (Ph[P.g.Wb] = 1),
      (Ph[P.g.Jb] = 1),
      (Ph[P.g.qa] = 1),
      (Ph[P.g.pf] = 1),
      (Ph[P.g.Xb] = 1),
      (Ph[P.g.Ha] = 1),
      (Ph[P.g.Yb] = 1),
      (Ph[P.g.gd] = 1),
      (Ph[P.g.hd] = 1),
      (Ph[P.g.rf] = 1),
      (Ph[P.g.jd] = 1),
      (Ph[P.g.Mb] = 1),
      (Ph[P.g.Zb] = 1),
      (Ph[P.g.be] = 1),
      (Ph[P.g.ab] = 1),
      (Ph[P.g.pe] = 1),
      Ph)
    );
  Object.freeze([
    P.g.ra,
    P.g.Ba,
    P.g.Za,
    P.g.Oa,
    P.g.qf,
    P.g.za,
    P.g.lf,
    P.g.zi,
  ]);
  var Rh = {},
    Sh = Object.freeze(
      ((Rh[P.g.gi] = 1),
      (Rh[P.g.hi] = 1),
      (Rh[P.g.ii] = 1),
      (Rh[P.g.ji] = 1),
      (Rh[P.g.ki] = 1),
      (Rh[P.g.li] = 1),
      (Rh[P.g.mi] = 1),
      (Rh[P.g.ni] = 1),
      (Rh[P.g.oi] = 1),
      (Rh[P.g.Lc] = 1),
      Rh)
    ),
    Th = {},
    Uh = Object.freeze(
      ((Th[P.g.Yf] = 1),
      (Th[P.g.Zf] = 1),
      (Th[P.g.kc] = 1),
      (Th[P.g.mc] = 1),
      (Th[P.g.cg] = 1),
      (Th[P.g.Sb] = 1),
      (Th[P.g.nc] = 1),
      (Th[P.g.ib] = 1),
      (Th[P.g.Eb] = 1),
      (Th[P.g.jb] = 1),
      (Th[P.g.Ga] = 1),
      (Th[P.g.oc] = 1),
      (Th[P.g.La] = 1),
      (Th[P.g.dg] = 1),
      Th)
    ),
    Vh = Object.freeze([
      P.g.ja,
      P.g.Ed,
      P.g.lb,
      P.g.rc,
      P.g.vc,
      P.g.Zc,
      P.g.Ha,
      P.g.Zb,
    ]),
    Wh = Object.freeze([].concat(pa(Vh))),
    Xh = Object.freeze([P.g.Ma, P.g.Sd, P.g.hd, P.g.rf, P.g.Nd]),
    Yh = Object.freeze([].concat(pa(Xh))),
    Zh = {},
    $h =
      ((Zh[P.g.P] = "1"),
      (Zh[P.g.U] = "2"),
      (Zh[P.g.O] = "3"),
      (Zh[P.g.wa] = "4"),
      Zh),
    ai = {},
    bi = Object.freeze(
      ((ai[P.g.ja] = 1),
      (ai[P.g.Ed] = 1),
      (ai[P.g.Fd] = 1),
      (ai[P.g.Aa] = 1),
      (ai[P.g.Ub] = 1),
      (ai[P.g.df] = 1),
      (ai[P.g.Gd] = 1),
      (ai[P.g.Hd] = 1),
      (ai[P.g.Id] = 1),
      (ai[P.g.da] = 1),
      (ai[P.g.Jd] = 1),
      (ai[P.g.Xa] = 1),
      (ai[P.g.oa] = 1),
      (ai[P.g.Ua] = 1),
      (ai[P.g.Ma] = 1),
      (ai[P.g.Ya] = 1),
      (ai[P.g.Na] = 1),
      (ai[P.g.xa] = 1),
      (ai[P.g.Kd] = 1),
      (ai[P.g.ka] = 1),
      (ai[P.g.Di] = 1),
      (ai[P.g.Pd] = 1),
      (ai[P.g.Qd] = 1),
      (ai[P.g.lf] = 1),
      (ai[P.g.vc] = 1),
      (ai[P.g.Wb] = 1),
      (ai[P.g.Jb] = 1),
      (ai[P.g.Oa] = 1),
      (ai[P.g.dd] = 1),
      (ai[P.g.ra] = 1),
      (ai[P.g.Ba] = 1),
      (ai[P.g.Bg] = 1),
      (ai[P.g.Cg] = 1),
      (ai[P.g.Dg] = 1),
      (ai[P.g.Eg] = 1),
      (ai[P.g.Xb] = 1),
      (ai[P.g.Ha] = 1),
      (ai[P.g.Yb] = 1),
      (ai[P.g.gd] = 1),
      (ai[P.g.jd] = 1),
      (ai[P.g.ya] = 1),
      (ai[P.g.Mb] = 1),
      (ai[P.g.Zb] = 1),
      (ai[P.g.Va] = 1),
      (ai[P.g.Ca] = 1),
      (ai[P.g.za] = 1),
      (ai[P.g.la] = 1),
      ai)
    ),
    ci = {},
    di = Object.freeze(
      ((ci.search = "s"),
      (ci.youtube = "y"),
      (ci.playstore = "p"),
      (ci.shopping = "h"),
      (ci.ads = "a"),
      (ci.maps = "m"),
      ci)
    );
  Object.freeze(P.g);
  function ei(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var fi = [];
  function gi(a) {
    switch (a) {
      case 0:
        return 0;
      case 43:
        return 1;
      case 44:
        return 2;
      case 45:
        return 11;
      case 51:
        return 3;
      case 59:
        return 4;
      case 67:
        return 7;
      case 77:
        return 5;
      case 90:
        return 6;
      case 91:
        return 10;
      case 93:
        return 8;
      case 94:
        return 9;
    }
  }
  function Q(a) {
    fi[a] = !0;
    var b = gi(a);
    b !== void 0 && (kb[b] = !0);
  }
  Q(31);
  Q(27);
  Q(28);
  Q(29);
  Q(30);
  Q(46);
  Q(71);
  Q(55);
  Q(34);
  Q(16);
  Q(99);
  Q(15);
  Q(104);
  Q(98);
  Q(60);
  Q(79);
  Q(6);
  Q(47);
  Q(4);
  Q(74);
  Q(95);
  Q(66);
  Q(64);
  Q(65);
  Q(76);
  Q(108);
  Q(105);
  Q(77);
  Q(5);
  Q(67);
  Q(90);
  lb[1] = ei("1", 6e4);
  lb[3] = ei("10", 1);
  lb[2] = ei("", 50);
  Q(24);
  Q(12);
  Q(63);
  Q(96);
  Q(8);
  Q(52);
  Q(23);
  Q(42);
  Q(80);
  Q(93);
  Q(94);
  Q(91);
  Q(82);
  Q(49);
  Q(51);
  Q(61);
  Q(13);
  Q(48);
  Q(68);
  function T(a) {
    return !!fi[a];
  }
  var hi = {},
    ii = (E.google_tag_manager = E.google_tag_manager || {});
  hi.Rg = "48r0";
  hi.oe = Number("0") || 0;
  hi.hb = "dataLayer";
  hi.fn =
    "ChAI8LjAtgYQ8/fl7L7C6eFxEiQA4dkr/VZiZNSlM0KolCaG6hEbWmYJjkGdDb0vXqu9uqwqeV0aAnjk";
  var ji = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    ki = { __paused: 1, __tg: 1 },
    li;
  for (li in ji) ji.hasOwnProperty(li) && (ki[li] = 1);
  var mi = xb(""),
    ni = !1,
    oi,
    pi = !1;
  oi = pi;
  var qi,
    ri = !1;
  qi = ri;
  var si,
    ti = !1;
  si = ti;
  hi.Cd = "www.googletagmanager.com";
  var ui = "" + hi.Cd + (oi ? "/gtag/js" : "/gtm.js"),
    vi = null,
    wi = null,
    xi = {},
    yi = {};
  function zi() {
    var a = ii.sequence || 1;
    ii.sequence = a + 1;
    return a;
  }
  hi.mk = "";
  var Ai = "";
  hi.Sg = Ai;
  var Bi = new (function () {
    this.j = "";
    this.H = !1;
    this.D = 0;
    this.R = this.vb = this.Z = this.Pa = this.M = "";
  })();
  function Ci() {
    var a = Bi.M.length;
    return Bi.M[a - 1] === "/" ? Bi.M.substring(0, a - 1) : Bi.M;
  }
  function Di() {
    return Bi.H && Bi.D !== 1;
  }
  function Ei(a) {
    for (var b = {}, c = na(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Fi = new ub(),
    Gi = {},
    Hi = {},
    Ki = {
      name: hi.hb,
      set: function (a, b) {
        h(Jb(a, b), Gi);
        Ii();
      },
      get: function (a) {
        return Ji(a, 2);
      },
      reset: function () {
        Fi = new ub();
        Gi = {};
        Ii();
      },
    };
  function Ji(a, b) {
    return b != 2 ? Fi.get(a) : Li(a);
  }
  function Li(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Gi, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function Mi(a, b) {
    Hi.hasOwnProperty(a) || (Fi.set(a, b), h(Jb(a, b), Gi), Ii());
  }
  function Ni() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Ji(c, 1);
      if (Array.isArray(d) || Ta(d)) d = h(d);
      Hi[c] = d;
    }
  }
  function Ii(a) {
    z(Hi, function (b, c) {
      Fi.set(b, c);
      h(Jb(b), Gi);
      h(Jb(b, c), Gi);
      a && delete Hi[b];
    });
  }
  function Oi(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? Li(a) : Fi.get(a);
    Qa(d) === "array" || Qa(d) === "object" ? (c = h(d)) : (c = d);
    return c;
  }
  var Si = /:[0-9]+$/,
    Ti = /^\d+\.fls\.doubleclick\.net$/;
  function Ui(a, b, c, d) {
    for (
      var e = [], f = na(a.split("&")), g = f.next();
      !g.done;
      g = f.next()
    ) {
      var k = na(g.value.split("=")),
        m = k.next().value,
        n = oa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function Vi(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = Wi(a.protocol) || Wi(E.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : E.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || E.location.hostname)
          .replace(Si, "")
          .toLowerCase());
    return Xi(a, b, c, d, e);
  }
  function Xi(a, b, c, d, e) {
    var f,
      g = Wi(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Yi(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(Si, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || hb("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = Ui(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function Wi(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Yi(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Zi = {},
    $i = 0;
  function aj(a) {
    var b = Zi[a];
    if (!b) {
      var c = F.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || hb("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(Si, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      $i < 5 && ((Zi[a] = b), $i++);
    }
    return b;
  }
  function bj(a) {
    function b(n) {
      var p = n.split("=")[0];
      return d.indexOf(p) < 0 ? n : p + "=0";
    }
    function c(n) {
      return n
        .split("&")
        .map(b)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
        " "
      ),
      e = aj(a),
      f = a.split(/[?#]/)[0],
      g = e.search,
      k = e.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = c(g);
    k = c(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function cj(a) {
    var b = aj(E.location.href),
      c = Vi(b, "host", !1);
    if (c && c.match(Ti)) {
      var d = Vi(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var dj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function ej(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return aj("" + c + b).href;
    }
  }
  function fj(a, b) {
    if (Di() || qi) return ej(a, b);
  }
  function gj() {
    return !!hi.Sg && hi.Sg.split("@@").join("") !== "SGTM_TOKEN";
  }
  function hj(a) {
    for (var b = na([P.g.gd, P.g.Mb]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  function ij(a, b) {
    return Di() ? "" + Ci() + (b ? dj[a] || "" : "") : a;
  }
  function jj(a) {
    var b = String(a[Ie.ma] || "").replace(/_/g, "");
    return Gb(b, "cvt") ? "cvt" : b;
  }
  var kj =
    E.location.search.indexOf("?gtm_latency=") >= 0 ||
    E.location.search.indexOf("&gtm_latency=") >= 0;
  var lj = { sampleRate: "0.005000", ik: "", bn: "0.01" },
    mj = Math.random(),
    nj;
  if (!(nj = kj)) {
    var oj = lj.sampleRate;
    nj = mj < Number(oj);
  }
  var pj = nj,
    qj =
      (rc == null ? void 0 : rc.includes("gtm_debug=d")) ||
      kj ||
      mj >= 1 - Number(lj.bn);
  var rj = /gtag[.\/]js/,
    sj = /gtm[.\/]js/,
    tj = !1;
  function uj(a) {
    if (tj) return "1";
    var b = a.scriptSource;
    if (b) {
      if (rj.test(b)) return "3";
      if (sj.test(b)) return "2";
    }
    return "0";
  }
  function vj(a, b) {
    var c = wj();
    c.pending || (c.pending = []);
    rb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  var xj = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    var a;
    var b = E.google_tags_first_party || [];
    if (Array.isArray(b)) {
      for (var c = {}, d = na(b), e = d.next(); !e.done; e = d.next())
        c[e.value] = !0;
      a = Object.freeze(c);
    } else a = {};
    this.injectedFirstPartyContainers = a;
  };
  function wj() {
    var a = sc("google_tag_data", {}),
      b = a.tidr;
    b || ((b = new xj()), (a.tidr = b));
    return b;
  }
  var yj = {},
    zj = !1,
    Of = {
      ctid: "GTM-TMHDF2L",
      canonicalContainerId: "59974050",
      Oj: "GTM-TMHDF2L",
      Pj: "GTM-TMHDF2L",
    };
  yj.ke = xb("");
  function Aj() {
    var a = Bj();
    return zj ? a.map(Cj) : a;
  }
  function Dj() {
    var a = Ej();
    return zj ? a.map(Cj) : a;
  }
  function Fj() {
    return Gj(Of.ctid);
  }
  function Hj() {
    return Gj(Of.canonicalContainerId || "_" + Of.ctid);
  }
  function Bj() {
    return Of.Oj ? Of.Oj.split("|") : [Of.ctid];
  }
  function Ej() {
    return Of.Pj ? Of.Pj.split("|") : [];
  }
  function Ij() {
    var a = Jj(Kj()),
      b = a && a.parent;
    if (b) return Jj(b);
  }
  function Jj(a) {
    var b = wj();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Gj(a) {
    return zj ? Cj(a) : a;
  }
  function Cj(a) {
    return "siloed_" + a;
  }
  function Oj(a) {
    return zj ? Pj(a) : a;
  }
  function Pj(a) {
    a = String(a);
    return Gb(a, "siloed_") ? a.substring(7) : a;
  }
  function Qj() {
    var a = !1;
    if (a) {
      var b = wj();
      if (b.siloed) {
        for (
          var c = [], d = Bj().map(Cj), e = Ej().map(Cj), f = {}, g = 0;
          g < b.siloed.length;
          f = { Jf: void 0 }, g++
        )
          (f.Jf = b.siloed[g]),
            !zj &&
            rb(
              f.Jf.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.Jf.ctid;
                };
              })(f)
            )
              ? (zj = !0)
              : c.push(f.Jf);
        b.siloed = c;
      }
    }
  }
  function Rj() {
    var a = wj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Aj(), f = Dj(), g = {}, k = 0;
        k < a.pending.length;
        g = { Re: void 0 }, k++
      )
        (g.Re = a.pending[k]),
          rb(
            g.Re.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Re.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Re.onLoad), (d = !0))
            : c.push(g.Re);
      a.pending = c;
      if (b)
        try {
          b(Hj());
        } catch (m) {}
    }
  }
  function Sj() {
    for (
      var a = Of.ctid,
        b = Aj(),
        c = Dj(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Of.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          qc && (q.scriptElement = qc);
          rc && (q.scriptSource = rc);
          if (Ij() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var t;
                b: {
                  if (q.scriptSource) {
                    for (
                      var u = Bi.H,
                        v = aj(q.scriptSource),
                        w = u ? v.pathname : "" + v.hostname + v.pathname,
                        x = F.scripts,
                        y = "",
                        A = 0;
                      A < x.length;
                      ++A
                    ) {
                      var B = x[A];
                      if (
                        !(
                          B.innerHTML.length === 0 ||
                          (!u &&
                            B.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          B.innerHTML.indexOf(w) < 0
                        )
                      ) {
                        if (B.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          t = String(A);
                          break b;
                        }
                        y = String(A);
                      }
                    }
                    if (y) {
                      t = y;
                      break b;
                    }
                  }
                  t = void 0;
                }
                var C = t;
                if (C) {
                  tj = !0;
                  r = C;
                  break a;
                }
              }
              var H = [].slice.call(document.scripts);
              r = q.scriptElement ? String(H.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = uj(q);
          }
          var D = p ? e.destination : e.container,
            K = D[n];
          K ? (p && K.state === 0 && O(93), Object.assign(K, q)) : (D[n] = q);
        },
        e = wj(),
        f = na(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = na(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[Hj()] = {};
    Rj();
  }
  function Tj(a) {
    return !!wj().container[a];
  }
  function Uj(a) {
    var b = wj().destination[a];
    return !!b && !!b.state;
  }
  function Kj() {
    return { ctid: Fj(), isDestination: yj.ke };
  }
  function Vj(a) {
    var b = wj();
    (b.siloed = b.siloed || []).push(a);
  }
  function Wj() {
    var a = wj().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Xj() {
    var a = {};
    z(wj().destination, function (b, c) {
      c.state === 0 && (a[Pj(b)] = c);
    });
    return a;
  }
  function Yj(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var Zj = "/td?id=" + Of.ctid,
    ak = ["v", "t", "pid", "dl", "tdp"],
    bk = ["mcc"],
    ck = {},
    dk = {};
  function ek(a, b, c) {
    dk[a] = b;
    (c === void 0 || c) && fk(a);
  }
  function fk(a, b) {
    if (ck[a] === void 0 || (b === void 0 ? 0 : b)) ck[a] = !0;
  }
  function gk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(ck)
      .filter(function (c) {
        return ck[c] === !0 && dk[c] !== void 0 && (a || !bk.includes(c));
      })
      .map(function (c) {
        var d = dk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + ij("https://www.googletagmanager.com") + Zj + ("" + b + "&z=0");
  }
  function hk() {
    Object.keys(ck).forEach(function (a) {
      ak.indexOf(a) < 0 && (ck[a] = !1);
    });
  }
  function ik(a) {
    a = a === void 0 ? !1 : a;
    if (qj && Of.ctid) {
      var b = gk(a);
      a ? Mc(b) : Ac(b);
      hk();
    }
  }
  function jk() {
    Object.keys(ck).filter(function (a) {
      return ck[a] && !ak.includes(a);
    }).length > 0 && ik(!0);
  }
  var kk = sb();
  function lk() {
    kk = sb();
  }
  function mk() {
    ek("v", "3");
    ek("t", "t");
    ek("pid", function () {
      return String(kk);
    });
    Cc(E, "pagehide", jk);
    E.setInterval(lk, 864e5);
  }
  function nk() {
    var a = sc("google_tag_data", {});
    return (a.ics = a.ics || new ok());
  }
  var ok = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  ok.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    hb("TAGGING", 19);
    b == null ? hb("TAGGING", 18) : pk(this, a, b === "granted", c, d, e, f, g);
  };
  ok.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      pk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var pk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = t;
      r &&
        E.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (hb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  ba = ok.prototype;
  ba.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = na(d), n = m.next(); !n.done; n = m.next())
        qk(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = na(d), q = p.next(); !q.done; q = p.next())
        qk(this, q.value);
  };
  ba.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  ba.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  ba.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  ba.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (mb(8) && b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (mb(8) && b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  ba.addListener = function (a, b) {
    this.j.push({ consentTypes: a, yl: b });
  };
  var qk = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Qj = !0);
    }
  };
  ok.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Qj) {
        d.Qj = !1;
        try {
          d.yl({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var rk = !1,
    sk = !1,
    tk = {},
    uk = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((tk.ad_storage = 1),
        (tk.analytics_storage = 1),
        (tk.ad_user_data = 1),
        (tk.ad_personalization = 1),
        tk),
      usedContainerScopedDefaults: !1,
    };
  function vk(a) {
    var b = nk();
    b.accessedAny = !0;
    return (l(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, uk)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function wk(a) {
    var b = nk();
    b.accessedAny = !0;
    return b.getConsentState(a, uk);
  }
  function xk(a) {
    for (var b = {}, c = na(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = uk.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function yk(a) {
    var b = nk();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function zk() {
    if (!mb(12)) return !1;
    var a = nk();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!mb(8) || !uk.usedContainerScopedDefaults) return !1;
    for (
      var b = na(Object.keys(uk.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (uk.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function Ak(a, b) {
    nk().addListener(a, b);
  }
  function Bk(a, b) {
    nk().notifyListeners(a, b);
  }
  function Ck(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!yk(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      Ak(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function Dk(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        vk(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = l(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      Ak(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : E.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var Ek = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    Fk = !1,
    Gk = !1;
  function Hk() {
    T(49) &&
      !Gk &&
      Fk &&
      (Ek.some(function (a) {
        return uk.containerScopedDefaults[a] !== 1;
      }) ||
        Ik("mbc"));
    Gk = !0;
  }
  function Ik(a) {
    qj && (ek(a, "1"), ik());
  }
  function Jk(a) {
    hb("HEALTH", a);
  }
  var Kk;
  try {
    Kk = JSON.parse(
      fb(
        "eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    O(123), Jk(2), (Kk = {});
  }
  function Lk() {
    return Kk["0"] || "";
  }
  function Mk() {
    return Kk["1"] || "";
  }
  function Nk() {
    var a = !1;
    return a;
  }
  function Ok() {
    return Kk["6"] !== !1;
  }
  function Pk() {
    var a = "";
    return a;
  }
  function Qk() {
    var a = !1;
    return a;
  }
  function Rk() {
    var a = "";
    return a;
  }
  var Sk = [P.g.P, P.g.U, P.g.O, P.g.wa],
    Tk,
    Uk;
  function Vk(a) {
    for (
      var b = a[P.g.Db], c = Array.isArray(b) ? b : [b], d = { He: 0 };
      d.He < c.length;
      d = { He: d.He }, ++d.He
    )
      z(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== P.g.Db) {
              var k = c[e.He],
                m = Lk(),
                n = Mk();
              sk = !0;
              rk && hb("TAGGING", 20);
              nk().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function Wk(a) {
    Hk();
    !Uk && Tk && Ik("crc");
    Uk = !0;
    var b = a[P.g.Db];
    b && O(40);
    var c = a[P.g.Ze];
    c && O(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { Ie: 0 };
      e.Ie < d.length;
      e = { Ie: e.Ie }, ++e.Ie
    )
      z(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== P.g.Db && g !== P.g.Ze) {
              var m = d[f.Ie],
                n = Number(c),
                p = Lk(),
                q = Mk();
              n = n === void 0 ? 0 : n;
              rk = !0;
              sk && hb("TAGGING", 20);
              nk().default(g, k, m, p, q, n, uk);
            }
          };
        })(e)
      );
  }
  function Xk(a) {
    if (T(94)) {
      mb(9) && (uk.usedContainerScopedDefaults = !0);
      var b = a[P.g.Db];
      if (b) {
        var c = Array.isArray(b) ? b : [b];
        if (!c.includes(Mk()) && !c.includes(Lk())) return;
      }
      z(a, function (d, e) {
        switch (d) {
          case "ad_storage":
          case "analytics_storage":
          case "ad_user_data":
          case "ad_personalization":
            break;
          default:
            return;
        }
        mb(9) && (uk.usedContainerScopedDefaults = !0);
        uk.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
      });
    }
  }
  function Yk(a, b) {
    Hk();
    Tk = !0;
    z(a, function (c, d) {
      rk = !0;
      sk && hb("TAGGING", 20);
      nk().update(c, d, uk);
    });
    Bk(b.eventId, b.priorityId);
  }
  function Zk(a) {
    a.hasOwnProperty("all") &&
      ((uk.selectedAllCorePlatformServices = !0),
      z(di, function (b) {
        uk.corePlatformServices[b] = a.all === "granted";
        uk.usedCorePlatformServices = !0;
      }));
    z(a, function (b, c) {
      b !== "all" &&
        ((uk.corePlatformServices[b] = c === "granted"),
        (uk.usedCorePlatformServices = !0));
    });
  }
  function W(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return vk(b);
    });
  }
  function $k(a, b) {
    Ak(a, b);
  }
  function al(a, b) {
    Dk(a, b);
  }
  function bl(a, b) {
    Ck(a, b);
  }
  function cl() {
    var a = [P.g.P, P.g.wa, P.g.O];
    nk().waitForUpdate(a, 500, uk);
  }
  function dl(a) {
    for (var b = na(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      nk().clearTimeout(d, void 0, uk);
    }
    Bk();
  }
  function el() {
    if (ii.pscdl === void 0) {
      var a = function (c) {
          ii.pscdl = c;
        },
        b = function () {
          a("error");
        };
      try {
        oc.cookieDeprecationLabel
          ? (a("pending"),
            oc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function fl(a, b) {
    T(13) &&
      b &&
      z(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var gl = /[A-Z]+/,
    hl = /\s/;
  function il(a, b) {
    if (l(a)) {
      a = zb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (gl.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (hl.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function jl(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = il(a[d], b);
      e && (c[e.id] = e);
    }
    kl(c);
    var f = [];
    z(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function kl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[ll[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ml = {},
    ll =
      ((ml[0] = 0),
      (ml[1] = 0),
      (ml[2] = 1),
      (ml[3] = 0),
      (ml[4] = 1),
      (ml[5] = 2),
      (ml[6] = 0),
      (ml[7] = 0),
      (ml[8] = 0),
      ml);
  var nl = Number("") || 500,
    ol = {},
    pl = {},
    ql = { initialized: 11, complete: 12, interactive: 13 },
    rl = {},
    sl = Object.freeze(((rl[P.g.Ha] = !0), rl)),
    tl =
      F.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      F.location.search.indexOf("&gtm_diagnostics=") >= 0,
    ul = void 0;
  function vl(a, b) {
    if (b.length && qj) {
      var c;
      (c = ol)[a] != null || (c[a] = []);
      pl[a] != null || (pl[a] = []);
      var d = b.filter(function (e) {
        return !pl[a].includes(e);
      });
      ol[a].push.apply(ol[a], pa(d));
      pl[a].push.apply(pl[a], pa(d));
      !ul &&
        d.length > 0 &&
        (fk("tdc", !0),
        (ul = E.setTimeout(function () {
          ik();
          ol = {};
          ul = void 0;
        }, nl)));
    }
  }
  function wl(a, b, c) {
    if (qj && a === "config") {
      var d,
        e = (d = il(b)) == null ? void 0 : d.ids;
      if (!(e && e.length > 1)) {
        var f,
          g = sc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = h(c.M);
        h(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = xl(f[n], k);
            p.length && (tl && console.log(p), m.push(n));
          }
        m.length && (vl(b, m), hb("TAGGING", ql[F.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function yl(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function xl(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, t) {
        var u;
        Qa(t) === "object" ? (u = t[r]) : Qa(t) === "array" && (u = t[r]);
        return u === void 0 ? sl[r] : u;
      },
      f = yl(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Qa(m) === "object" || Qa(m) === "array",
          q = Qa(n) === "object" || Qa(n) === "array";
        if (p && q) xl(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function zl() {
    ek(
      "tdc",
      function () {
        ul && (E.clearTimeout(ul), (ul = void 0));
        var a = [],
          b;
        for (b in ol) ol.hasOwnProperty(b) && a.push(b + "*" + ol[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var Al = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.R = d;
      this.H = e;
      this.M = f;
      this.D = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Bl = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.R);
          c.push(a.H);
          c.push(a.M);
          c.push(a.D);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.R);
          c.push(a.H);
          c.push(a.M);
          c.push(a.D);
          break;
        case 4:
          c.push(a.j), c.push(a.R), c.push(a.H), c.push(a.M);
      }
      return c;
    },
    U = function (a, b, c, d) {
      for (
        var e = na(Bl(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    Cl = function (a) {
      for (
        var b = {}, c = Bl(a, 4), d = na(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = na(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    Dl = function (a, b, c) {
      function d(n) {
        Ta(n) &&
          z(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Bl(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = na(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    El = function (a) {
      for (
        var b = [P.g.Qc, P.g.Mc, P.g.Nc, P.g.Oc, P.g.Pc, P.g.Rc, P.g.Sc],
          c = Bl(a, 3),
          d = na(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = na(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Fl = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.D = {};
      this.R = {};
      this.j = {};
      this.H = {};
      this.Z = {};
      this.M = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    Gl = function (a, b) {
      a.D = b;
      return a;
    },
    Hl = function (a, b) {
      a.R = b;
      return a;
    },
    Il = function (a, b) {
      a.j = b;
      return a;
    },
    Jl = function (a, b) {
      a.H = b;
      return a;
    },
    Kl = function (a, b) {
      a.Z = b;
      return a;
    },
    Ll = function (a, b) {
      a.M = b;
      return a;
    },
    Ml = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Nl = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Ol = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Pl = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Ql = function (a) {
      return new Al(
        a.eventId,
        a.priorityId,
        a.D,
        a.R,
        a.j,
        a.H,
        a.M,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var Rl = { hk: Number("5"), Mn: Number("") },
    Sl = [];
  function Tl(a) {
    Sl.push(a);
  }
  var Ul = "?id=" + Of.ctid,
    Vl = void 0,
    Wl = {},
    Xl = void 0,
    Yl = new (function () {
      var a = 5;
      Rl.hk > 0 && (a = Rl.hk);
      this.D = a;
      this.j = 0;
      this.H = [];
    })(),
    Zl = 1e3;
  function $l(a, b) {
    var c = Vl;
    if (c === void 0)
      if (b) c = zi();
      else return "";
    for (
      var d = [ij("https://www.googletagmanager.com"), "/a", Ul],
        e = na(Sl),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value,
          k = g({ eventId: c, ic: !!a }),
          m = na(k),
          n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = na(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function am() {
    Xl && (E.clearTimeout(Xl), (Xl = void 0));
    if (Vl !== void 0 && bm) {
      var a;
      (a = Wl[Vl]) || (a = Yl.j < Yl.D ? !1 : Bb() - Yl.H[Yl.j % Yl.D] < 1e3);
      if (a || Zl-- <= 0) O(1), (Wl[Vl] = !0);
      else {
        var b = Yl.j++ % Yl.D;
        Yl.H[b] = Bb();
        var c = $l(!0);
        Ac(c);
        bm = !1;
      }
    }
  }
  var bm = !1;
  function cm(a) {
    Wl[a] ||
      (a !== Vl && (am(), (Vl = a)),
      (bm = !0),
      Xl || (Xl = E.setTimeout(am, 500)),
      $l().length >= 2022 && am());
  }
  var dm = sb();
  function em() {
    dm = sb();
  }
  function fm() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(dm)],
    ];
  }
  var gm = {};
  function hm(a, b, c) {
    pj && a !== void 0 && ((gm[a] = gm[a] || []), gm[a].push(c + b), cm(a));
  }
  function im(a) {
    var b = a.eventId,
      c = a.ic,
      d = [],
      e = gm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete gm[b];
    return d;
  }
  function jm(a, b) {
    var c = il(Gj(a), !0);
    c && km.register(c, b);
  }
  function lm(a, b, c, d) {
    var e = il(c, d.isGtmEvent);
    e &&
      (T(48) && T(48) && ni && (d.deferrable = !0),
      km.push("event", [b, a], e, d));
  }
  function mm(a, b, c, d) {
    var e = il(c, d.isGtmEvent);
    e && km.push("get", [a, b], e, d);
  }
  function nm(a) {
    var b = il(Gj(a), !0),
      c;
    b ? (c = om(km, b).j) : (c = {});
    return c;
  }
  function pm(a, b) {
    var c = il(Gj(a), !0);
    if (c) {
      var d = km,
        e = h(b, null);
      h(om(d, c).j, e);
      om(d, c).j = e;
    }
  }
  var qm = function () {
      this.R = {};
      this.j = {};
      this.D = {};
      this.Z = null;
      this.M = {};
      this.H = !1;
      this.status = 1;
    },
    rm = function (a, b, c, d) {
      this.D = Bb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    sm = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    om = function (a, b) {
      var c = b.destinationId;
      return (a.destinations[c] = a.destinations[c] || new qm());
    },
    tm = function (a, b, c, d) {
      if (d.j) {
        var e = om(a, d.j),
          f = e.Z;
        if (f) {
          var g = h(c, null),
            k = h(e.R[d.j.id], null),
            m = h(e.M, null),
            n = h(e.j, null),
            p = h(a.j, null),
            q = {};
          if (pj)
            try {
              q = h(Gi);
            } catch (v) {
              O(72);
            }
          var r = d.j.prefix,
            t = function (v) {
              hm(d.messageContext.eventId, r, v);
            },
            u = Ql(
              Pl(
                Ol(
                  Nl(
                    Ml(
                      Kl(
                        Jl(
                          Ll(
                            Il(
                              Hl(
                                Gl(
                                  new Fl(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            hm(d.messageContext.eventId, r, "1"),
              wl(d.type, d.j.id, u),
              f(d.j.id, b, d.D, u);
          } catch (v) {
            hm(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  sm.prototype.register = function (a, b, c) {
    var d = om(this, a);
    d.status !== 3 &&
      ((d.Z = b), (d.status = 3), c && (h(d.j, c), (d.j = c)), this.flush());
  };
  sm.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (om(this, c).status === 1 &&
        ((om(this, c).status = 2), this.push("require", [{}], c, {})),
      om(this, c).H && (d.deferrable = !1));
    this.commands.push(new rm(a, c, b, d));
    d.deferrable || this.flush();
  };
  sm.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { Cc: void 0, jh: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || om(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (om(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            z(f.args[0], function (r, t) {
              h(Jb(r, t), b.j);
            });
            break;
          case "config":
            var k = om(this, g);
            e.Cc = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  h(Jb(t, u), r.Cc);
                };
              })(e)
            );
            var m = !!e.Cc[P.g.Zb];
            delete e.Cc[P.g.Zb];
            var n = g.destinationId === g.id;
            m || (n ? (k.M = {}) : (k.R[g.id] = {}));
            (k.H && m) || tm(this, P.g.ba, e.Cc, f);
            k.H = !0;
            n ? h(e.Cc, k.M) : (h(e.Cc, k.R[g.id]), O(70));
            d = !0;
            break;
          case "event":
            e.jh = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  h(Jb(t, u), r.jh);
                };
              })(e)
            );
            tm(this, f.args[1], e.jh, f);
            break;
          case "get":
            var p = {},
              q = ((p[P.g.rb] = f.args[0]), (p[P.g.Hb] = f.args[1]), p);
            tm(this, P.g.Sa, q, f);
        }
        this.commands.shift();
        um(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var um = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = om(a, b.j).D[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.D)
                for (var g = f.D[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    km = new sm();
  var vm = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    wm = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var xm = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    ym = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var zm, Am;
  a: {
    for (var Bm = ["CLOSURE_FLAGS"], Cm = Aa, Dm = 0; Dm < Bm.length; Dm++)
      if (((Cm = Cm[Bm[Dm]]), Cm == null)) {
        Am = null;
        break a;
      }
    Am = Cm;
  }
  var Em = Am && Am[610401301];
  zm = Em != null ? Em : !1;
  function Fm() {
    var a = Aa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Gm,
    Hm = Aa.navigator;
  Gm = Hm ? Hm.userAgentData || null : null;
  function Im(a) {
    return zm
      ? Gm
        ? Gm.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function Jm(a) {
    return Fm().indexOf(a) != -1;
  }
  function Km() {
    return zm ? !!Gm && Gm.brands.length > 0 : !1;
  }
  function Lm() {
    return Km() ? !1 : Jm("Opera");
  }
  function Mm() {
    return Jm("Firefox") || Jm("FxiOS");
  }
  function Nm() {
    return Km()
      ? Im("Chromium")
      : ((Jm("Chrome") || Jm("CriOS")) && !(Km() ? 0 : Jm("Edge"))) ||
          Jm("Silk");
  }
  function Om() {
    return zm ? !!Gm && !!Gm.platform : !1;
  }
  function Pm() {
    return Jm("iPhone") && !Jm("iPod") && !Jm("iPad");
  }
  function Qm() {
    Pm() || Jm("iPad") || Jm("iPod");
  }
  var Rm = function (a) {
    Rm[" "](a);
    return a;
  };
  Rm[" "] = function () {};
  Lm();
  Km() || Jm("Trident") || Jm("MSIE");
  Jm("Edge");
  !Jm("Gecko") ||
    (Fm().toLowerCase().indexOf("webkit") != -1 && !Jm("Edge")) ||
    Jm("Trident") ||
    Jm("MSIE") ||
    Jm("Edge");
  Fm().toLowerCase().indexOf("webkit") != -1 && !Jm("Edge") && Jm("Mobile");
  Om() || Jm("Macintosh");
  Om() || Jm("Windows");
  (Om() ? Gm.platform === "Linux" : Jm("Linux")) || Om() || Jm("CrOS");
  Om() || Jm("Android");
  Pm();
  Jm("iPad");
  Jm("iPod");
  Qm();
  Fm().toLowerCase().indexOf("kaios");
  var Sm = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Tm = /#|$/,
    Um = function (a, b) {
      var c = a.search(Tm),
        d = Sm(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Vm = /[?&]($|#)/,
    Wm = function (a, b, c) {
      for (
        var d, e = a.search(Tm), f = 0, g, k = [];
        (g = Sm(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Vm, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var t = d.indexOf("?"),
          u;
        t < 0 || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Xm = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Rm(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Ym = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Zm = function (a) {
      if (E.top == E) return 0;
      if (a === void 0 ? 0 : a) {
        var b = E.location.ancestorOrigins;
        if (b) return b[b.length - 1] == E.location.origin ? 1 : 2;
      }
      return Xm(E.top) ? 1 : 2;
    },
    $m = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    };
  function an(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = $m(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = mc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        ym(e, "load", f);
        ym(e, "error", f);
      };
      xm(e, "load", f);
      xm(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var cn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Ym(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      bn(c, b);
    },
    bn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else an(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var dn = function () {
    this.R = this.R;
    this.D = this.D;
  };
  dn.prototype.R = !1;
  dn.prototype.dispose = function () {
    this.R || ((this.R = !0), this.Pa());
  };
  dn.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  dn.prototype.addOnDisposeCallback = function (a, b) {
    this.R
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.D || (this.D = []), b && (a = a.bind(b)), this.D.push(a));
  };
  dn.prototype.Pa = function () {
    if (this.D) for (; this.D.length; ) this.D.shift()();
  };
  var en = function (a) {
      a.addtlConsent !== void 0 &&
        typeof a.addtlConsent !== "string" &&
        (a.addtlConsent = void 0);
      a.gdprApplies !== void 0 &&
        typeof a.gdprApplies !== "boolean" &&
        (a.gdprApplies = void 0);
      return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
        (a.listenerId !== void 0 && typeof a.listenerId !== "number")
        ? 2
        : a.cmpStatus && a.cmpStatus !== "error"
        ? 0
        : 3;
    },
    fn = function (a, b) {
      b = b === void 0 ? {} : b;
      dn.call(this);
      this.H = a;
      this.j = null;
      this.Z = {};
      this.Ef = 0;
      var c;
      this.ie = (c = b.Um) != null ? c : 500;
      var d;
      this.vb = (d = b.An) != null ? d : !1;
      this.M = null;
    };
  ya(fn, dn);
  fn.prototype.Pa = function () {
    this.Z = {};
    this.M && (ym(this.H, "message", this.M), delete this.M);
    delete this.Z;
    delete this.H;
    delete this.j;
    dn.prototype.Pa.call(this);
  };
  var hn = function (a) {
    return typeof a.H.__tcfapi === "function" || gn(a) != null;
  };
  fn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.vb },
      d = wm(function () {
        return a(c);
      }),
      e = 0;
    this.ie !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.ie));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = en(c)),
          (c.internalBlockOnErrors = b.vb),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      jn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  fn.prototype.removeEventListener = function (a) {
    a && a.listenerId && jn(this, "removeEventListener", null, a.listenerId);
  };
  var ln = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = kn(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && kn(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? kn(a.purpose.legitimateInterests, b) &&
                kn(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    kn = function (a, b) {
      return !(!a || !a[b]);
    },
    jn = function (a, b, c, d) {
      c || (c = function () {});
      if (typeof a.H.__tcfapi === "function") {
        var e = a.H.__tcfapi;
        e(b, 2, c, d);
      } else if (gn(a)) {
        mn(a);
        var f = ++a.Ef;
        a.Z[f] = c;
        if (a.j) {
          var g = {};
          a.j.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    gn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    mn = function (a) {
      a.M ||
        ((a.M = function (b) {
          try {
            var c;
            c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.Z[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        xm(a.H, "message", a.M));
    },
    nn = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = en(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (cn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var on = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function pn() {
    var a = ii.tcf || {};
    return (ii.tcf = a);
  }
  var qn = function () {
    return new fn(E, { Um: -1 });
  };
  function rn() {
    var a = pn(),
      b = qn();
    hn(b) && !sn() && !tn() && O(124);
    if (!a.active && hn(b)) {
      sn() &&
        ((a.active = !0),
        (a.hc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (nk().active = !0),
        (a.tcString = "tcunavailable"));
      cl();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            un(a), dl([P.g.P, P.g.wa, P.g.O]), (nk().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            tn() && (a.active = !0),
            !vn(c) || sn() || tn())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in on) on.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (vn(c)) {
              var g = {},
                k;
              for (k in on)
                if (on.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { Cl: !0 };
                    p = p === void 0 ? {} : p;
                    m = nn(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.Ij
                        : (p.Ij || n.gdprApplies !== void 0 || p.Cl) &&
                          (p.Ij ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? ln(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = ln(c, k, on[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.hc = d;
              var q = {},
                r = ((q[P.g.P] = a.hc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (dl([P.g.P, P.g.wa, P.g.O]), (nk().active = !0))
                : ((r[P.g.wa] = a.hc["3"] && a.hc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[P.g.O] = a.hc["1"] && a.hc["7"] ? "granted" : "denied")
                    : dl([P.g.O]),
                  Yk(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: wn() || "",
                    }
                  ));
            }
          } else dl([P.g.P, P.g.wa, P.g.O]);
        });
      } catch (c) {
        un(a), dl([P.g.P, P.g.wa, P.g.O]), (nk().active = !0);
      }
    }
  }
  function un(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function vn(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function sn() {
    return E.gtag_enable_tcf_support === !0;
  }
  function tn() {
    return pn().enableAdvertiserConsentMode === !0;
  }
  function wn() {
    var a = pn();
    if (a.active) return a.tcString;
  }
  function xn() {
    var a = pn();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function yn(a) {
    if (!on.hasOwnProperty(String(a))) return !0;
    var b = pn();
    return b.active && b.hc ? !!b.hc[String(a)] : !0;
  }
  var zn = [P.g.P, P.g.U, P.g.O, P.g.wa],
    An = {},
    Bn = ((An[P.g.P] = 1), (An[P.g.U] = 2), An);
  function Cn(a) {
    if (a === void 0) return 0;
    switch (U(a, P.g.ja)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function Dn(a) {
    if (Mk() === "US-CO" && oc.globalPrivacyControl === !0) return !1;
    var b = Cn(a);
    if (b === 3) return !1;
    switch (wk(P.g.wa)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function En() {
    return zk() || !vk(P.g.P) || !vk(P.g.U);
  }
  function Fn() {
    var a = {},
      b;
    for (b in Bn) Bn.hasOwnProperty(b) && (a[Bn[b]] = wk(b));
    return "G1" + Fe(a[1] || 0) + Fe(a[2] || 0);
  }
  var Gn = {},
    Hn =
      ((Gn[P.g.P] = 0), (Gn[P.g.U] = 1), (Gn[P.g.O] = 2), (Gn[P.g.wa] = 3), Gn);
  function In(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Jn(a) {
    for (var b = "1", c = 0; c < zn.length; c++) {
      var d = b,
        e,
        f = zn[c],
        g = uk.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Hn.hasOwnProperty(g) ? 12 | Hn[g] : 8;
      var k = nk();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | In(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (In(m.declare) << 4) | (In(m.default) << 2) | In(m.update)
          ]);
    }
    var n = b,
      p = (Mk() === "US-CO" && oc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (zk() ? 1 : 0) << 2,
      r = Cn(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    T(94) &&
      (b +=
        "" +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          (uk.containerScopedDefaults.ad_storage << 4) |
            (uk.containerScopedDefaults.analytics_storage << 2) |
            uk.containerScopedDefaults.ad_user_data
        ] +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          ((mb(8) && uk.usedContainerScopedDefaults ? 1 : 0) << 2) |
            uk.containerScopedDefaults.ad_personalization
        ]);
    return b;
  }
  function Kn() {
    if (!vk(P.g.O)) return "-";
    for (
      var a = Object.keys(di), b = xk(a), c = "", d = na(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += di[f]);
    }
    (uk.usedCorePlatformServices ? uk.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Rn() {
    return Ok() || ((sn() || tn()) && xn() === "1") ? "1" : "0";
  }
  function Sn() {
    return (Ok() ? !0 : !(!sn() && !tn()) && xn() === "1") || !vk(P.g.O);
  }
  function Tn() {
    var a = "0",
      b = "0",
      c;
    var d = pn();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = pn();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    Ok() && (k |= 1);
    xn() === "1" && (k |= 2);
    sn() && (k |= 4);
    var m;
    var n = pn();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    nk().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Un() {
    return Mk() === "US-CO";
  }
  function Vn() {
    var a = !1;
    return a;
  }
  var Wn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function Xn(a) {
    a = a === void 0 ? {} : a;
    var b = Of.ctid.split("-")[0].toUpperCase(),
      c = {};
    c.ctid = Of.ctid;
    c.Em = hi.oe;
    c.Im = hi.Rg;
    c.dm = yj.ke ? 2 : 1;
    c.Om = a.Xj;
    c.we = Of.canonicalContainerId;
    c.we !== a.sa && (c.sa = a.sa);
    var d = Ij();
    c.sm = d ? d.canonicalContainerId : void 0;
    oi ? ((c.Rf = Wn[b]), c.Rf || (c.Rf = 0)) : (c.Rf = si ? 13 : 10);
    Bi.H
      ? ((c.Pf = 0), (c.al = 2))
      : qi
      ? (c.Pf = 1)
      : Vn()
      ? (c.Pf = 2)
      : (c.Pf = 3);
    var e = {};
    e[6] = zj;
    Bi.D === 2 ? (e[7] = !0) : Bi.D === 1 && (e[2] = !0);
    c.il = e;
    var f = a.Hf,
      g;
    var k = c.Rf,
      m = c.Pf;
    k === void 0
      ? (g = "")
      : (m || (m = 0), (g = "" + He(1, 1) + Ee((k << 2) | m)));
    var n = c.al,
      p = "4" + g + (n ? "" + He(2, 1) + Ee(n) : ""),
      q,
      r = c.Im;
    q = r && Ge.test(r) ? "" + He(3, 2) + r : "";
    var t,
      u = c.Em;
    t = u ? "" + He(4, 1) + Ee(u) : "";
    var v;
    var w = c.ctid;
    if (w && f) {
      var x = w.split("-"),
        y = x[0].toUpperCase();
      if (y !== "GTM" && y !== "OPT") v = "";
      else {
        var A = x[1];
        v = "" + He(5, 3) + Ee(1 + A.length) + (c.dm || 0) + A;
      }
    } else v = "";
    var B = c.Om,
      C = c.we,
      H = c.sa,
      D = c.Kn,
      K =
        p +
        q +
        t +
        v +
        (B ? "" + He(6, 1) + Ee(B) : "") +
        (C ? "" + He(7, 3) + Ee(C.length) + C : "") +
        (H ? "" + He(8, 3) + Ee(H.length) + H : "") +
        (D ? "" + He(9, 3) + Ee(D.length) + D : ""),
      N;
    var L = c.il;
    L = L === void 0 ? {} : L;
    for (
      var S = [], V = na(Object.keys(L)), Z = V.next();
      !Z.done;
      Z = V.next()
    ) {
      var aa = Z.value;
      S[Number(aa)] = L[aa];
    }
    if (S.length) {
      var R = He(10, 3),
        ma;
      if (S.length === 0) ma = Ee(0);
      else {
        for (var la = [], ha = 0, xa = !1, Oa = 0; Oa < S.length; Oa++) {
          xa = !0;
          var Ea = Oa % 6;
          S[Oa] && (ha |= 1 << Ea);
          Ea === 5 && (la.push(Ee(ha)), (ha = 0), (xa = !1));
        }
        xa && la.push(Ee(ha));
        ma = la.join("");
      }
      var Sa = ma;
      N = "" + R + Ee(Sa.length) + Sa;
    } else N = "";
    var $a = c.sm;
    return K + N + ($a ? "" + He(11, 3) + Ee($a.length) + $a : "");
  }
  var Yn = {
      sj: "service_worker_endpoint",
      Tg: "shared_user_id",
      Ug: "shared_user_id_requested",
      qe: "shared_user_id_source",
    },
    Zn;
  function $n(a) {
    if (!Zn) {
      Zn = {};
      for (var b = na(Object.keys(Yn)), c = b.next(); !c.done; c = b.next())
        Zn[Yn[c.value]] = !0;
    }
    return !!Zn[a];
  }
  function ao(a, b) {
    b = b === void 0 ? !1 : b;
    if ($n(a)) {
      var c,
        d,
        e =
          (d = (c = sc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = na(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function bo(a, b) {
    var c = ao(a, !0);
    c && c.set(b);
  }
  function co(a) {
    var b;
    return (b = ao(a)) == null ? void 0 : b.get();
  }
  function eo(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = ao(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function fo(a, b) {
    var c = ao(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function go(a) {
    return a.origin !== "null";
  }
  function ho(a, b, c, d) {
    var e;
    if (io(d)) {
      for (
        var f = [], g = String(b || jo()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function ko(a, b, c, d, e) {
    if (io(e)) {
      var f = lo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = mo(
          f,
          function (g) {
            return g.rl;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = mo(
          f,
          function (g) {
            return g.wm;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function no(a, b, c, d) {
    var e = jo(),
      f = window;
    go(f) && (f.document.cookie = a);
    var g = jo();
    return e !== g || (c !== void 0 && ho(b, g, !1, d).indexOf(c) >= 0);
  }
  function oo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!io(c.Bb)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = po(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.im);
    g = e(g, "samesite", c.Jm);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = qo(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var u = p[t] !== "none" ? p[t] : void 0,
          v = e(g, "domain", u);
        v = f(v, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!ro(u, c.path) && no(v, a, b, c.Bb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return ro(n, c.path) ? 1 : no(g, a, b, c.Bb) ? 0 : 1;
  }
  function so(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return oo(a, b, c);
  }
  function mo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function lo(a, b, c) {
    for (var d = [], e = ho(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            rl: Number(n[0]) || 1,
            wm: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function po(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var to = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    uo = /(^|\.)doubleclick\.net$/i;
  function ro(a, b) {
    return (
      a !== void 0 &&
      (uo.test(window.document.location.hostname) || (b === "/" && to.test(a)))
    );
  }
  function vo(a) {
    if (!a) return 1;
    var b = a;
    mb(11) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function wo(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function xo(a, b) {
    var c = "" + vo(a),
      d = wo(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var jo = function () {
      return go(window) ? window.document.cookie : "";
    },
    io = function (a) {
      return a && mb(12)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return yk(b) && vk(b);
          })
        : !0;
    },
    qo = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      uo.test(e) || to.test(e) || a.push("none");
      return a;
    };
  function yo(a) {
    var b = Math.round(Math.random() * 2147483647),
      c;
    if (a) {
      var d = 1,
        e,
        f,
        g;
      if (a)
        for (d = 0, f = a.length - 1; f >= 0; f--)
          (g = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + g + (g << 14)),
            (e = d & 266338304),
            (d = e !== 0 ? d ^ (e >> 21) : d);
      c = String(b ^ (d & 2147483647));
    } else c = String(b);
    return c;
  }
  function zo(a) {
    return [yo(a), Math.round(Bb() / 1e3)].join(".");
  }
  function Ao(a, b, c, d, e) {
    var f = vo(b);
    return ko(a, f, wo(c), d, e);
  }
  function Bo(a, b, c, d) {
    return [b, xo(c, d), a].join(".");
  }
  function Co(a, b, c, d) {
    var e,
      f = Number(a.Ab != null ? a.Ab : void 0);
    f !== 0 && (e = new Date((b || Bb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Bb: d,
    };
  }
  var Do;
  function Eo() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = Fo,
      d = Go,
      e = Ho();
    if (!e.init) {
      Cc(F, "mousedown", a);
      Cc(F, "keyup", a);
      Cc(F, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function Io(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    Ho().decorators.push(f);
  }
  function Jo(a, b, c) {
    for (var d = Ho().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== F.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && Eb(e, g.callback());
      }
    }
    return e;
  }
  function Ho() {
    var a = sc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Ko = /(.*?)\*(.*?)\*(.*)/,
    Lo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Mo = /^(?:www\.|m\.|amp\.)+/,
    No = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Oo(a) {
    var b = No.exec(a);
    if (b) return { Eh: b[1], query: b[2], fragment: b[3] };
  }
  function Po(a, b) {
    var c = [
        oc.userAgent,
        new Date().getTimezoneOffset(),
        oc.userLanguage || oc.language,
        Math.floor(Bb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Do)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Do = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Do[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Qo() {
    return function (a) {
      var b = aj(E.location.href),
        c = b.search.replace("?", ""),
        d = Ui(c, "_gl", !1, !0) || "";
      a.query = Ro(d) || {};
      var e = Vi(b, "fragment"),
        f;
      var g = -1;
      if (Gb(e, "_gl=")) g = 4;
      else {
        var k = e.indexOf("&_gl=");
        k > 0 && (g = k + 3 + 2);
      }
      if (g < 0) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = m < 0 ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Ro(f || "") || {};
    };
  }
  function So(a) {
    var b = Qo(),
      c = Ho();
    c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
    var d = {},
      e = c.data;
    e && (Eb(d, e.query), a && Eb(d, e.fragment));
    return d;
  }
  var Ro = function (a) {
    try {
      var b = To(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = fb(d[e + 1]);
          c[f] = g;
        }
        hb("TAGGING", 6);
        return c;
      }
    } catch (k) {
      hb("TAGGING", 8);
    }
  };
  function To(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = Ko.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Po(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        hb("TAGGING", 7);
      }
    }
  }
  function Uo(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && w !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = Oo(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.Eh + k + m;
  }
  function Vo(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (v.push(w), v.push(eb(String(x))));
          }
        var y = v.join("*");
        u = ["1", Po(y), y].join("*");
        d
          ? (mb(4) || mb(1) || !p) && Wo("_gl", u, a, p, q)
          : Xo("_gl", u, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = Jo(b, 1, d),
      f = Jo(b, 2, d),
      g = Jo(b, 4, d),
      k = Jo(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    mb(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Yo(m, k[m], a);
  }
  function Yo(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Xo(a, b, c)
      : c.tagName.toLowerCase() === "form" && Wo(a, b, c);
  }
  function Xo(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !mb(5) || d)) {
        var k = E.location.href,
          m = Oo(c.href),
          n = Oo(k);
        g = !(m && n && m.Eh === n.Eh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Uo(a, b, c.href, d, e);
      fc.test(p) && (c.href = p);
    }
  }
  function Wo(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Uo(a, b, c.action, d, e);
          fc.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = F.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Fo(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Vo(e, e.hostname);
      }
    } catch (g) {}
  }
  function Go(a) {
    try {
      if (a.action) {
        var b = Vi(aj(a.action), "host");
        Vo(a, b);
      }
    } catch (c) {}
  }
  function Zo(a, b, c, d) {
    Eo();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    Io(a, b, e, d, !1);
    e === 2 && hb("TAGGING", 23);
    d && hb("TAGGING", 24);
  }
  function $o(a, b) {
    Eo();
    Io(a, [Xi(E.location, "host", !0)], b, !0, !0);
  }
  function ap() {
    var a = F.location.hostname,
      b = Lo.exec(F.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(Mo, ""),
      m = e.replace(Mo, "");
    return k === m || Hb(k, "." + m);
  }
  function bp(a, b) {
    return a === !1 ? !1 : a || b || ap();
  }
  var cp = ["1"],
    dp = {},
    ep = {};
  function fp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = gp(a.prefix);
    if (!dp[c])
      if (hp(c, a.path, a.domain)) {
        var d = ep[gp(a.prefix)];
        ip(a, d ? d.id : void 0, d ? d.zh : void 0);
      } else {
        var e = cj("auiddc");
        if (e) hb("TAGGING", 17), (dp[c] = e);
        else if (b) {
          var f = gp(a.prefix),
            g = zo();
          jp(f, g, a);
          hp(c, a.path, a.domain);
        }
      }
  }
  function ip(a, b, c) {
    var d = gp(a.prefix),
      e = dp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Bb() / 1e3)));
          jp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function jp(a, b, c, d) {
    var e = Bo(b, "1", c.domain, c.path),
      f = Co(c, d);
    f.Bb = kp();
    so(a, e, f);
  }
  function hp(a, b, c) {
    var d = Ao(a, b, c, cp, kp());
    if (!d) return !1;
    lp(a, d);
    return !0;
  }
  function lp(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((dp[a] = c.slice(0, 2).join(".")),
        (ep[a] = { id: c.slice(2, 4).join("."), zh: Number(c[4]) || 0 }))
      : c.length === 3
      ? (ep[a] = { id: c.slice(0, 2).join("."), zh: Number(c[2]) || 0 })
      : (dp[a] = b);
  }
  function gp(a) {
    return (a || "_gcl") + "_au";
  }
  function mp(a) {
    function b() {
      vk(c) && a();
    }
    var c = kp();
    Ck(function () {
      b();
      vk(c) || Dk(b, c);
    }, c);
  }
  function np(a) {
    var b = So(!0),
      c = gp(a.prefix);
    mp(function () {
      var d = b[c];
      if (d) {
        lp(c, d);
        var e = Number(dp[c].split(".")[1]) * 1e3;
        if (e) {
          hb("TAGGING", 16);
          var f = Co(a, e);
          f.Bb = kp();
          var g = Bo(d, "1", a.domain, a.path);
          so(c, g, f);
        }
      }
    });
  }
  function op(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Ao(a, e.path, e.domain, cp, kp());
      k && (g[a] = k);
      return g;
    };
    mp(function () {
      Zo(f, b, c, d);
    });
  }
  function kp() {
    return ["ad_storage", "ad_user_data"];
  }
  function pp(a) {
    for (
      var b = [],
        c = F.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Sh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function qp(a, b) {
    var c = pp(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].Sh] || (d[c[e].Sh] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, aa: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Sh].push(g);
      }
    }
    return d;
  }
  var rp = {},
    sp =
      ((rp.k = { Ka: /^[\w-]+$/ }),
      (rp.b = { Ka: /^[\w-]+$/, Lh: !0 }),
      (rp.i = { Ka: /^[1-9]\d*$/ }),
      rp);
  var tp = {},
    wp =
      ((tp[5] = { jk: { 2: up }, ah: ["k", "i", "b"] }),
      (tp[4] = { jk: { 2: up, GCL: vp }, ah: ["k", "i", "b"] }),
      tp);
  function xp(a) {
    var b = wp[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.jk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function up(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = wp[b];
      if (e) {
        for (
          var f = e.ah, g = na(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = sp[n];
              q && (q.Lh ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function yp(a, b) {
    var c = wp[5];
    if (c) {
      for (var d = [], e = na(c.ah), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = sp[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.Lh && Array.isArray(m))
              for (var n = na(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function vp(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var zp = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function Ap(a) {
    if (wp[5]) {
      for (
        var b = [],
          c = ho(a, void 0, void 0, zp.get(5)),
          d = na(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = xp(e.value);
        f && (Bp(f), b.push(f));
      }
      return b;
    }
  }
  function Cp(a, b, c, d) {
    c = c || {};
    var e = xo(c.domain, c.path),
      f = yp(b, e);
    if (f) {
      var g = Co(c, d, void 0, zp.get(5));
      so(a, f, g);
    }
  }
  function Dp(a, b) {
    var c = b.Ka;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function Bp(a) {
    for (
      var b = na(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { ye: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.ye = sp[e];
      d.ye
        ? d.ye.Lh
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return Dp(k, g.ye);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && Dp(f, d.ye)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  var Ep = /^\w+$/,
    Fp = /^[\w-]+$/,
    Gp = {},
    Hp =
      ((Gp.aw = "_aw"),
      (Gp.dc = "_dc"),
      (Gp.gf = "_gf"),
      (Gp.gp = "_gp"),
      (Gp.gs = "_gs"),
      (Gp.ha = "_ha"),
      (Gp.ag = "_ag"),
      (Gp.gb = "_gb"),
      Gp);
  function Ip() {
    return ["ad_storage", "ad_user_data"];
  }
  function Jp(a) {
    return !mb(12) || vk(a);
  }
  function Kp(a, b) {
    function c() {
      var d = Jp(b);
      d && a();
      return d;
    }
    Ck(function () {
      c() || Dk(c, b);
    }, b);
  }
  function Lp(a) {
    return Mp(a).map(function (b) {
      return b.aa;
    });
  }
  function Np(a) {
    return Op(a)
      .filter(function (b) {
        return b.aa;
      })
      .map(function (b) {
        return b.aa;
      });
  }
  function Op(a) {
    var b = Pp(a.prefix),
      c = Qp("gb", b),
      d = Qp("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Mp(c).map(e("gb")),
      g = (mb(7) ? Rp(d) : []).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Sp(a, b, c, d, e) {
    var f = rb(a, function (g) {
      return g.aa === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = Tp(f.labels || [], e || [])))
      : a.push({ version: b, aa: c, timestamp: d, labels: e });
  }
  function Rp(a) {
    for (
      var b = Ap(a) || [], c = [], d = na(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = Up(f);
      k && Sp(c, "2", g.k, k, g.b || []);
    }
    return c.sort(function (m, n) {
      return n.timestamp - m.timestamp;
    });
  }
  function Mp(a) {
    for (
      var b = [], c = ho(a, F.cookie, void 0, Ip()), d = na(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Vp(e.value);
      if (f != null) {
        var g = f;
        Sp(b, g.version, g.aa, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Wp(b);
  }
  function Tp(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Pp(a) {
    return a && typeof a === "string" && a.match(Ep) ? a : "_gcl";
  }
  function Xp(a, b) {
    var c = mb(7),
      d = aj(a),
      e = Vi(d, "query", !1, void 0, "gclid"),
      f = Vi(d, "query", !1, void 0, "gclsrc"),
      g = Vi(d, "query", !1, void 0, "wbraid");
    g = Nb(g);
    var k;
    c && (k = Vi(d, "query", !1, void 0, "gbraid"));
    var m = Vi(d, "query", !1, void 0, "gad_source"),
      n = Vi(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !g || (c && !k))) {
      var p = d.hash.replace("#", "");
      e = e || Ui(p, "gclid", !1);
      f = f || Ui(p, "gclsrc", !1);
      g = g || Ui(p, "wbraid", !1);
      c && (k = k || Ui(p, "gbraid", !1));
      m = m || Ui(p, "gad_source", !1);
    }
    return Yp(e, f, n, g, k, m);
  }
  function Zp() {
    return Xp(E.location.href, !0);
  }
  function Yp(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(Fp))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && Fp.test(d) && ((g.wbraid = d), k(d, "gb"));
    mb(7) && e !== void 0 && Fp.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && Fp.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function $p(a) {
    var b = Zp();
    if (mb(6)) {
      for (
        var c = !0, d = na(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && (b = Xp(E.document.referrer, !1));
    }
    aq(b, !1, a);
  }
  function aq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Pp(c.prefix),
      g = d || Bb(),
      k = Math.round(g / 1e3),
      m = Ip(),
      n = !1,
      p = !1,
      q = function () {
        if (Jp(m)) {
          var r = Co(c, g, !0);
          r.Bb = m;
          for (
            var t = function (K, N) {
                var L = Qp(K, f);
                L && (so(L, N, r), K !== "gb" && (n = !0));
              },
              u = function (K) {
                var N = ["GCL", k, K];
                e.length > 0 && N.push(e.join("."));
                return N.join(".");
              },
              v = na(["aw", "dc", "gf", "ha", "gp"]),
              w = v.next();
            !w.done;
            w = v.next()
          ) {
            var x = w.value;
            a[x] && t(x, u(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              A = Qp("gb", f);
            (!b &&
              Mp(A).some(function (K) {
                return K.aa === y && K.labels && K.labels.length > 0;
              })) ||
              t("gb", u(y));
          }
        }
        if (!p && mb(7) && a.gbraid && Jp("ad_storage") && ((p = !0), !n)) {
          var B = a.gbraid,
            C = Qp("ag", f);
          if (
            b ||
            !(mb(7) ? Rp(C) : []).some(function (K) {
              return K.aa === B && K.labels && K.labels.length > 0;
            })
          ) {
            var H = {},
              D = ((H.k = B), (H.i = "" + k), (H.b = e), H);
            Cp(C, D, c, g);
          }
        }
        bq(a, f, g, c);
      };
    Ck(function () {
      q();
      Jp(m) || Dk(q, m);
    }, m);
  }
  function bq(a, b, c, d) {
    if (a.gad_source !== void 0 && Jp("ad_storage")) {
      var e = Qp("gs", b);
      if (e) {
        var f = Math.round((Bb() - (Oc() || 0)) / 1e3),
          g = {},
          k = ((g.k = a.gad_source), (g.i = "" + f), g);
        Cp(e, k, d, c);
      }
    }
  }
  function cq(a, b) {
    var c = So(!0);
    Kp(function () {
      for (var d = Pp(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (Hp[f] !== void 0) {
          var g = Qp(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(dq(k), Bb()),
              n;
            b: {
              for (
                var p = m, q = ho(g, F.cookie, void 0, Ip()), r = 0;
                r < q.length;
                ++r
              )
                if (dq(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var t = Co(b, m, !0);
              t.Bb = Ip();
              so(g, k, t);
            }
          }
        }
      }
      aq(Yp(c.gclid, c.gclsrc), !1, b);
    }, Ip());
  }
  function eq(a) {
    var b = [];
    mb(7) && b.push("ag");
    if (b.length !== 0) {
      var c = So(!0),
        d = Pp(a.prefix);
      Kp(
        function () {
          for (var e = 0; e < b.length; ++e) {
            var f = Qp(b[e], d);
            if (f) {
              var g = c[f];
              if (g) {
                var k = xp(g);
                if (k) {
                  var m = Up(k);
                  m || (m = Bb());
                  var n;
                  a: {
                    for (var p = m, q = Ap(f), r = 0; r < q.length; ++r)
                      if (Up(q[r]) > p) {
                        n = !0;
                        break a;
                      }
                    n = !1;
                  }
                  if (n) break;
                  k.i = "" + Math.round(m / 1e3);
                  Cp(f, k, a, m);
                }
              }
            }
          }
        },
        ["ad_storage"]
      );
    }
  }
  function Qp(a, b) {
    var c = Hp[a];
    if (c !== void 0) return b + c;
  }
  function dq(a) {
    return fq(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Up(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Vp(a) {
    var b = fq(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function fq(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !Fp.test(a[2])
      ? []
      : a;
  }
  function gq(a, b, c, d, e) {
    if (Array.isArray(b) && go(E)) {
      var f = Pp(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Qp(a[m], f);
            if (n) {
              var p = ho(n, F.cookie, void 0, Ip());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Kp(function () {
        Zo(g, b, c, d);
      }, Ip());
    }
  }
  function hq(a, b, c, d) {
    if (Array.isArray(a) && go(E)) {
      var e = [];
      mb(7) && e.push("ag");
      if (e.length !== 0) {
        var f = Pp(d),
          g = function () {
            for (var k = {}, m = 0; m < e.length; ++m) {
              var n = Qp(e[m], f);
              if (!n) return {};
              var p = Ap(n);
              if (p.length) {
                var q = p.sort(function (r, t) {
                  return Up(t) - Up(r);
                })[0];
                k[n] = yp(q);
              }
            }
            return k;
          };
        Kp(
          function () {
            Zo(g, a, b, c);
          },
          ["ad_storage"]
        );
      }
    }
  }
  function Wp(a) {
    return a.filter(function (b) {
      return Fp.test(b.aa);
    });
  }
  function iq(a, b) {
    if (go(E)) {
      for (var c = Pp(b.prefix), d = {}, e = 0; e < a.length; e++)
        Hp[a[e]] && (d[a[e]] = Hp[a[e]]);
      Kp(function () {
        z(d, function (f, g) {
          var k = ho(c + g, F.cookie, void 0, Ip());
          k.sort(function (t, u) {
            return dq(u) - dq(t);
          });
          if (k.length) {
            var m = k[0],
              n = dq(m),
              p = fq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = fq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            aq(q, !0, b, n, p);
          }
        });
      }, Ip());
    }
  }
  function jq(a) {
    var b = [],
      c = [];
    mb(7) && (b.push("ag"), c.push("gbraid"));
    b.length !== 0 &&
      Kp(
        function () {
          for (var d = Pp(a.prefix), e = 0; e < b.length; ++e) {
            var f = Qp(b[e], d);
            if (!f) break;
            var g = Ap(f);
            if (g.length) {
              var k = g.sort(function (q, r) {
                  return Up(r) - Up(q);
                })[0],
                m = Up(k),
                n = k.b,
                p = {};
              p[c[e]] = k.k;
              aq(p, !0, a, m, n);
            }
          }
        },
        ["ad_storage"]
      );
  }
  function kq(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function lq(a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (zk()) {
      var c = Zp();
      if (kq(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.wbraid);
        mb(7) && b(d, "gbraid", c.gbraid);
        $o(function () {
          return d;
        }, 3);
        $o(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  }
  function mq(a) {
    if (!mb(1)) return null;
    var b = So(!0).gad_source;
    if (b != null) return (E.location.hash = ""), b;
    if (mb(2)) {
      var c = aj(E.location.href);
      b = Vi(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = Zp();
      if (kq(d, a)) return "0";
    }
    return null;
  }
  function nq(a) {
    var b = mq(a);
    b != null &&
      $o(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function oq(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function pq(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Jp(Ip())) return e;
    var f = Mp(a),
      g = oq(e, f, b);
    if (g.length && !d)
      for (var k = na(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.aa]
            .concat(n.labels || [], [b])
            .join("."),
          r = Co(c, p, !0);
        r.Bb = Ip();
        so(a, q, r);
      }
    return e;
  }
  function qq(a, b) {
    var c = [];
    b = b || {};
    var d = Op(b),
      e = oq(c, d, a);
    if (e.length)
      for (var f = na(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Pp(b.prefix),
          n = Qp(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.aa,
          t = p.labels,
          u = p.timestamp,
          v = Math.round(u / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + v), (w.b = (t || []).concat([a])), w);
          Cp(n, x, b, u);
        } else if (k.type === "gb") {
          var y = [q, v, r].concat(t || [], [a]).join("."),
            A = Co(b, u, !0);
          A.Bb = Ip();
          so(n, y, A);
        }
      }
    return c;
  }
  function rq(a, b) {
    var c = Pp(b),
      d = Qp(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? (mb(7) ? Rp(d) : []) : Mp(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function sq(a) {
    for (var b = 0, c = na(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function tq(a, b) {
    var c = Math.max(rq("aw", a), sq(Jp(Ip()) ? qp() : {})),
      d = Math.max(rq("gb", a), sq(Jp(Ip()) ? qp("_gac_gb", !0) : {}));
    mb(7) && b && (d = Math.max(d, rq("ag", a)));
    return d > c;
  }
  function Kq() {
    ii.dedupe_gclid || (ii.dedupe_gclid = zo());
    return ii.dedupe_gclid;
  }
  var Lq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Mq = /^www.googleadservices.com$/;
  function Nq(a) {
    a || (a = Oq());
    return a.Ym
      ? !1
      : a.Nl || a.Ol || a.Rl || a.Pl || a.rh || a.od || a.Bl || a.Ql || a.Fl
      ? !0
      : !1;
  }
  function Oq() {
    var a = {},
      b = So(!0);
    a.Ym = !!b._up;
    var c = Zp();
    a.Nl = c.aw !== void 0;
    a.Ol = c.dc !== void 0;
    a.Rl = c.wbraid !== void 0;
    a.Pl = c.gbraid !== void 0;
    a.Ql = T(75) ? c.gclsrc === "aw.ds" : !1;
    var d = aj(E.location.href),
      e = Vi(d, "query", !1, void 0, "gad");
    a.rh = e !== void 0;
    if (!a.rh) {
      var f = d.hash.replace("#", ""),
        g = Ui(f, "gad", !1);
      a.rh = g !== void 0;
    }
    a.od = Vi(d, "query", !1, void 0, "gad_source");
    if (a.od === void 0) {
      var k = d.hash.replace("#", ""),
        m = Ui(k, "gad_source", !1);
      a.od = m;
    }
    var n = F.referrer ? Vi(aj(F.referrer), "host") : "";
    a.Fl = Lq.test(n);
    a.Bl = Mq.test(n);
    return a;
  }
  var Pq = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Qq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Rq = /^\d+\.fls\.doubleclick\.net$/,
    Sq = /;gac=([^;?]+)/,
    Tq = /;gacgb=([^;?]+)/;
  function Uq(a, b) {
    if (Rq.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && c.length === 2 && c[1].match(Pq)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = na(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].aa);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Vq(a, b, c) {
    for (
      var d = Jp(Ip()) ? qp("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = na(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = pq("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { Al: f ? e.join(";") : "", zl: Uq(d, Tq) };
  }
  function Wq(a) {
    var b = F.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Qq) ? b[1] : void 0;
  }
  function Xq(a) {
    var b = { mh: void 0, nh: void 0 },
      c,
      d;
    Rq.test(F.location.host) && ((c = Wq("gclgs")), (d = Wq("gclst")));
    if (c && d) (b.mh = c), (b.nh = d);
    else {
      var e = Bb(),
        f = Rp((a || "_gcl") + "_gs"),
        g = f.map(function (m) {
          return m.aa;
        }),
        k = f.map(function (m) {
          return e - m.timestamp;
        });
      g.length > 0 &&
        k.length > 0 &&
        ((b.mh = g.join(".")), (b.nh = k.join(".")));
    }
    return b;
  }
  function Yq(a, b, c) {
    if (Rq.test(F.location.host)) {
      var d = Wq(c);
      if (d) return [{ aa: d }];
    } else {
      if (b === "gclid") return Mp((a || "_gcl") + "_aw");
      if (b === "wbraid") return Mp((a || "_gcl") + "_gb");
      if (b === "braids") return Op({ prefix: a });
    }
    return [];
  }
  function Zq(a) {
    return Yq(a, "gclid", "gclaw")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function $q(a) {
    return Yq(a, "wbraid", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function ar(a) {
    return Yq(a, "braids", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function br(a, b) {
    return Rq.test(F.location.host) ? !(Wq("gclaw") || Wq("gac")) : tq(a, b);
  }
  function cr(a, b, c) {
    var d;
    d = c ? qq(a, b) : pq(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function dr() {
    var a = E.__uspapi;
    if (ob(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  function mr(a) {
    var b = U(a.m, P.g.Jb),
      c = U(a.m, P.g.Wb);
    b && !c
      ? (a.eventName !== P.g.ba && a.eventName !== P.g.Lc && O(131),
        (a.isAborted = !0))
      : !b && c && (O(132), (a.isAborted = !0));
  }
  function nr(a) {
    var b = W(P.g.P) ? ii.pscdl : "denied";
    b != null && (a.o[P.g.ef] = b);
  }
  function or(a) {
    var b = Zm(!0);
    a.o[P.g.Ib] = b;
  }
  function pr(a) {
    Un() && (a.o[P.g.yc] = 1);
  }
  function gr() {
    var a = F.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function qr(a) {
    if (T(13)) {
      var b = U(a.m, P.g.Ma);
      a.o[P.g.he] || (a.o[P.g.he] = {});
      a.o[P.g.he].ce = b;
    }
  }
  function xr(a, b, c, d) {
    var e = yc(),
      f;
    if (e === 1)
      a: {
        var g = ui;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = F.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" != E.location.protocol ? a : b) + c;
  }
  function Kr(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.o[b];
      },
      setHitData: function (b, c) {
        a.o[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.o[b] === void 0 && (a.o[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return U(a.m, b);
      },
      Gj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.o);
      },
    };
  }
  var Rr,
    Sr = !1;
  function Tr() {
    Sr = !0;
    Rr = Rr || {};
  }
  function Ur(a) {
    Sr || Tr();
    return Rr[a];
  }
  function Vr() {
    var a = E.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function Wr(a) {
    if (F.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !E.getComputedStyle)
      return !0;
    var c = E.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = E.getComputedStyle(d, null));
    }
    return !1;
  }
  var Kf;
  var Ws = Number("") || 5,
    Xs = Number("") || 50,
    Ys = sb();
  var ct = {
    Uk: Number("") || 500,
    Hk: Number("") || 5e3,
    ij: Number("20") || 10,
    nk: Number("") || 5e3,
  };
  function dt(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var et = function (a, b) {
    var c;
    return c;
  };
  var ft;
  function lt() {
    var a = Nf(Kf.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function mt(a, b) {}
  var nt = function (a, b, c, d) {};
  function ot(a, b, c, d) {}
  function pt(a, b, c, d) {}
  var qt = void 0;
  function rt(a) {
    var b = [];
    return b;
  }
  var st = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Mm();
  Pm() || Jm("iPod");
  Jm("iPad");
  !Jm("Android") || Nm() || Mm() || Lm() || Jm("Silk");
  Nm();
  !Jm("Safari") ||
    Nm() ||
    (Km() ? 0 : Jm("Coast")) ||
    Lm() ||
    (Km() ? 0 : Jm("Edge")) ||
    (Km() ? Im("Microsoft Edge") : Jm("Edg/")) ||
    (Km() ? Im("Opera") : Jm("OPR")) ||
    Mm() ||
    Jm("Silk") ||
    Jm("Android") ||
    Qm();
  var tt = {},
    ut = null,
    vt = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!ut) {
        ut = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          tt[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            ut[q] === void 0 && (ut[q] = p);
          }
        }
      }
      for (
        var r = tt[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          C = r[((x & 3) << 4) | (y >> 4)],
          H = r[((y & 15) << 2) | (A >> 6)],
          D = r[A & 63];
        t[w++] = "" + B + C + H + D;
      }
      var K = 0,
        N = u;
      switch (b.length - v) {
        case 2:
          (K = b[v + 1]), (N = r[(K & 15) << 2] || u);
        case 1:
          var L = b[v];
          t[w] = "" + r[L >> 2] + r[((L & 3) << 4) | (K >> 4)] + N + u;
      }
      return t.join("");
    };
  var wt =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function xt(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function zt() {
    var a = E.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function At() {
    var a, b;
    return (b = (a = E.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function Bt(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Ct() {
    var a = E;
    if (!Bt(a)) return null;
    var b = xt(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(wt)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Dt,
    Et = function () {
      if (Bt(E) && ((Dt = Bb()), !At())) {
        var a = Ct();
        a &&
          (a.then(function () {
            O(95);
          }),
          a.catch(function () {
            O(96);
          }));
      }
    },
    Gt = function (a) {
      var b = Ft.Xm,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = zt();
      if (d) c(d);
      else {
        var e = At();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = E.setTimeout(function () {
            c.Le || ((c.Le = !0), O(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Le || ((c.Le = !0), O(104), E.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Le || ((c.Le = !0), O(105), E.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Ht = function (a, b) {
      a &&
        ((b.o[P.g.wf] = a.architecture),
        (b.o[P.g.xf] = a.bitness),
        a.fullVersionList &&
          (b.o[P.g.yf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.o[P.g.zf] = a.mobile ? "1" : "0"),
        (b.o[P.g.Af] = a.model),
        (b.o[P.g.Bf] = a.platform),
        (b.o[P.g.Cf] = a.platformVersion),
        (b.o[P.g.Df] = a.wow64 ? "1" : "0"));
    };
  function It(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Jt() {
    return It("join-ad-interest-group") && ob(oc.joinAdInterestGroup);
  }
  function Kt(a, b) {
    var c = lb[3] === void 0 ? 1 : lb[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = F.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(F.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = F.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (lb[2] === void 0 ? 50 : lb[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && Bb() - p < (lb[1] === void 0 ? 6e4 : lb[1])
        ? (hb("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Lt(e[0]);
        else {
          if (m) {
            hb("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Lt(e[0]) : m && Lt(k[0]);
      zc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: Bb() }
      );
    }
  }
  function Lt(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Mt() {
    return "https://td.doubleclick.net";
  }
  var Fu = {
    K: {
      Uh: "ads_conversion_hit",
      Bd: "container_execute_start",
      Xh: "container_setup_end",
      Uf: "container_setup_start",
      Vh: "container_blocking_end",
      Wh: "container_execute_end",
      Yh: "container_yield_end",
      Vf: "container_yield_start",
      Yi: "event_execute_end",
      Xi: "event_evaluation_end",
      Ng: "event_evaluation_start",
      Zi: "event_setup_end",
      ee: "event_setup_start",
      bj: "ga4_conversion_hit",
      me: "page_load",
      rn: "pageview",
      ac: "snippet_load",
      uj: "tag_callback_error",
      vj: "tag_callback_failure",
      wj: "tag_callback_success",
      xj: "tag_execute_end",
      ld: "tag_execute_start",
    },
  };
  function Gu() {
    function a(c, d) {
      var e = ib(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Hu = !1;
  function pv(a, b) {}
  function qv(a, b) {}
  function rv(a, b) {}
  function sv(a, b) {}
  function tv() {
    var a = {};
    return a;
  }
  function hv(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function uv() {}
  function vv(a, b) {}
  function wv(a, b, c) {}
  function xv() {}
  function yv(a, b) {
    var c = E,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function zv(a, b, c, d) {
    var e = Um(a, "fmt");
    if (b) {
      var f = Um(a, "random"),
        g = Um(a, "label") || "";
      if (!f) return !1;
      var k = vt(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!yv(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Wm(a, "rfmt", e));
    var m = Wm(a, "fmt", 4);
    xc(
      m,
      function () {
        E.google_noFurtherRedirects &&
          b &&
          ((E.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      F.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  function Rv(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function Sv(a, b, c) {
    c = c === void 0 ? !1 : c;
    Tv().addRestriction(0, a, b, c);
  }
  function Uv(a, b, c) {
    c = c === void 0 ? !1 : c;
    Tv().addRestriction(1, a, b, c);
  }
  function Vv() {
    var a = Hj();
    return Tv().getRestrictions(1, a);
  }
  var Wv = function () {
      this.j = {};
      this.D = {};
    },
    Xv = function (a, b) {
      var c = a.j[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.j[b] = c));
      return c;
    };
  Wv.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.D[b]) {
      var e = Xv(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  Wv.prototype.getRestrictions = function (a, b) {
    var c = Xv(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        pa(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        pa(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        pa(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        pa(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  Wv.prototype.getExternalRestrictions = function (a, b) {
    var c = Xv(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  Wv.prototype.removeExternalRestrictions = function (a) {
    var b = Xv(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.D[a] = !0;
  };
  function Tv() {
    var a = ii.r;
    a || ((a = new Wv()), (ii.r = a));
    return a;
  }
  var Yv = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Zv = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    $v = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    aw =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function bw() {
    var a = Ji("gtm.allowlist") || Ji("gtm.whitelist");
    a && O(9);
    oi && (a = ["google", "gtagfl", "lcl", "zone"]);
    Yv.test(E.location && E.location.hostname) &&
      (oi
        ? O(116)
        : (O(117),
          cw &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && Fb(yb(a), Zv),
      c = Ji("gtm.blocklist") || Ji("gtm.blacklist");
    c || ((c = Ji("tagTypeBlacklist")) && O(3));
    c ? O(8) : (c = []);
    Yv.test(E.location && E.location.hostname) &&
      ((c = yb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    yb(c).indexOf("google") >= 0 && O(2);
    var d = c && Fb(yb(c), $v),
      e = {};
    return function (f) {
      var g = f && f[Ie.ma];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = yi[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    O(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var t = tb(d, k || []);
          t && O(10);
          q = t;
        }
      }
      var u = !m || q;
      u ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (u = tb(d, aw));
      return (e[g] = u);
    };
  }
  var cw = !1;
  cw = !0;
  function dw() {
    zj &&
      Sv(Hj(), function (a) {
        var b = uf(a.entityId),
          c;
        if (xf(b)) {
          var d = b[Ie.ma];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = mf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Rv(b[Ie.ma], 4);
        return c;
      });
  }
  function ew(a, b, c, d, e) {
    if (!fw()) {
      var f = d.siloed ? Cj(a) : a;
      if (!Tj(f)) {
        var g = gw(a),
          k = Gb(a, "GTM-"),
          m = gj(),
          n = c ? "/gtag/js" : "/gtm.js",
          p = fj(b, n + g);
        if (!p) {
          var q = hi.Cd + n;
          m && rc && k
            ? ((q = rc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
              (p = xr("https://", "http://", q + g)))
            : (p = Di() ? Ci() + n + g : xr("https://", "http://", q + g));
        }
        d.siloed && Vj({ ctid: f, isDestination: !1 });
        var r = Kj();
        wj().container[f] = { state: 1, context: d, parent: r };
        vj({ ctid: f, isDestination: !1 }, e);
        xc(p);
      }
    }
  }
  function hw(a, b, c, d) {
    if (!fw()) {
      var e = c.siloed ? Cj(a) : a;
      if (!Uj(e))
        if (!c.siloed && Wj())
          (wj().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Kj(),
          }),
            vj({ ctid: e, isDestination: !0 }, d),
            O(91);
        else {
          var f = "/gtag/destination" + gw(a, !0),
            g = fj(b, f);
          g || (g = Di() ? Ci() + f : xr("https://", "http://", hi.Cd + f));
          c.siloed && Vj({ ctid: e, isDestination: !0 });
          wj().destination[e] = { state: 1, context: c, parent: Kj() };
          vj({ ctid: e, isDestination: !0 }, d);
          xc(g);
        }
    }
  }
  function gw(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + hi.hb;
    if (!Gb(a, "GTM-") || b) c += "&cx=c";
    T(69) && (c += "&gtm=" + Xn());
    gj() && (c += "&sign=" + hi.Sg);
    var d = Bi.D;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function fw() {
    if (Vn()) {
      return !0;
    }
    return !1;
  }
  var iw = [];
  function jw() {
    var a = Of.ctid;
    if (a) {
      var b = yj.ke ? 1 : 0,
        c,
        d = Jj(Kj());
      c = d && d.context;
      return (
        a +
        ";" +
        Of.canonicalContainerId +
        ";" +
        (c && c.fromContainerExecution ? 1 : 0) +
        ";" +
        ((c && c.source) || 0) +
        ";" +
        b
      );
    }
  }
  function kw() {
    var a = aj(E.location.href);
    return a.hostname + a.pathname;
  }
  function lw() {
    var a = kw();
    a && ek("dl", encodeURIComponent(a));
    if (T(89)) {
      var b = jw();
      b && ek("tdp", b);
    } else
      ek("tdp", function () {
        return iw.length > 0 ? iw.join(".") : void 0;
      });
    var c = Zm(!0);
    c !== void 0 && ek("frm", String(c));
  }
  var mw = !1,
    nw = 0,
    ow = [];
  function pw(a) {
    if (!mw) {
      var b = F.createEventObject,
        c = F.readyState === "complete",
        d = F.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        mw = !0;
        for (var e = 0; e < ow.length; e++) G(ow[e]);
      }
      ow.push = function () {
        for (var f = za.apply(0, arguments), g = 0; g < f.length; g++) G(f[g]);
        return 0;
      };
    }
  }
  function qw() {
    if (!mw && nw < 140) {
      nw++;
      try {
        var a, b;
        (b = (a = F.documentElement).doScroll) == null || b.call(a, "left");
        pw();
      } catch (c) {
        E.setTimeout(qw, 50);
      }
    }
  }
  function rw(a) {
    mw ? a() : ow.push(a);
  }
  function tw(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Fj(),
    };
  }
  var vw = function (a, b) {
      this.j = !1;
      this.M = [];
      this.eventData = { tags: [] };
      this.R = !1;
      this.D = this.H = 0;
      uw(this, a, b);
    },
    ww = function (a, b, c, d) {
      if (ki.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Ta(d) && (e = h(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    xw = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    yw = function (a) {
      if (!a.j) {
        for (var b = a.M, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.M.length = 0;
      }
    },
    uw = function (a, b, c) {
      b !== void 0 && a.te(b);
      c &&
        E.setTimeout(function () {
          yw(a);
        }, Number(c));
    };
  vw.prototype.te = function (a) {
    var b = this,
      c = Db(function () {
        G(function () {
          a(Fj(), b.eventData);
        });
      });
    this.j ? c() : this.M.push(c);
  };
  var zw = function (a) {
      a.H++;
      return Db(function () {
        a.D++;
        a.R && a.D >= a.H && yw(a);
      });
    },
    Aw = function (a) {
      a.R = !0;
      a.D >= a.H && yw(a);
    };
  var Bw = {},
    Dw = function () {
      return E[Cw()];
    };
  function Cw() {
    return E.GoogleAnalyticsObject || "ga";
  }
  var Gw = function () {
      var a = Fj();
    },
    Hw = function (a, b) {
      return function () {
        var c = Dw(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              m = g.indexOf("&tid=" + b) < 0;
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Mw = ["es", "1"],
    Nw = {},
    Ow = {};
  function Pw(a, b) {
    if (pj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Nw[a] = [
        ["e", c],
        ["eid", a],
      ];
      cm(a);
    }
  }
  function Qw(a) {
    var b = a.eventId,
      c = a.ic;
    if (!Nw[b]) return [];
    var d = [];
    Ow[b] || d.push(Mw);
    d.push.apply(d, pa(Nw[b]));
    c && (Ow[b] = !0);
    return d;
  }
  var Rw = {},
    Sw = {},
    Tw = {};
  function Uw(a, b, c, d) {
    pj &&
      T(79) &&
      ((d === void 0 ? 0 : d)
        ? ((Tw[b] = Tw[b] || 0), ++Tw[b])
        : c !== void 0
        ? ((Sw[a] = Sw[a] || {}), (Sw[a][b] = Math.round(c)))
        : ((Rw[a] = Rw[a] || {}), (Rw[a][b] = (Rw[a][b] || 0) + 1)));
  }
  function Vw(a) {
    var b = a.eventId,
      c = a.ic,
      d = Rw[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Rw[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function Ww(a) {
    var b = a.eventId,
      c = a.ic,
      d = Sw[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Sw[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function Xw() {
    for (
      var a = [], b = na(Object.keys(Tw)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Tw[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var Yw = {},
    Zw = {};
  function $w(a, b, c) {
    if (pj && b) {
      var d = jj(b);
      Yw[a] = Yw[a] || [];
      Yw[a].push(c + d);
      var e = (xf(b) ? "1" : "2") + d;
      Zw[a] = Zw[a] || [];
      Zw[a].push(e);
      cm(a);
    }
  }
  function ax(a) {
    var b = a.eventId,
      c = a.ic,
      d = [],
      e = Yw[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = Zw[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete Yw[b], delete Zw[b]);
    return d;
  }
  function bx(a, b, c, d) {
    var e = kf[a],
      f = cx(a, b, c, d);
    if (!f) return null;
    var g = yf(e[Ie.tj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = bx(
        k.index,
        {
          onSuccess: f,
          onFailure: k.Ej === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function cx(a, b, c, d) {
    function e() {
      function w() {
        Jk(3);
        var D = Bb() - H;
        $w(c.id, f, "7");
        xw(c.bc, B, "exception", D);
        T(70) && wv(c, f, Fu.K.uj);
        C || ((C = !0), k());
      }
      if (f[Ie.Mk]) k();
      else {
        var x = wf(f, c, []),
          y = x[Ie.lk];
        if (y != null)
          for (var A = 0; A < y.length; A++)
            if (!W(y[A])) {
              k();
              return;
            }
        var B = ww(c.bc, String(f[Ie.ma]), Number(f[Ie.se]), x[Ie.METADATA]),
          C = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!C) {
            C = !0;
            var D = Bb() - H;
            $w(c.id, kf[a], "5");
            xw(c.bc, B, "success", D);
            T(70) && wv(c, f, Fu.K.wj);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!C) {
            C = !0;
            var D = Bb() - H;
            $w(c.id, kf[a], "6");
            xw(c.bc, B, "failure", D);
            T(70) && wv(c, f, Fu.K.vj);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        $w(c.id, f, "1");
        T(70) && vv(c, f);
        var H = Bb();
        try {
          zf(x, { event: c, index: a, type: 1 });
        } catch (D) {
          w(D);
        }
        T(70) && wv(c, f, Fu.K.xj);
      }
    }
    var f = kf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = yf(f[Ie.yj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = bx(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.Ej === 2 ? m : q;
    }
    if (f[Ie.lj] || f[Ie.Ok]) {
      var r = f[Ie.lj] ? lf : c.Pm,
        t = g,
        u = k;
      if (!r[a]) {
        var v = dx(a, r, Db(e));
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function dx(a, b, c) {
    var d = [],
      e = [];
    b[a] = ex(d, e, c);
    return {
      onSuccess: function () {
        b[a] = fx;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = gx;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function ex(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function fx(a) {
    a();
  }
  function gx(a, b) {
    b();
  }
  var jx = function (a, b) {
    for (var c = [], d = 0; d < kf.length; d++)
      if (a[d]) {
        var e = kf[d];
        var f = zw(b.bc);
        try {
          var g = bx(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Ie.ma];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = mf[k];
            c.push({
              bk: d,
              Rj: (m ? m.priorityOverride || 0 : 0) || Rv(e[Ie.ma], 1) || 0,
              execute: g,
            });
          } else hx(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(ix);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function ix(a, b) {
    var c,
      d = b.Rj,
      e = a.Rj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.bk,
        k = b.bk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function hx(a, b) {
    if (pj) {
      var c = function (d) {
        var e = b.isBlocked(kf[d]) ? "3" : "4",
          f = yf(kf[d][Ie.tj], b, []);
        f && f.length && c(f[0].index);
        $w(b.id, kf[d], e);
        var g = yf(kf[d][Ie.yj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var mx = !1,
    kx;
  var sx = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(70)) {
    }
    if (d === "gtm.js") {
      if (mx) return !1;
      mx = !0;
    }
    var e = !1,
      f = Vv(),
      g = h(a);
    if (
      !f.every(function (t) {
        return t({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    Pw(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: ox(g, e),
        Pm: [],
        logMacroError: function () {
          O(6);
          Jk(0);
        },
        cachedModelValues: px(),
        bc: new vw(function () {
          if (T(70)) {
          }
          k && k.apply(k, [].slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    T(79) && pj && (n.reportMacroDiscrepancy = Uw);
    T(70) && rv(n.id, n.name);
    var p = Ff(n);
    T(70) && sv(n.id, n.name);
    e && (p = qx(p));
    if (T(70)) {
    }
    var q = jx(p, n),
      r = !1;
    Aw(n.bc);
    (d !== "gtm.js" && d !== "gtm.sync") || Gw();
    return rx(p, q) || r;
  };
  function px() {
    var a = {};
    a.event = Oi("event", 1);
    a.ecommerce = Oi("ecommerce", 1);
    a.gtm = Oi("gtm");
    a.eventModel = Oi("eventModel");
    return a;
  }
  function ox(a, b) {
    var c = bw();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Ie.ma];
      if (!e || typeof e != "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Hj();
      f = Tv().getRestrictions(0, g);
      var k = a;
      b && ((k = h(a)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var m = yi[e] || [], n = na(f), p = n.next();
        !p.done;
        p = n.next()
      ) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function qx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(kf[c][Ie.ma]);
        if (ji[d] || kf[c][Ie.Pk] !== void 0 || Rv(d, 2)) b[c] = !0;
      }
    return b;
  }
  function rx(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && kf[c] && !ki[String(kf[c][Ie.ma])]) return !0;
    return !1;
  }
  var tx = 0;
  function ux(a, b) {
    return arguments.length === 1 ? vx("set", a) : vx("set", a, b);
  }
  function wx(a, b) {
    return arguments.length === 1 ? vx("config", a) : vx("config", a, b);
  }
  function xx(a, b, c) {
    c = c || {};
    c[P.g.Yb] = a;
    return vx("event", b, c);
  }
  function vx() {
    return arguments;
  }
  var Dx = function () {
    this.messages = [];
    this.j = [];
  };
  Dx.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Dx.prototype.listen = function (a) {
    this.j.push(a);
  };
  Dx.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Dx.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function Ex(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Of.canonicalContainerId;
    Fx().enqueue(a, b, c);
  }
  function Gx() {
    var a = Hx;
    Fx().listen(a);
  }
  function Fx() {
    var a = ii.mb;
    a || ((a = new Dx()), (ii.mb = a));
    return a;
  }
  var Ix = {},
    Jx = {};
  function Kx(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { Gh: void 0, qh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.Gh = il(g, b)), e.Gh)) {
          var k = Dj();
          rb(
            k,
            (function (r) {
              return function (t) {
                return r.Gh.destinationId === t;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = Ix[g] || [];
        e.qh = {};
        m.forEach(
          (function (r) {
            return function (t) {
              r.qh[t] = !0;
            };
          })(e)
        );
        for (var n = Aj(), p = 0; p < n.length; p++)
          if (e.qh[n[p]]) {
            c = c.concat(Dj());
            break;
          }
        var q = Jx[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { gm: c, jm: d };
  }
  function Lx(a) {
    z(Ix, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function Mx(a) {
    z(Jx, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var Nx = "HA GF G UA AW DC MC".split(" "),
    Ox = !1,
    Px = !1,
    Qx = !1,
    Rx = !1;
  function Sx(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: zi() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Tx = void 0,
    Ux = void 0;
  function Vx(a, b, c) {
    var d = h(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && O(136);
    var e = h(b, null);
    h(c, e);
    Ex(wx(Aj()[0], e), a.eventId, d);
  }
  function Wx(a) {
    for (var b = na([P.g.gd, P.g.Mb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || km.j[d];
      if (e) return e;
    }
  }
  var Xx = [
      P.g.gd,
      P.g.Mb,
      P.g.vc,
      P.g.nb,
      P.g.ub,
      P.g.za,
      P.g.qa,
      P.g.Na,
      P.g.Ua,
      P.g.Gb,
    ],
    Yx = {
      config: function (a, b) {
        var c = Sx(a, b);
        if (!(a.length < 2) && l(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Ta(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = il(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!yj.ke) {
                var m = Jj(Kj());
                if (Yj(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { vm: Jj(n), fm: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.vm), (g = q.fm));
            Pw(c.eventId, "gtag.config");
            var r = e.destinationId,
              t = e.id !== r;
            if (t ? Dj().indexOf(r) === -1 : Aj().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[P.g.Jb]) {
                var u = Wx(d);
                if (t)
                  hw(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var v = d;
                  Tx ? Vx(b, v, Tx) : Ux || (Ux = h(v, null));
                } else
                  ew(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (O(128), g && O(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                Ux
                  ? (Vx(b, Ux, x), (w = !1))
                  : ((!x[P.g.Zb] && mi && Tx) || (Tx = h(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!Qx && ((Qx = !0), Px))
                for (var A = na(Xx), B = A.next(); !B.done; B = A.next())
                  if (y.hasOwnProperty(B.value)) {
                    Ik("erc");
                    break;
                  }
              qj && !zj && (tx === 1 && (ck.mcc = !1), (tx = 2));
              Fk = !0;
              if (mi && !t && !d[P.g.Zb]) {
                var C = Rx;
                Rx = !0;
                if (C) return;
              }
              Ox || O(43);
              if (!b.noTargetGroup)
                if (t) {
                  Mx(e.id);
                  var H = e.id,
                    D = d[P.g.Vd] || "default";
                  D = String(D).split(",");
                  for (var K = 0; K < D.length; K++) {
                    var N = Jx[D[K]] || [];
                    Jx[D[K]] = N;
                    N.indexOf(H) < 0 && N.push(H);
                  }
                } else {
                  Lx(e.id);
                  var L = e.id,
                    S = d[P.g.Vd] || "default";
                  S = S.toString().split(",");
                  for (var V = 0; V < S.length; V++) {
                    var Z = Ix[S[V]] || [];
                    Ix[S[V]] = Z;
                    Z.indexOf(L) < 0 && Z.push(L);
                  }
                }
              delete d[P.g.Vd];
              var aa = b.eventMetadata || {};
              aa.hasOwnProperty("is_external_event") ||
                (aa.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = aa;
              delete d[P.g.Yc];
              for (var R = t ? [e.id] : Dj(), ma = 0; ma < R.length; ma++) {
                var la = d,
                  ha = R[ma],
                  xa = h(b, null),
                  Oa = il(ha, xa.isGtmEvent);
                Oa && km.push("config", [la], Oa, xa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          O(39);
          var c = Sx(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[P.g.O] && O(139), e[P.g.wa] && O(140));
          d === "default"
            ? Wk(e)
            : d === "update"
            ? Yk(e, c)
            : d === "declare" && b.fromContainerExecution && Vk(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && l(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Ta(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = h(e, null)),
            e[P.g.Yc] && (g.eventCallback = e[P.g.Yc]),
            e[P.g.Sd] && (g.eventTimeout = e[P.g.Sd]));
          var k = Sx(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.Yb];
          r === void 0 &&
            ((r = Ji(P.g.Yb, 2)), r === void 0 && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? l(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = Kx(t, b.isGtmEvent),
              v = u.gm,
              w = u.jm;
            if (w.length)
              for (var x = Wx(q), y = 0; y < w.length; y++) {
                var A = il(w[y], b.isGtmEvent);
                A &&
                  hw(A.destinationId, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = jl(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            var C;
            !B.length ||
              ((C = b.eventMetadata) == null ? 0 : C.em_event) ||
              (Px = !0);
            Pw(m, c);
            for (var H = [], D = 0; D < B.length; D++) {
              var K = B[D],
                N = h(b, null);
              if (Nx.indexOf(Oj(K.prefix)) !== -1) {
                var L = h(d, null),
                  S = N.eventMetadata || {};
                S.hasOwnProperty("is_external_event") ||
                  (S.is_external_event = !N.fromContainerExecution);
                N.eventMetadata = S;
                delete L[P.g.Yc];
                lm(c, L, K.id, N);
                qj && !zj && tx === 0 && (ek("mcc", "1"), (tx = 1));
                Fk = !0;
              }
              H.push(K.id);
            }
            g.eventModel = g.eventModel || {};
            B.length > 0
              ? (g.eventModel[P.g.Yb] = H.join())
              : delete g.eventModel[P.g.Yb];
            Ox || O(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[P.g.Wb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (a.length === 4 && l(a[1]) && l(a[2]) && ob(a[3])) {
          var c = il(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Ox || O(43);
            var f = Wx();
            if (
              !rb(Dj(), function (k) {
                return c.destinationId === k;
              })
            )
              hw(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (Nx.indexOf(Oj(c.prefix)) !== -1) {
              Fk = !0;
              Sx(a, b);
              var g = {};
              h(((g[P.g.rb] = d), (g[P.g.Hb] = e), g), null);
              mm(
                d,
                function (k) {
                  G(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          Ox = !0;
          var c = Sx(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && l(a[1]) && ob(a[2])) {
          if ((Lf(a[1], a[2]), O(74), a[1] === "all")) {
            O(75);
            var b = !1;
            try {
              b = a[2](Fj(), "unknown", {});
            } catch (c) {}
            b || O(76);
          }
        } else O(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Ta(a[1])
          ? (c = h(a[1], null))
          : a.length === 3 &&
            l(a[1]) &&
            ((c = {}),
            Ta(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = h(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = Sx(a, b),
            e = d.eventId,
            f = d.priorityId;
          h(c, null);
          var g = h(c, null);
          km.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Zx = { policy: !0 };
  var ay = function (a) {
    if ($x(a)) return a;
    this.value = a;
  };
  ay.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var $x = function (a) {
    return !a || Qa(a) !== "object" || Ta(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  ay.prototype.getUntrustedMessageValue = ay.prototype.getUntrustedMessageValue;
  var by = !1,
    cy = [];
  function dy() {
    if (!by) {
      by = !0;
      for (var a = 0; a < cy.length; a++) G(cy[a]);
    }
  }
  function ey(a) {
    by ? G(a) : cy.push(a);
  }
  var fy = 0,
    gy = {},
    hy = [],
    iy = [],
    jy = !1,
    ky = !1;
  function ly(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var my = function (a) {
      return E[hi.hb].push(a);
    },
    ny = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return my(a);
    },
    oy = function (a, b) {
      if (!pb(b) || b < 0) b = 0;
      var c = ii[hi.hb],
        d = 0,
        e = !1,
        f = void 0;
      f = E.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (E.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function py(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function (e, f) {
      e !== "_clear" && (c && Mi(e), Mi(e, f));
    });
    vi || (vi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = zi()), (a["gtm.uniqueEventId"] = d), Mi("gtm.uniqueEventId", d));
    return sx(a);
  }
  function qy(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (vb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function ry() {
    var a;
    if (iy.length) a = iy.shift();
    else if (hy.length) a = hy.shift();
    else return;
    var b;
    var c = a;
    if (jy || !qy(c.message)) b = c;
    else {
      jy = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = zi());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      hy.unshift(k, c);
      if (qj) {
        if (!T(89)) {
          var m = jw();
          m && iw.push(m);
        }
        ik();
      }
      b = f;
    }
    return b;
  }
  function sy() {
    for (var a = !1, b; !ky && (b = ry()); ) {
      ky = !0;
      delete Gi.eventModel;
      Ii();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) ky = !1;
      else {
        e.fromContainerExecution && Ni();
        try {
          if (ob(d))
            try {
              d.call(Ki);
            } catch (v) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Ji(g.join("."), 2);
              if (n != null)
                try {
                  n[k].apply(n, m);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (vb(d))
              a: {
                if (d.length && l(d[0])) {
                  var q = Yx[d[0]];
                  if (q && (!e.fromContainerExecution || !Zx[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = py(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Ii(!0);
          var r = d["gtm.uniqueEventId"];
          if (typeof r === "number") {
            for (var t = gy[String(r)] || [], u = 0; u < t.length; u++)
              iy.push(ty(t[u]));
            t.length && iy.sort(ly);
            delete gy[String(r)];
            r > fy && (fy = r);
          }
          ky = !1;
        }
      }
    }
    return !a;
  }
  function uy() {
    if (T(70)) {
      var a = vy();
    }
    var b = sy();
    if (T(70)) {
    }
    try {
      var c = Fj(),
        d = E[hi.hb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Hx(a) {
    if (fy < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      gy[b] = gy[b] || [];
      gy[b].push(a);
    } else
      iy.push(ty(a)),
        iy.sort(ly),
        G(function () {
          ky || sy();
        });
  }
  function ty(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var wy = function () {
      function a(f) {
        var g = {};
        if ($x(f)) {
          var k = f;
          f = $x(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = sc(hi.hb, []),
        c = (ii[hi.hb] = ii[hi.hb] || {});
      c.pruned === !0 && O(83);
      gy = Fx().get();
      Gx();
      rw(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      ey(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (ii.SANDBOXED_JS_SEMAPHORE > 0) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new ay(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        hy.push.apply(hy, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = typeof m !== "boolean" || m;
        return sy() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      hy.push.apply(hy, e);
      if (vy()) {
        if (T(70)) {
        }
        G(uy);
      }
    },
    vy = function () {
      var a = !0;
      return a;
    };
  function xy(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = Bb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function yy(a) {
    return a && a.indexOf("pending:") === 0 ? xy(a.substr(8)) : !1;
  }
  var Ty = function () {};
  var Uy = function () {};
  Uy.prototype.toString = function () {
    return "undefined";
  };
  var Vy = new Uy();
  var Xy = function () {
      (ii.rm = ii.rm || {})[Hj()] = function (a) {
        if (Wy.hasOwnProperty(a)) return Wy[a];
      };
    },
    $y = function (a, b, c) {
      if (a instanceof Yy) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(zi());
        Zy[g] = [f, c];
        a = e.call(d, g);
        b = nb;
      }
      return { Hj: a, onSuccess: b };
    },
    az = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        O(a ? 134 : 135);
        var d = Zy[c];
        if (d && typeof d[b] === "function") d[b]();
        Zy[c] = void 0;
      };
    },
    Yy = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === Vy ? b : a[d]);
        return c.join("");
      };
    };
  Yy.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var Wy = {},
    Zy = {};
  function bz(a, b) {
    function c(g) {
      var k = aj(g),
        m = Vi(k, "protocol"),
        n = Vi(k, "host", !0),
        p = Vi(k, "port"),
        q = Vi(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function cz(a) {
    return dz(a) ? 1 : 0;
  }
  function dz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = h(a, {});
        h({ arg1: c[d], any_of: void 0 }, e);
        if (cz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return ng(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < jg.length; g++) {
                var k = jg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return kg(b, c);
      case "_eq":
        return og(b, c);
      case "_ge":
        return pg(b, c);
      case "_gt":
        return rg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return qg(b, c);
      case "_lt":
        return sg(b, c);
      case "_re":
        return mg(b, c, a.ignore_case);
      case "_sw":
        return tg(b, c);
      case "_um":
        return bz(b, c);
    }
    return !1;
  }
  function ez() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function fz() {
    var a = [
      ["cv", T(96) ? ez() : "11"],
      ["rv", hi.Rg],
      [
        "tc",
        kf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    hi.oe && a.push(["x", hi.oe]);
    Bi.j && a.push(["tag_exp", Bi.j]);
    return a;
  }
  var gz = {},
    hz = {};
  function iz() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function jz(a, b, c, d) {
    if (pj) {
      var e = String(c) + b;
      gz[a] = gz[a] || [];
      gz[a].push(e);
      hz[a] = hz[a] || [];
      hz[a].push(d + b);
    }
  }
  function kz(a) {
    var b = a.eventId,
      c = a.ic,
      d = [],
      e = gz[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = hz[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete gz[b], delete hz[b]);
    return d;
  }
  function lz() {
    return !1;
  }
  function mz() {
    var a = {};
    return function (b, c, d) {};
  }
  function nz() {
    var a = oz;
    return function (b, c, d) {
      var e = d && d.event;
      pz(c);
      var f = Gb(b, "__cvt_") ? void 0 : 1,
        g = new Ya();
      z(c, function (r, t) {
        var u = dd(t, void 0, f);
        u === void 0 && t !== void 0 && O(44);
        g.set(r, u);
      });
      a.j.j.D = Df();
      var k = {
        Bj: Sf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        te:
          e !== void 0
            ? function (r) {
                e.bc.te(r);
              }
            : void 0,
        cb: function () {
          return b;
        },
        log: function () {},
        xl: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        Fm: !!Rv(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (lz()) {
        var m = mz(),
          n,
          p;
        k.Ra = {
          Rh: [],
          ue: {},
          yb: function (r, t, u) {
            t === 1 && (n = r);
            t === 7 && (p = u);
            m(r, t, u);
          },
          Qf: bh(),
        };
        k.log = function (r) {
          var t = za.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: t });
        };
      }
      var q = Ce(a, k, [b, g]);
      a.j.j.D = void 0;
      q instanceof Ca && q.type === "return" && (q = q.data);
      return I(q, void 0, f);
    };
  }
  function pz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    ob(b) &&
      (a.gtmOnSuccess = function () {
        G(b);
      });
    ob(c) &&
      (a.gtmOnFailure = function () {
        G(c);
      });
  }
  function qz(a, b) {
    var c = this;
  }
  qz.T = "addConsentListener";
  var rz = !1;
  function sz(a) {
    for (var b = 0; b < a.length; ++b)
      if (rz)
        try {
          a[b]();
        } catch (c) {
          O(77);
        }
      else a[b]();
  }
  function tz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  tz.J = "internal.addDataLayerEventListener";
  function uz(a, b, c) {}
  uz.T = "addDocumentEventListener";
  function vz(a, b, c, d) {}
  vz.T = "addElementEventListener";
  function wz(a) {
    return a.F.j;
  }
  function xz(a) {}
  xz.T = "addEventCallback";
  function Nz(a) {}
  Nz.J = "internal.addFormAbandonmentListener";
  function Oz(a, b, c, d) {}
  Oz.J = "internal.addFormData";
  var Pz = {},
    Qz = [],
    Rz = {},
    Sz = 0,
    Tz = 0;
  function $z(a, b) {}
  $z.J = "internal.addFormInteractionListener";
  function gA(a, b) {}
  gA.J = "internal.addFormSubmitListener";
  function lA(a) {}
  lA.J = "internal.addGaSendListener";
  function mA(a) {
    if (!a) return {};
    var b = a.xl;
    return tw(b.type, b.index, b.name);
  }
  function nA(a) {
    return a ? { originatingEntity: mA(a) } : {};
  }
  var pA = function (a, b, c) {
      oA().updateZone(a, b, c);
    },
    rA = function (a, b, c, d, e, f) {
      var g = oA();
      c = c && Fb(c, qA);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Fj(), k)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (Gb(p, "GTM-"))
            ew(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var v = vx("js", Ab());
            ew(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: u };
            T(101) || Ex(v, q, w);
            Ex(wx(p, r), q, w);
          }
        }
      }
      return k;
    },
    oA = function () {
      var a = ii.zones;
      a || (a = ii.zones = new sA());
      return a;
    },
    tA = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    qA = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    sA = function () {
      this.j = {};
      this.D = {};
      this.H = 0;
    };
  ba = sA.prototype;
  ba.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Fh], b)) return !1;
    for (var e = 0; e < c.Ye.length; e++) if (this.D[c.Ye[e]].rd(b)) return !0;
    return !1;
  };
  ba.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Ye.length; f++) {
      var g = this.D[c.Ye[f]];
      g.rd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.Fh], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].Vl(m, n)) return !0;
      return !1;
    };
  };
  ba.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  ba.createZone = function (a, b) {
    var c = String(++this.H);
    this.D[c] = new uA(a, b);
    return c;
  };
  ba.updateZone = function (a, b, c) {
    var d = this.D[a];
    d && d.H(b, c);
  };
  ba.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && ii[a]) || (!d && Tj(a)) || (d && d.Fh !== b)) return !1;
    if (d) return d.Ye.push(c), !1;
    this.j[a] = { Fh: b, Ye: [c] };
    return !0;
  };
  var uA = function (a, b) {
    this.D = null;
    this.j = [{ eventId: a, rd: !0 }];
    if (b) {
      this.D = {};
      for (var c = 0; c < b.length; c++) this.D[b[c]] = !0;
    }
  };
  uA.prototype.H = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.rd !== b && this.j.push({ eventId: a, rd: b }));
  };
  uA.prototype.rd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].rd;
    return !1;
  };
  uA.prototype.Vl = function (a, b) {
    b = b || [];
    if (!this.D || tA[a] || this.D[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.D[b[c]]) return !0;
    return !1;
  };
  function vA(a) {
    var b = ii.zones;
    return b
      ? b.getIsAllowedFn(Aj(), a)
      : function () {
          return !0;
        };
  }
  function wA() {
    Uv(Hj(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = ii.zones;
      return c ? c.isActive(Aj(), b) : !0;
    });
    Sv(Hj(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return vA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var xA = function (a, b) {
    this.tagId = a;
    this.we = b;
  };
  function yA(a, b) {
    var c = this,
      d;
    var e = function (u) {
      Sv(
        u,
        function (v) {
          for (
            var w = Tv().getExternalRestrictions(0, Hj()),
              x = na(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(v)) return !1;
          }
          return !0;
        },
        !0
      );
      Uv(
        u,
        function (v) {
          for (
            var w = Tv().getExternalRestrictions(1, Hj()),
              x = na(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(v)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new xA(a, u));
    };
    J(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = I(b, this.F, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    sz([
      function () {
        return M(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (Uj(a)) return;
    } else if (Tj(a)) return;
    var q = 6,
      r = wz(this);
    n && (q = 7);
    r.cb() === "__zone" && (q = 1);
    var t = { source: q, fromContainerExecution: !0, siloed: p };
    m ? hw(a, g, t, e) : ew(a, g, !Gb(a, "GTM-"), t, e);
    k &&
      r.cb() === "__zone" &&
      rA(Number.MIN_SAFE_INTEGER, [a], null, {}, mA(wz(this)));
    d = p ? Cj(a) : a;
    return d;
  }
  yA.J = "internal.loadGoogleTag";
  function zA(a) {
    return new Wc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Wc)
        return new Wc("", function () {
          var d = za.apply(0, arguments),
            e = this,
            f = h(wz(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ia(this.F);
          k.j = f;
          return c.fb.apply(c, [k].concat(pa(g)));
        });
    });
  }
  function AA(a, b, c) {
    var d = this;
  }
  AA.J = "internal.addGoogleTagRestriction";
  var BA = {},
    CA = [];
  function JA(a, b) {}
  JA.J = "internal.addHistoryChangeListener";
  function KA(a, b, c) {}
  KA.T = "addWindowEventListener";
  function LA(a, b) {
    return !0;
  }
  LA.T = "aliasInWindow";
  function MA(a, b, c) {}
  MA.J = "internal.appendRemoteConfigParameter";
  function NA(a) {
    var b;
    return b;
  }
  NA.T = "callInWindow";
  function OA(a) {}
  OA.T = "callLater";
  function PA(a) {}
  PA.J = "callOnDomReady";
  function QA(a) {}
  QA.J = "callOnWindowLoad";
  function RA(a, b) {
    var c;
    return c;
  }
  RA.J = "internal.computeGtmParameter";
  function SA(a) {
    var b;
    return b;
  }
  SA.J = "internal.copyFromCrossContainerData";
  function TA(a, b) {
    var c;
    var d = dd(c, this.F, Gb(wz(this).cb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && O(45);
    return d;
  }
  TA.T = "copyFromDataLayer";
  function UA(a) {
    var b = void 0;
    return b;
  }
  UA.J = "internal.copyFromDataLayerCache";
  function VA(a) {
    var b;
    return b;
  }
  VA.T = "copyFromWindow";
  function WA(a) {
    var b = void 0;
    return dd(b, this.F, 1);
  }
  WA.J = "internal.copyKeyFromWindow";
  var XA = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.o = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = h(c.eventMetadata || {}, {});
  };
  XA.prototype.copyToHitData = function (a, b, c) {
    var d = U(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && l(d) && T(64))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.o[a] = d);
  };
  var Rs = function (a, b, c) {
    var d = Ur(a.target.destinationId);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function YA(a, b) {
    var c;
    return c;
  }
  YA.J = "internal.copyPreHit";
  function ZA(a, b) {
    var c = null;
    J(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    M(this, "access_globals", "readwrite", a);
    M(this, "access_globals", "readwrite", b);
    var d = [E, F],
      e = a.split("."),
      f = Ib(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !ob(k)) return null;
    if (k) return dd(k, this.F, 2);
    var m;
    k = function () {
      if (!ob(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = Ib(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return dd(c, this.F, 2);
  }
  ZA.T = "createArgumentsQueue";
  function $A(a) {
    return dd(
      function (c) {
        var d = Dw();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Dw(),
                n = m && m.getByName && m.getByName(f);
              return vm(E.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.F,
      1
    );
  }
  $A.J = "internal.createGaCommandQueue";
  function aB(a) {
    return dd(
      function () {
        if (!ob(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.F,
      Gb(wz(this).cb(), "__cvt_") ? 2 : 1
    );
  }
  aB.T = "createQueue";
  function bB(a, b) {
    var c = null;
    return c;
  }
  bB.J = "internal.createRegex";
  function cB() {
    var a = {};
    return a;
  }
  function dB(a) {}
  dB.J = "internal.declareConsentState";
  function eB(a) {
    var b = "";
    return b;
  }
  eB.J = "internal.decodeUrlHtmlEntities";
  function fB(a, b, c) {
    var d;
    return d;
  }
  fB.J = "internal.decorateUrlWithGaCookies";
  function gB() {}
  gB.J = "internal.deferCustomEvents";
  function hB(a) {
    var b;
    return b;
  }
  hB.J = "internal.detectUserProvidedData";
  function lB(a, b) {
    return b;
  }
  lB.J = "internal.enableAutoEventOnClick";
  function tB(a, b) {
    return b;
  }
  tB.J = "internal.enableAutoEventOnElementVisibility";
  function uB() {}
  uB.J = "internal.enableAutoEventOnError";
  var vB = {},
    wB = [],
    xB = {},
    yB = 0,
    zB = 0;
  function FB(a, b) {
    var c = this;
    return b;
  }
  FB.J = "internal.enableAutoEventOnFormInteraction";
  function KB(a, b) {
    var c = this;
    return b;
  }
  KB.J = "internal.enableAutoEventOnFormSubmit";
  function PB() {
    var a = this;
  }
  PB.J = "internal.enableAutoEventOnGaSend";
  var QB = {},
    RB = [];
  function YB(a, b) {
    var c = this;
    return b;
  }
  YB.J = "internal.enableAutoEventOnHistoryChange";
  var ZB = ["http://", "https://", "javascript:", "file://"];
  function cC(a, b) {
    var c = this;
    return b;
  }
  cC.J = "internal.enableAutoEventOnLinkClick";
  var dC, eC;
  function pC(a, b) {
    var c = this;
    return b;
  }
  pC.J = "internal.enableAutoEventOnScroll";
  function qC(a) {
    return function () {
      if (a.limit && a.Bh >= a.limit) a.Of && E.clearInterval(a.Of);
      else {
        a.Bh++;
        var b = Bb();
        my({
          event: a.eventName,
          "gtm.timerId": a.Of,
          "gtm.timerEventNumber": a.Bh,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Zj,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Zj,
          "gtm.triggers": a.Wm,
        });
      }
    };
  }
  function rC(a, b) {
    return b;
  }
  rC.J = "internal.enableAutoEventOnTimer";
  var hc = ja(["data-gtm-yt-inspected-"]),
    tC = ["www.youtube.com", "www.youtube-nocookie.com"],
    uC,
    vC = !1;
  function FC(a, b) {
    var c = this;
    return b;
  }
  FC.J = "internal.enableAutoEventOnYouTubeActivity";
  function GC(a, b) {
    J(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? I(b) : {},
      d = a,
      e = !1;
    return e;
  }
  GC.J = "internal.evaluateBooleanExpression";
  var HC;
  function IC(a) {
    var b = !1;
    return b;
  }
  IC.J = "internal.evaluateMatchingRules";
  function pD() {
    return yn(7) && yn(9) && yn(10);
  }
  function kE(a, b, c, d) {}
  kE.J = "internal.executeEventProcessor";
  function lE(a) {
    var b;
    J(this.getName(), ["javascript:!string"], arguments);
    M(this, "unsafe_run_arbitrary_javascript");
    try {
      var c = E.google_tag_manager;
      c && typeof c.e === "function" && (b = c.e(a));
    } catch (d) {}
    return dd(b, this.F, 1);
  }
  lE.J = "internal.executeJavascriptString";
  function mE(a) {
    var b;
    return b;
  }
  var nE = null;
  function oE() {
    var a = new Ya();
    M(this, "read_container_data"),
      T(41) && nE
        ? (a = nE)
        : (a.set("containerId", "GTM-TMHDF2L"),
          a.set("version", "11"),
          a.set("environmentName", ""),
          a.set("debugMode", Tf),
          a.set("previewMode", Uf.dk),
          a.set("environmentMode", Uf.sl),
          a.set("firstPartyServing", Di() || qi),
          a.set("containerUrl", rc),
          a.Ja(),
          T(41) && (nE = a));
    return a;
  }
  oE.T = "getContainerVersion";
  function pE(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  pE.T = "getCookieValues";
  function qE() {
    return Lk();
  }
  qE.J = "internal.getCountryCode";
  function rE() {
    var a = [];
    return dd(a);
  }
  rE.J = "internal.getDestinationIds";
  function sE(a, b) {
    var c = null;
    return c;
  }
  sE.J = "internal.getElementAttribute";
  function tE(a) {
    var b = null;
    return b;
  }
  tE.J = "internal.getElementById";
  function uE(a) {
    var b = "";
    return b;
  }
  uE.J = "internal.getElementInnerText";
  function vE(a, b) {
    var c = null;
    return c;
  }
  vE.J = "internal.getElementProperty";
  function wE(a) {
    var b;
    return b;
  }
  wE.J = "internal.getElementValue";
  function xE(a) {
    var b = 0;
    return b;
  }
  xE.J = "internal.getElementVisibilityRatio";
  function yE(a) {
    var b = null;
    return b;
  }
  yE.J = "internal.getElementsByCssSelector";
  function zE(a) {
    var b;
    J(this.getName(), ["keyPath:!string"], arguments);
    M(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = wz(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
            for (var u = r[t].split("."), v = 0; v < u.length; v++)
              n.push(u[v]), v !== u.length - 1 && n.push(m);
            t !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = na(n), A = y.next();
          !A.done;
          A = y.next()
        ) {
          var B = A.value;
          B === m
            ? (w.push(x), (x = ""))
            : (x = B === g ? x + "\\" : B === k ? x + "." : x + B);
        }
        x && w.push(x);
        for (var C = na(w), H = C.next(); !H.done; H = C.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[H.value];
        }
        c = f;
      } else c = void 0;
    }
    b = dd(c, this.F, 1);
    return b;
  }
  zE.J = "internal.getEventData";
  var AE = {};
  AE.enableAWFledge = T(27);
  AE.enableAdsConversionValidation = T(15);
  AE.enableAutoPiiOnPhoneAndAddress = T(26);
  AE.enableCachedEcommerceData = T(33);
  AE.enableCcdPreAutoPiiDetection = T(34);
  AE.enableCloudRecommentationsErrorLogging = T(35);
  AE.enableCloudRecommentationsSchemaIngestion = T(36);
  AE.enableCloudRetailInjectPurchaseMetadata = T(38);
  AE.enableCloudRetailLogging = T(37);
  AE.enableCloudRetailPageCategories = T(39);
  AE.enableConsentDisclosureActivity = T(40);
  AE.enableConversionMarkerPageViewRename = T(42);
  AE.enableDCFledge = T(46);
  AE.enableDecodeUri = T(64);
  AE.enableDeferAllEnhancedMeasurement = T(47);
  AE.enableDmaBlockDisclosure = T(50);
  AE.enableEuidAutoMode = T(55);
  AE.enableFormSkipValidation = T(60);
  AE.enableGtmEcModeFix = T(68);
  AE.enableUrlDecodeEventUsage = T(95);
  AE.enableZoneConfigInChildContainers = T(97);
  AE.useEnableAutoEventOnFormApis = T(106);
  AE.autoPiiEligible = Qk();
  function BE() {
    return dd(AE);
  }
  BE.J = "internal.getFlags";
  function CE() {
    return new ad(Vy);
  }
  CE.J = "internal.getHtmlId";
  function DE(a, b) {
    var c;
    return c;
  }
  DE.J = "internal.getProductSettingsParameter";
  function EE(a, b) {
    var c;
    return c;
  }
  EE.T = "getQueryParameters";
  function FE(a, b) {
    var c;
    return c;
  }
  FE.T = "getReferrerQueryParameters";
  function GE(a) {
    var b = "";
    return b;
  }
  GE.T = "getReferrerUrl";
  function HE() {
    return Mk();
  }
  HE.J = "internal.getRegionCode";
  function IE(a, b) {
    var c;
    return c;
  }
  IE.J = "internal.getRemoteConfigParameter";
  function JE(a) {
    var b = "";
    return b;
  }
  JE.T = "getUrl";
  function KE() {
    M(this, "get_user_agent");
    return oc.userAgent;
  }
  KE.J = "internal.getUserAgent";
  function SE() {
    return (E.gaGlobal = E.gaGlobal || {});
  }
  function TE() {
    var a = SE();
    a.hid = a.hid || sb();
    return a.hid;
  }
  function UE(a, b) {
    var c = SE();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function pF(a) {
    var b = T(61) && Di();
    if (Us(a) || b) a.o[P.g.Wi] = Mk() || Lk();
  }
  var FF = function (a) {
      this.H = a;
      this.j = "";
    },
    GF = function (a, b) {
      a.D = b;
      return a;
    },
    HF = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = na(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (K) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var t = p || [];
            if (Array.isArray(t))
              for (
                var u = Ta(q) ? q : {}, v = na(t), w = v.next();
                !w.done;
                w = v.next()
              )
                r(w.value, u);
          }
          var x = n.create_iframe,
            y = n.options,
            A = m.D;
          if (x && A) {
            var B = x || [];
            if (Array.isArray(B))
              for (
                var C = Ta(y) ? y : {}, H = na(B), D = H.next();
                !D.done;
                D = H.next()
              )
                A(D.value, C);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function IF(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var tG = window,
    uG = document,
    vG = function (a) {
      var b = tG._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        uG.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && tG["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = tG.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(uG.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return uG.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function GG(a) {
    z(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[P.g.ab] || {};
    z(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  var jH = function (a, b) {};
  function iH(a, b) {
    var c = function () {};
    return c;
  }
  function kH(a, b, c) {}
  var lH = iH;
  var mH = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function nH(a, b, c) {
    var d = this;
    J(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? I(b) : {};
    sz([
      function () {
        return M(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? I(c) : {},
      g = wz(this);
    f.originatingEntity = mA(g);
    Ex(wx(a, e), g.eventId, f);
  }
  nH.J = "internal.gtagConfig";
  function oH() {
    var a = {};
    return a;
  }
  function qH(a, b) {}
  qH.T = "gtagSet";
  function rH(a, b) {}
  rH.T = "injectHiddenIframe";
  var sH = iz();
  function tH(a, b, c, d, e) {}
  tH.J = "internal.injectHtml";
  var xH = {};
  var yH = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          xc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) G(g[k]);
              g.push = function (m) {
                G(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) G(g[k]);
              e[f] = null;
            },
            b
          ))
      : xc(a, c, d, b);
  };
  function zH(a, b, c, d) {
    if (!Vn()) {
      J(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      M(this, "inject_script", a);
      var e = this.F;
      yH(
        a,
        void 0,
        function () {
          b && b.fb(e);
        },
        function () {
          c && c.fb(e);
        },
        xH,
        d
      );
    }
  }
  var AH = { dl: 1, id: 1 },
    BH = {};
  function CH(a, b, c, d) {}
  zH.T = "injectScript";
  CH.J = "internal.injectScript";
  function DH(a) {
    var b = !0;
    return b;
  }
  DH.T = "isConsentGranted";
  function EH() {
    return Ok();
  }
  EH.J = "internal.isDmaRegion";
  function FH(a) {
    var b = !1;
    return b;
  }
  FH.J = "internal.isEntityInfrastructure";
  function GH() {
    var a = Xg(function (b) {
      wz(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function HH(a) {
    var b = void 0;
    return dd(b);
  }
  HH.J = "internal.legacyParseUrl";
  function IH() {
    return !1;
  }
  var JH = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function KH() {
    try {
      M(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = I(a[b], this.F);
    console.log.apply(console, a);
  }
  KH.T = "logToConsole";
  function LH(a, b) {}
  LH.J = "internal.mergeRemoteConfig";
  function MH(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return dd(d);
  }
  MH.J = "internal.parseCookieValuesFromString";
  function NH(a) {
    var b = void 0;
    return b;
  }
  NH.T = "parseUrl";
  function OH(a) {}
  OH.J = "internal.processAsNewEvent";
  function PH(a, b, c) {
    var d;
    return d;
  }
  PH.J = "internal.pushToDataLayer";
  function QH(a) {
    var b = !1;
    return b;
  }
  QH.T = "queryPermission";
  function RH() {
    var a = "";
    return a;
  }
  RH.T = "readCharacterSet";
  function SH() {
    return hi.hb;
  }
  SH.J = "internal.readDataLayerName";
  function TH() {
    var a = "";
    return a;
  }
  TH.T = "readTitle";
  function UH(a, b) {
    var c = this;
  }
  UH.J = "internal.registerCcdCallback";
  function VH(a) {
    return !0;
  }
  VH.J = "internal.registerDestination";
  var WH = ["config", "event", "get", "set"];
  function XH(a, b, c) {}
  XH.J = "internal.registerGtagCommandListener";
  function YH(a, b) {
    var c = !1;
    return c;
  }
  YH.J = "internal.removeDataLayerEventListener";
  function ZH(a, b) {}
  ZH.J = "internal.removeFormData";
  function $H() {}
  $H.T = "resetDataLayer";
  function aI(a, b, c, d) {}
  aI.J = "internal.sendGtagEvent";
  function bI(a, b, c) {}
  bI.T = "sendPixel";
  function cI(a, b) {}
  cI.J = "internal.setAnchorHref";
  function dI(a) {}
  dI.J = "internal.setContainerConsentDefaults";
  function eI(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  eI.T = "setCookie";
  function fI(a) {}
  fI.J = "internal.setCorePlatformServices";
  function gI(a, b) {}
  gI.J = "internal.setDataLayerValue";
  function hI(a) {}
  hI.T = "setDefaultConsentState";
  function iI(a, b) {}
  iI.J = "internal.setDelegatedConsentType";
  function jI(a, b) {}
  jI.J = "internal.setFormAction";
  function kI(a, b, c) {}
  kI.J = "internal.setInCrossContainerData";
  function lI(a, b, c) {
    J(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    M(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = Ib(d, [E, F]),
      f = d.pop();
    if (e && (e[f] === void 0 || c)) return (e[f] = I(b, this.F, 2)), !0;
    return !1;
  }
  lI.T = "setInWindow";
  function mI(a, b, c) {}
  mI.J = "internal.setProductSettingsParameter";
  function nI(a, b, c) {}
  nI.J = "internal.setRemoteConfigParameter";
  function oI(a, b, c, d) {
    var e = this;
  }
  oI.T = "sha256";
  function pI(a, b, c) {}
  pI.J = "internal.sortRemoteConfigParameters";
  function qI(a, b) {
    var c = void 0;
    return c;
  }
  qI.J = "internal.subscribeToCrossContainerData";
  var rI = {},
    sI = {};
  rI.getItem = function (a) {
    var b = null;
    return b;
  };
  rI.setItem = function (a, b) {};
  rI.removeItem = function (a) {};
  rI.clear = function () {};
  rI.T = "templateStorage";
  function tI(a, b) {
    var c = !1;
    return c;
  }
  tI.J = "internal.testRegex";
  function uI(a) {
    var b;
    return b;
  }
  function vI(a) {
    var b;
    return b;
  }
  vI.J = "internal.unsiloId";
  function wI(a, b) {
    var c;
    return c;
  }
  wI.J = "internal.unsubscribeFromCrossContainerData";
  function xI(a) {}
  xI.T = "updateConsentState";
  var yI;
  function zI(a, b, c) {
    yI = yI || new hh();
    yI.add(a, b, c);
  }
  function AI(a, b) {
    var c = (yI = yI || new hh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = ob(b) ? Eg(a, b) : Fg(a, b);
  }
  function BI() {
    return function (a) {
      var b;
      var c = yI;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.F.j;
          if (f) {
            var g = f.cb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var CI = function () {
    var a = function (c) {
        return AI(c.J, c);
      },
      b = function (c) {
        return zI(c.T, c);
      };
    b(qz);
    b(xz);
    b(LA);
    b(NA);
    b(OA);
    b(TA);
    b(VA);
    b(ZA);
    b(aB);
    b(oE);
    b(pE);
    b(EE);
    b(FE);
    b(GE);
    b(JE);
    b(qH);
    b(rH);
    b(zH);
    b(DH);
    b(KH);
    b(NH);
    b(QH);
    b(RH);
    b(TH);
    b(bI);
    b(eI);
    b(hI);
    b(lI);
    b(oI);
    b(rI);
    b(xI);
    b(GH());
    zI("Math", Jg());
    zI("Object", fh);
    zI("TestHelper", jh());
    zI("assertApi", Gg);
    zI("assertThat", Hg);
    zI("decodeUri", Lg);
    zI("decodeUriComponent", Mg);
    zI("encodeUri", Ng);
    zI("encodeUriComponent", Og);
    zI("fail", Tg);
    zI("generateRandom", Ug);
    zI("getTimestamp", Vg);
    zI("getTimestampMillis", Vg);
    zI("getType", Wg);
    zI("makeInteger", Yg);
    zI("makeNumber", Zg);
    zI("makeString", $g);
    zI("makeTableMap", ah);
    zI("mock", dh);
    zI("fromBase64", mE, !("atob" in E));
    zI("localStorage", JH, !IH());
    zI("toBase64", uI, !("btoa" in E));
    a(tz);
    a(Oz);
    a($z);
    a(gA);
    a(lA);
    a(AA);
    a(JA);
    a(MA);
    a(PA);
    a(QA);
    a(RA);
    a(SA);
    a(UA);
    a(WA);
    a(YA);
    a($A);
    a(bB);
    a(dB);
    a(eB);
    a(fB);
    a(gB);
    a(hB);
    a(lB);
    a(tB);
    a(uB);
    a(FB);
    a(KB);
    a(PB);
    a(YB);
    a(cC);
    a(pC);
    a(rC);
    a(FC);
    a(GC);
    a(IC);
    a(kE);
    a(lE);
    a(qE);
    a(rE);
    a(sE);
    a(tE);
    a(uE);
    a(vE);
    a(wE);
    a(xE);
    a(yE);
    a(zE);
    a(BE);
    a(CE);
    a(DE);
    a(HE);
    a(IE);
    a(nH);
    a(tH);
    a(CH);
    a(EH);
    a(FH);
    a(HH);
    a(yA);
    a(LH);
    a(MH);
    a(OH);
    a(PH);
    a(SH);
    a(UH);
    a(VH);
    a(XH);
    a(YH);
    a(ZH);
    a(aI);
    a(cI);
    a(dI);
    a(fI);
    a(gI);
    a(iI);
    a(jI);
    a(kI);
    a(mI);
    a(nI);
    a(pI);
    a(qI);
    a(tI);
    a(vI);
    a(wI);
    AI("internal.CrossContainerSchema", cB());
    AI("internal.GtagSchema", oH());
    zI("mockObject", eh);
    return BI();
  };
  var oz;
  function DI() {
    oz.j.j.H = function (a, b, c) {
      ii.SANDBOXED_JS_SEMAPHORE = ii.SANDBOXED_JS_SEMAPHORE || 0;
      ii.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        ii.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function EI(a) {
    a &&
      z(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          yi[e] = yi[e] || [];
          yi[e].push(b);
        }
      });
  }
  var FI = encodeURI,
    X = encodeURIComponent,
    GI = Array.isArray,
    HI = function (a, b, c) {
      Ac(a, b, c);
    },
    II = function (a, b) {
      if (!a) return !1;
      var c = Vi(aj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          f > 0 && e.charAt(0) != "." && (f--, (e = "." + e));
          if (f >= 0 && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    JI = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var SI = E.clearTimeout,
    TI = E.setTimeout;
  function UI(a, b, c) {
    if (Vn()) {
      b && G(b);
    } else return xc(a, b, c);
  }
  function VI() {
    return E.location.href;
  }
  function WI(a, b) {
    return Ji(a, b || 2);
  }
  function XI(a, b) {
    E[a] = b;
  }
  function YI(a, b, c) {
    b && (E[a] === void 0 || (c && !E[a])) && (E[a] = b);
    return E[a];
  }
  function ZI(a, b) {
    if (Vn()) {
      b && G(b);
    } else zc(a, b);
  }
  var $I = {};
  var Y = { securityGroups: {} };
  (Y.securityGroups.f = ["google"]),
    (Y.__f = function (a) {
      var b = WI("gtm.referrer", 1) || F.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? Vi(
              aj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Yi(aj(String(b)))
        : String(b);
    }),
    (Y.__f.C = "f"),
    (Y.__f.isVendorTemplate = !0),
    (Y.__f.priorityOverride = 0),
    (Y.__f.isInfrastructure = !0),
    (Y.__f.runInSiloedMode = !1);

  (Y.securityGroups.k = ["google"]),
    (Y.__k = function (a) {
      var b = a.vtp_name,
        c = WI("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return ho(b, c, d === void 0 ? !0 : !!d)[0];
    }),
    (Y.__k.C = "k"),
    (Y.__k.isVendorTemplate = !0),
    (Y.__k.priorityOverride = 0),
    (Y.__k.isInfrastructure = !0),
    (Y.__k.runInSiloedMode = !1);
  (Y.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Y.__access_globals = b;
        Y.__access_globals.C = "access_globals";
        Y.__access_globals.isVendorTemplate = !0;
        Y.__access_globals.priorityOverride = 0;
        Y.__access_globals.isInfrastructure = !1;
        Y.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!l(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          N: a,
        };
      });
    })();
  (Y.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.C = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !0;
        Y.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : WI("gtm.url", 1)) || VI();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Yi(aj(String(c)));
        var e = aj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = Vi(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Vi(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Y.securityGroups.v = ["google"]),
    (Y.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = WI(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Y.__v.C = "v"),
    (Y.__v.isVendorTemplate = !0),
    (Y.__v.priorityOverride = 0),
    (Y.__v.isInfrastructure = !0),
    (Y.__v.runInSiloedMode = !1);

  (Y.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Y.__read_event_data = b;
        Y.__read_event_data.C = "read_event_data";
        Y.__read_event_data.isVendorTemplate = !0;
        Y.__read_event_data.priorityOverride = 0;
        Y.__read_event_data.isInfrastructure = !1;
        Y.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !l(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && ig(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          N: a,
        };
      });
    })();

  (Y.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (u, v) {
            m[u] = m[u] || v;
          },
          p = function (u, v, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (u) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < u.length; x = { Qe: void 0 }, y++)
                (x.Qe = {}),
                  z(
                    u[y],
                    (function (B) {
                      return function (C, H) {
                        w && C === "id"
                          ? (B.Qe.promotion_id = H)
                          : w && C === "name"
                          ? (B.Qe.promotion_name = H)
                          : (B.Qe[C] = H);
                      };
                    })(x)
                  ),
                  m.items.push(x.Qe);
            }
            if (v)
              for (var A in v) d.hasOwnProperty(A) ? n(d[A], v[A]) : n(A, v[A]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Ta(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Ta(q)) {
          var r = !1,
            t;
          for (t in q)
            q.hasOwnProperty(t) &&
              (r || (c.push(5), (r = !0)),
              t === "currencyCode"
                ? n("currency", q.currencyCode)
                : t === "impressions" && g === P.g.ib
                ? p(q.impressions, null)
                : t === "promoClick" && g === P.g.Eb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : t === "promoView" && g === P.g.jb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(t)
                ? g === e[t] && p(q[t].products, q[t].actionField)
                : (m[t] = q[t]));
          h(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Y.__gaawe = f;
        Y.__gaawe.C = "gaawe";
        Y.__gaawe.isVendorTemplate = !0;
        Y.__gaawe.priorityOverride = 0;
        Y.__gaawe.isInfrastructure = !1;
        Y.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (l(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (Uh.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = JI(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var t = JI(f.vtp_eventParameters, "name", "value"),
            u;
          for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
          var v = f.vtp_userDataVariable;
          v && (m[P.g.Ca] = v);
          if (m.hasOwnProperty(P.g.ab) || f.vtp_userProperties) {
            var w = m[P.g.ab] || {};
            h(JI(f.vtp_userProperties, "name", "value"), w);
            m[P.g.ab] = w;
          }
          var x = {
            originatingEntity: tw(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, Vh, function (B) {
            return xb(B);
          });
          a(m, Xh, function (B) {
            return Number(B);
          });
          var A = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          Ex(xx(g, k, m), A, x);
          G(f.vtp_gtmOnSuccess);
        } else G(f.vtp_gtmOnFailure);
      });
    })();

  (Y.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Y.__load_google_tags = b;
        Y.__load_google_tags.C = "load_google_tags";
        Y.__load_google_tags.isVendorTemplate = !0;
        Y.__load_google_tags.priorityOverride = 0;
        Y.__load_google_tags.isInfrastructure = !1;
        Y.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!l(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!l(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (zg(aj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          N: a,
        };
      });
    })();
  (Y.securityGroups.read_container_data = ["google"]),
    (Y.__read_container_data = function () {
      return {
        assert: function () {},
        N: function () {
          return {};
        },
      };
    }),
    (Y.__read_container_data.C = "read_container_data"),
    (Y.__read_container_data.isVendorTemplate = !0),
    (Y.__read_container_data.priorityOverride = 0),
    (Y.__read_container_data.isInfrastructure = !1),
    (Y.__read_container_data.runInSiloedMode = !1);

  (Y.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Y.__inject_script = b;
        Y.__inject_script.C = "inject_script";
        Y.__inject_script.isVendorTemplate = !0;
        Y.__inject_script.priorityOverride = 0;
        Y.__inject_script.isInfrastructure = !1;
        Y.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!l(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (zg(aj(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          N: a,
        };
      });
    })();
  (Y.securityGroups.unsafe_run_arbitrary_javascript = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__unsafe_run_arbitrary_javascript = b;
        Y.__unsafe_run_arbitrary_javascript.C =
          "unsafe_run_arbitrary_javascript";
        Y.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
        Y.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
        Y.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
        Y.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, N: a };
      });
    })();

  (Y.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__logging = b;
        Y.__logging.C = "logging";
        Y.__logging.isVendorTemplate = !0;
        Y.__logging.priorityOverride = 0;
        Y.__logging.isInfrastructure = !1;
        Y.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          N: a,
        };
      });
    })();

  (Y.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Y.__configure_google_tags = b;
        Y.__configure_google_tags.C = "configure_google_tags";
        Y.__configure_google_tags.isVendorTemplate = !0;
        Y.__configure_google_tags.priorityOverride = 0;
        Y.__configure_google_tags.isInfrastructure = !1;
        Y.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          N: a,
        };
      });
    })();

  var aJ = {};
  (aJ.onHtmlSuccess = az(!0)), (aJ.onHtmlFailure = az(!1));
  aJ.dataLayer = Ki;
  aJ.callback = function (a) {
    xi.hasOwnProperty(a) && ob(xi[a]) && xi[a]();
    delete xi[a];
  };
  aJ.bootstrap = 0;
  aJ._spx = !1;
  function bJ() {
    ii[Fj()] = ii[Fj()] || aJ;
    Sj();
    Wj() ||
      z(Xj(), function (d, e) {
        hw(d, e.transportUrl, e.context);
        O(92);
      });
    Eb(yi, Y.securityGroups);
    var a = Jj(Kj()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || O(142);
    Xy(),
      pf({
        Yl: function (d) {
          return d === Vy;
        },
        nl: function (d) {
          return new Yy(d);
        },
        Zl: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        zm: function (d) {
          var e;
          if (d === Vy) e = d;
          else {
            var f = zi();
            Wy[f] = d;
            e = 'google_tag_manager["rm"]["' + Hj() + '"](' + f + ")";
          }
          return e;
        },
      });
    rf = If;
  }
  var cJ = !1;
  (function (a) {
    function b() {
      n = F.documentElement.getAttribute("data-tag-assistant-present");
      xy(n) && (m = k.aj);
    }
    function c() {
      m && rc ? g(m) : a();
    }
    if (!E["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (F.referrer) {
        var e = aj(F.referrer);
        d = Xi(e, "host") === "cct.google";
      }
      if (!d) {
        var f = ho("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((E["__TAGGY_INSTALLED"] = !0),
        xc("https://cct.google/taggy/agent.js"));
    }
    var g = function (u) {
        var v = "GTM",
          w = "GTM";
        oi && ((v = "OGT"), (w = "GTAG"));
        var x = E["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (E["google.tagmanager.debugui2.queue"] = x),
          xc(
            "https://" +
              hi.Cd +
              "/debug/bootstrap?id=" +
              Of.ctid +
              "&src=" +
              w +
              "&cond=" +
              u +
              "&gtm=" +
              Xn()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: rc,
            containerProduct: v,
            debug: !1,
            id: Of.ctid,
            targetRef: { ctid: Of.ctid, isDestination: yj.ke },
            aliases: Bj(),
            destinations: Ej(),
          },
        };
        y.data.resume = function () {
          a();
        };
        hi.mk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { Gk: 1, cj: 2, qj: 3, fi: 4, aj: 5 };
    k[k.Gk] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.cj] = "GTM_DEBUG_PARAM";
    k[k.qj] = "REFERRER";
    k[k.fi] = "COOKIE";
    k[k.aj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = Vi(E.location, "query", !1, void 0, "gtm_debug");
    xy(p) && (m = k.cj);
    if (!m && F.referrer) {
      var q = aj(F.referrer);
      Xi(q, "host") === "tagassistant.google.com" && (m = k.qj);
    }
    if (!m) {
      var r = ho("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.fi);
    }
    m || b();
    if (!m && yy(n)) {
      var t = !1;
      Cc(
        F,
        "TADebugSignal",
        function () {
          t || ((t = !0), b(), c());
        },
        !1
      );
      E.setTimeout(function () {
        t || ((t = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = !T(56))) {
        var b;
        if (!(b = cJ)) {
          var c;
          a: {
            for (
              var d = wj().injectedFirstPartyContainers,
                e = na(Aj()),
                f = e.next();
              !f.done;
              f = e.next()
            )
              if (d[f.value]) {
                c = !0;
                break a;
              }
            c = !1;
          }
          b = !c;
        }
        a = b;
      }
      if (a) {
        Qj();
        if (T(70)) {
        }
        kb[12] = !0;
        rn();
        el();
        var g = Hj();
        if (wj().canonical[g]) {
          var k = ii.zones;
          k && k.unregisterChild(Aj());
          Tv().removeExternalRestrictions(Hj());
        } else {
          Et();
          a: {
          }
          Bi.j = "0";
          Bi.M = "";
          Bi.Pa =
            "ad_storage|analytics_storage|ad_user_data|ad_personalization";
          Bi.Z = "ad_storage|analytics_storage|ad_user_data";
          Bi.vb = "";
          Bi.R = "48q0";
          Bi.R = "48s0";
          dw();
          for (
            var m = data.resource || {}, n = m.macros || [], p = 0;
            p < n.length;
            p++
          )
            gf.push(n[p]);
          for (var q = m.tags || [], r = 0; r < q.length; r++) kf.push(q[r]);
          for (var t = m.predicates || [], u = 0; u < t.length; u++)
            jf.push(t[u]);
          for (var v = m.rules || [], w = 0; w < v.length; w++) {
            for (var x = v[w], y = {}, A = 0; A < x.length; A++) {
              var B = x[A][0];
              y[B] = Array.prototype.slice.call(x[A], 1);
              (B !== "if" && B !== "unless") || qf(y[B]);
            }
            hf.push(y);
          }
          mf = Y;
          nf = cz;
          Kf = new Rf();
          var C = data.sandboxed_scripts,
            H = data.security_groups;
          a: {
            var D = data.runtime || [],
              K = data.runtime_lines;
            oz = new Ae();
            DI();
            ff = nz();
            var N = oz,
              L = CI(),
              S = new Wc("require", L);
            S.Ja();
            N.j.j.set("require", S);
            for (var V = [], Z = 0; Z < D.length; Z++) {
              var aa = D[Z];
              if (!Array.isArray(aa) || aa.length < 3) {
                if (aa.length === 0) continue;
                break a;
              }
              K && K[Z] && K[Z].length && Bf(aa, K[Z]);
              try {
                oz.execute(aa), T(79) && pj && aa[0] === 50 && V.push(aa[1]);
              } catch (Ln) {}
            }
            T(79) && (sf = V);
          }
          if (C && C.length)
            for (var R = ["sandboxedScripts"], ma = 0; ma < C.length; ma++) {
              var la = C[ma].replace(/^_*/, "");
              yi[la] = R;
            }
          EI(H);
          bJ();
          if (!si)
            for (
              var ha = Ok() ? Ei(Bi.Z) : Ei(Bi.Pa), xa = 0;
              xa < Sk.length;
              xa++
            ) {
              var Oa = Sk[xa],
                Ea = Oa,
                Sa = ha[Oa] ? "granted" : "denied";
              nk().implicit(Ea, Sa);
            }
          wy();
          mw = !1;
          nw = 0;
          if (
            (F.readyState === "interactive" && !F.createEventObject) ||
            F.readyState === "complete"
          )
            pw();
          else {
            Cc(F, "DOMContentLoaded", pw);
            Cc(F, "readystatechange", pw);
            if (F.createEventObject && F.documentElement.doScroll) {
              var $a = !0;
              try {
                $a = !E.frameElement;
              } catch (Ln) {}
              $a && qw();
            }
            Cc(E, "load", pw);
          }
          by = !1;
          F.readyState === "complete" ? dy() : Cc(E, "load", dy);
          pj &&
            (Tl(fm),
            E.setInterval(em, 864e5),
            Tl(fz),
            Tl(Qw),
            Tl(Gu),
            Tl(im),
            Tl(kz),
            Tl(ax),
            Tl(rt),
            T(79) && (Tl(Vw), Tl(Ww), Tl(Xw)));
          if (qj) {
            mk();
            zl();
            lw();
            var td;
            var ud = Jj(Kj());
            if (ud) {
              for (; ud.parent; ) {
                var yx = Jj(ud.parent);
                if (!yx) break;
                ud = yx;
              }
              td = ud;
            } else td = void 0;
            var Pe = td;
            if (!Pe) O(144);
            else if (Pe.canonicalContainerId) {
              var Mn;
              a: {
                if (Pe.scriptSource) {
                  var Lj;
                  try {
                    var zx;
                    Lj =
                      (zx = Pc()) == null
                        ? void 0
                        : zx.getEntriesByType("resource");
                  } catch (Ln) {}
                  if (Lj) {
                    for (var Nn = {}, Mj = 0; Mj < Lj.length; ++Mj) {
                      var Ax = Lj[Mj],
                        On = Ax.initiatorType;
                      if (On === "script" && Ax.name === Pe.scriptSource) {
                        Mn = { Gm: Mj, Hm: Nn };
                        break a;
                      }
                      Nn[On] = 1 + (Nn[On] || 0);
                    }
                    O(146);
                  } else O(145);
                }
                Mn = void 0;
              }
              var Pn = Mn;
              Pn &&
                (ek("rtg", String(Pe.canonicalContainerId)),
                ek("rlo", String(Pn.Gm)),
                ek("slo", String(Pn.Hm.script || "0")),
                ek("hlo", Pe.htmlLoadOrder || "-1"),
                ek("lst", String(Pe.loadScriptType || "0")));
            }
            var Qn;
            var Nj = Ij();
            if (Nj) {
              var Bx;
              Qn =
                Nj.canonicalContainerId ||
                "_" +
                  (Nj.scriptContainerId ||
                    ((Bx = Nj.destinations) == null ? void 0 : Bx[0]));
            } else Qn = void 0;
            var Cx = Qn;
            Cx && ek("pcid", Cx);
            T(32) &&
              (ek("bt", String(Bi.H ? 2 : qi ? 1 : 0)),
              ek("ct", String(Bi.H ? 0 : qi ? 1 : Vn() ? 2 : 3)));
          }
          Ty();
          Jk(1);
          wA();
          wi = Bb();
          aJ.bootstrap = wi;
          if (T(70)) {
          }
        }
      }
    } catch (Ln) {
      if ((Jk(4), pj)) {
        var dJ = $l(!0, !0);
        Ac(dJ);
      }
    }
  });
})();
