var a, c;
"undefined" == typeof Optanon && (Optanon = OneTrust = {});
(function() {
    function J() {
        var b = [],
            d;
        for (d = 0; d < p.length; d += 1) va(p[d], ":1") && da(p[d].replace(":1", "")) && b.push(p[d].replace(":1", ""));
        d = "," + b.toString().toLowerCase() + ",";
        window.OnetrustActiveGroups = d;
        window.OptanonActiveGroups = d;
        "undefined" != typeof dataLayer ? dataLayer.constructor === Array && (dataLayer.push({
            OnetrustActiveGroups: d
        }), dataLayer.push({
            OptanonActiveGroups: d
        }), dataLayer.push({
            "event": "CookiePreferencesLoaded"
        })) : (window.dataLayer = [{
            event: "OptanonLoaded",
            OnetrustActiveGroups: d
        }], window.dataLayer = [{
            event: "OptanonLoaded",
            OptanonActiveGroups: d
        }]);
        setTimeout(function() {
            var d = new CustomEvent("consent.onetrust", {
                detail: b
            });
            window.dispatchEvent(d)
        })
    }

    function D(b) {
        z("OptanonConsent", "landingPath", b)
    }

    function wa(b) {
        if(!isJqueryLoaded()) {
            var d = document.createElement("script"),
                g;
            null != b && "undefined" != typeof b && (g = !1, d.onload = d.onreadystatechange = function() {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, b())
            });
            d.type = "text/javascript";
            d.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
            document.getElementsByTagName("head")[0].appendChild(d);
        } else {
            b();
        }
    }

    function isJqueryLoaded () {
        if (window.jQuery) {
            var version = window.jQuery.fn.jquery.split('.');
            return parseFloat(version[0] + "." + version[1]) >= 1.10;
        } else {
            return false;
        }
    }

    function xa() {
        q();
        e = jQuery;
        e(window).on("load", Optanon.LoadBanner);
        e(window).one("otloadbanner", function() {
            K();
            var b, d = q(),
                g, f, h;
            ea(d);
            e("body").append('\x3cdiv id\x3d"optanon" class\x3d"modern"\x3e\x3c/div\x3e');
            b = '\x3cdiv id\x3d"optanon-popup-bg"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-wrapper" role\x3d"dialog" aria-modal\x3d"true" tabindex\x3d"-1"\x3e\x3cdiv id\x3d"optanon-popup-top"\x3e';
            d.ShowPreferenceCenterCloseButton && (b = b + '\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Close Button\');" class\x3d"optanon-close-link optanon-close optanon-close-ui" title\x3d"Close Preference Centre"\x3e\x3cdiv id\x3d"optanon-close" style\x3d"background: url(' +
                L("https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_white/v2/images/optanon-pop-up-close.png") + ');width:34px;height:34px;"\x3e\x3c/div\x3e\x3c/a\x3e');
            b = b + '\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-body"\x3e\x3cdiv id\x3d"optanon-popup-body-left"\x3e\x3cdiv id\x3d"optanon-popup-body-left-shading"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-branding-top-logo" style\x3d"background-image: url(' + L("https://optanon.blob.core.windows.net/logos/117/117:www.wevideo.com/WeVideoBlueLogo.png") +
                ') !important;"\x3e\x3c/div\x3e\x3cul id\x3d"optanon-menu"\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
            e("#optanon").html(b);
            d.Language && d.Language.Culture && e("#optanon-popup-wrapper").attr("lang", d.Language.Culture);
            for (h = 0; h < d.Groups.length; h += 1)
                if (b = d.Groups[h], u(b) == A || b && null == b.Parent && w(b)) {
                    g = u(b) == A;
                    f = -1 != e.inArray(r(b) + ":1", p);
                    g = e('\x3cli class\x3d"menu-item-necessary ' + (g || f ? "menu-item-on" : "menu-item-off") + '" title\x3d"' + u(b) + '"\x3e\x3cp\x3e\x3ca href\x3d"#"\x3e' + u(b) +
                        "\x3c/a\x3e\x3c/p\x3e\x3c/li\x3e");
                    u(b) == A && g.removeClass("menu-item-necessary").addClass("menu-item-about");
                    switch (b.OptanonGroupId) {
                        case 2:
                            g.removeClass("menu-item-necessary").addClass("menu-item-performance");
                            break;
                        case 3:
                            g.removeClass("menu-item-necessary").addClass("menu-item-functional");
                            break;
                        case 4:
                            g.removeClass("menu-item-necessary").addClass("menu-item-advertising");
                            break;
                        case 8:
                            g.removeClass("menu-item-necessary").addClass("menu-item-social")
                    }
                    g.data("group", b);
                    g.data("optanonGroupId", r(b));
                    g.click(ya);
                    e("#optanon #optanon-menu").append(g)
                }
            b = e('\x3cli class\x3d"menu-item-moreinfo menu-item-off" title\x3d"' + d.AboutText + '"\x3e\x3cp\x3e\x3ca target\x3d"_blank" href\x3d"' + d.AboutLink + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');\"\x3e" + d.AboutText + "\x3c/a\x3e\x3c/p\x3e\x3c/li\x3e");
            e("#optanon #optanon-menu").append(b);
            e("#optanon #optanon-popup-body").append('\x3cdiv id\x3d"optanon-popup-body-right"\x3e\x3ch2 aria-label\x3d"true"\x3e' +
                d.MainText + '\x3c/h2\x3e\x3ch3\x3e\x3c/h3\x3e\x3cdiv id\x3d"optanon-popup-more-info-bar"\x3e\x3cdiv class\x3d"optanon-status"\x3e' + za(d, "chkMain") + ('\x3cdiv class\x3d"optanon-status-always-active optanon-status-on"\x3e\x3cp\x3e' + d.AlwaysActiveText + "\x3c/p\x3e\x3c/div\x3e") + '\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-main-info-text"\x3e\x3c/div\x3e' + (d.IsIABEnabled && d.VendorLevelOptOut ? '\x3cdiv id\x3d"optanon-vendor-consent-text"\x3eView Vendor Consent\x3c/div\x3e' : "") + '\x3c/div\x3e\x3cdiv class\x3d"optanon-bottom-spacer"\x3e\x3c/div\x3e');
            e("#optanon #optanon-popup-wrapper").append('\x3cdiv id\x3d"optanon-popup-bottom"\x3e \x3ca href\x3d"https://onetrust.com/poweredbyonetrust" target\x3d"_blank"\x3e\x3cdiv id\x3d"optanon-popup-bottom-logo" style\x3d"background: url(' + L("https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_white/v2/images/cookie-collective-top-bottom.png") + ');width:155px;height:35px;" title\x3d"powered by OneTrust"\x3e\x3c/div\x3e\x3c/a\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle" \x3e\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Save Settings\');"\x3e' +
                d.AllowAllText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-allow-all-button optanon-allow-all"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle" style\x3d"display: none;" \x3e\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Allow All\');"\x3e' + d.ConfirmText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
            U();
            Aa();
            d = q();
            b = '\x3cdiv class\x3d"optanon-alert-box-wrapper  " style\x3d"display:none"\x3e\x3cdiv class\x3d"optanon-alert-box-bottom-top"\x3e';
            d.showBannerCloseButton && (b += '\x3cdiv class\x3d"optanon-alert-box-corner-close"\x3e\x3ca class\x3d"optanon-alert-box-close" href\x3d"#" title\x3d"Close Banner" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Close Button\');"\x3e\x3c/a\x3e\x3c/div\x3e');
            b += '\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-bg"\x3e\x3cdiv class\x3d"optanon-alert-box-logo"\x3e \x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-body"\x3e';
            d.BannerTitle && (b = b + '\x3cp class\x3d"optanon-alert-box-title"\x3e' + d.BannerTitle + "\x3c/p\x3e");
            b = b + "\x3cp\x3e" + d.AlertNoticeText + '\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button-container"\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-close"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-alert-box-close" href\x3d"#"\x3e' + d.AlertCloseText + '\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e' +
                '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-more"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-toggle-display" href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Open Preferences\');"\x3e' + d.AlertMoreInfoText + '\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix optanon-alert-box-bottom-padding"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
            e("body").append(b);
            Ba();
            if (0 < e(".optanon-show-settings").length && (e(".optanon-show-settings").attr("href", "#"), e(".optanon-show-settings").wrap('\x3cdiv class\x3d"optanon-show-settings-popup-wrapper"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-button"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-middle"\x3e'), e(".optanon-show-settings-middle").before('\x3cdiv class\x3d"optanon-show-settings-left"\x3e\x3c/div\x3e'), e(".optanon-show-settings-middle").after('\x3cdiv class\x3d"optanon-show-settings-right"\x3e\x3c/div\x3e'),
                    e(".optanon-show-settings-button").addClass("optanon-toggle-display"), Ca(), d = q(), !("ontouchstart" in window || navigator.msMaxTouchPoints || t("OptanonConsent", "dnt") || t("OptanonConsent", "groups"))))
                for (b = 0; b < d.Groups.length; b += 1)
                    if (h = d.Groups[b], w(h) && (h = "do not track" == v(h).toLowerCase() && M)) {
                        d = e(".optanon-show-settings-button").first();
                        fa(d);
                        e("#optanon-show-settings-popup").fadeIn(800);
                        ha(d);
                        ia(d);
                        N = !0;
                        setTimeout(Da, 4E3);
                        z("OptanonConsent", "dnt", "true");
                        break
                    }
            0 < e("#optanon-cookie-policy").length &&
                Ea();
            O();
            t("OptanonConsent", "groups") || B("OptanonConsent")
        });
        ja && Optanon.LoadBanner()
    }

    function K() {
        e("script").filter(function() {
            return e(this).attr("type") && "text/plain" == e(this).attr("type").toLowerCase() && e(this).attr("class") && e(this).attr("class").toLowerCase().match(/optanon-category-[0-9]+($|\s)/)
        }).each(function() {
            var b = e(this).attr("class").toLowerCase().split("optanon-category-")[1];
            P(b, !1) && e(this).replaceWith(e(this).attr("type", "text/javascript")[0].outerHTML)
        })
    }

    function za(b, d) {
        return '\x3cdiv class\x3d"optanon-status-editable"\x3e\x3cform\x3e\x3cfieldset\x3e\x3cp\x3e\x3cinput type\x3d"checkbox" value\x3d"check" id\x3d"' +
            d + '" checked class\x3d"optanon-status-checkbox" /\x3e\x3clabel for\x3d"' + d + '"\x3e' + b.ActiveText + "\x3c/label\x3e\x3c/p\x3e\x3c/fieldset\x3e\x3c/form\x3e\x3c/div\x3e"
    }

    function ya() {
        var b = q(),
            d = e(this).data("group");
        V(d);
        ea(b);
        e("#optanon #optanon-menu li").removeClass("menu-item-selected");
        e(this).addClass("menu-item-selected");
        e("#optanon h3").text(u(d));
        e("#optanon #optanon-main-info-text").html(Q(d));
        if (d && !b.HideToolbarCookieList) {
            var g = q(),
                f = e('\x3cdiv class\x3d"optanon-cookie-list"\x3e\x3c/div\x3e'),
                h, m = V(d),
                n, x, y;
            (d.Cookies && 0 < d.Cookies.length || m && 0 < m.length) && f.append('\x3cdiv class\x3d"optanon-cookies-used"\x3e' + g.CookiesUsedText + "\x3c/div\x3e");
            if (d.Cookies && 0 < d.Cookies.length) {
                y = e('\x3cp class\x3d"optanon-group-cookies-list"\x3e\x3c/p\x3e');
                for (g = 0; g < d.Cookies.length; g += 1) n = d.Cookies[g], n = ka(n), y.append(n + (g < d.Cookies.length - 1 ? ", " : ""));
                f.append(y)
            }
            if (m && 0 < m.length)
                for (g = 0; g < m.length; g += 1) {
                    y = e('\x3cp class\x3d"optanon-subgroup-cookies-list"\x3e\x3c/p\x3e');
                    h = la(m[g]);
                    n = Q(m[g]);
                    y.append('\x3cspan class\x3d"optanon-subgroup-header"\x3e' +
                        h + ": \x3c/span\x3e");
                    var t = e('\x3cdiv class\x3d"optanon-subgroup-cookies"\x3e\x3c/div\x3e');
                    for (h = 0; h < m[g].Cookies.length; h += 1) x = m[g].Cookies[h], t.append(x.Name + (h < m[g].Cookies.length - 1 ? ", " : ""));
                    y.append(t);
                    n && y.append('\x3cdiv class\x3d"optanon-subgroup-description"\x3e' + n + "\x3c/div\x3e");
                    f.append(y)
                }
            e("#optanon #optanon-main-info-text").append(f)
        }
        "always active" == v(d).toLowerCase() || "always active" == v(d.Parent).toLowerCase() ? (e("#optanon .optanon-status-always-active").show(), e("#optanon .optanon-status-editable").hide()) :
            (e("#optanon .optanon-status-editable").show(), e("#optanon .optanon-status-always-active").hide(), f = -1 != e.inArray(r(d) + ":1", p), m = e(d && null == d.Parent ? "#chkMain" : "#optanon #chk" + r(d)), f ? (m.prop("checked", !0), m.parent().addClass("optanon-status-on"), m.next("label").text(b.ActiveText)) : (m.prop("checked", !1), m.parent().removeClass("optanon-status-on"), b.InactiveText && m.next("label").text(b.InactiveText)));
        u(d) == A ? e("#optanon #optanon-popup-more-info-bar").hide() : e("#optanon #optanon-popup-more-info-bar").show();
        return !1
    }

    function Aa() {
        var b = q();
        e(document).on("click", ".optanon-close-consent", function() {
            Optanon.Close();
            ma(!0, !0);
            return !1
        });
        e(document).on("click", ".optanon-close-ui", function() {
            E();
            return !1
        });
        e(document).on("click", ".optanon-toggle-display", function() {
            Optanon.ToggleInfoDisplay();
            return !1
        });
        e(document).on("click", ".optanon-allow-all", function() {
            Optanon.AllowAll();
            ma(!0, !0);
            return !1
        });
        e(document).on("keydown", "#optanon", function(b) {
            27 == b.keyCode && E()
        });
        e("#optanon").on("change", ".optanon-status-checkbox",
            function() {
                var d = e(this).data("group") || e("#optanon #optanon-menu li.menu-item-selected").data("group");
                e(this).is(":checked") ? Fa(b, d, this) : Ga(b, d, this);
                U()
            })
    }

    function r(b) {
        return 0 == b.OptanonGroupId ? b.OptanonGroupId + "_" + b.GroupId : b.OptanonGroupId
    }

    function Fa(b, d, g) {
        var f = u(d);
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle On", f);
        e("#optanon #optanon-menu li.menu-item-selected").removeClass("menu-item-off");
        e("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-on");
        e(g).parent().addClass("optanon-status-on");
        e("#optanon-show-settings-popup ul li").each(function() {
            e(g).text() == e("#optanon #optanon-menu li.menu-item-selected ").text() && e(g).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")
        });
        f = R(p, r(d) + ":0"); - 1 != f && (p[f] = r(d) + ":1");
        e(g).next("label").text(b.ActiveText)
    }

    function Ga(b, d, g) {
        var f = u(d);
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle Off", f);
        e("#optanon #optanon-menu li.menu-item-selected ").removeClass("menu-item-on");
        e("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-off");
        e(g).parent().removeClass("optanon-status-on");
        e("#optanon-show-settings-popup ul li").each(function() {
            e(g).text() == e("#optanon #optanon-menu li.menu-item-selected ").text() && e(g).find(".icon").removeClass("menu-item-on").addClass("menu-item-off")
        });
        f = R(p, r(d) + ":1"); - 1 != f && (p[f] = r(d) + ":0");
        b.InactiveText && e(g).next("label").text(b.InactiveText)
    }

    function fa(b) {
        var d = q(),
            g, f, h;
        b.parent(".optanon-show-settings-popup-wrapper").append('\x3cdiv id\x3d"optanon-show-settings-popup"\x3e\x3cdiv id\x3d"optanon-show-settings-popup-inner"\x3e\x3cdiv class\x3d"top-arrow"\x3e\x3c/div\x3e\x3cul\x3e\x3c/ul\x3e\x3cdiv class\x3d"menu-bottom-even"\x3e\x3c/div\x3e\x3cdiv class\x3d"bottom-arrow-even"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        for (h = 0; h < d.Groups.length; h += 1) {
            if ((b = d.Groups[h]) && null == b.Parent && w(b)) switch (g = -1 != e.inArray(r(b) + ":1", p), f = !F("OptanonConsent") && "do not track" == v(b).toLowerCase() && M, g = e('\x3cli\x3e\x3cspan class\x3d"icon necessary-icon ' + (g ? "menu-item-on" : "menu-item-off") + '"\x3e\x3c/span\x3e' + u(b) + (f ? '\x3cbr\x3e\x3cspan class\x3d"optanon-dnt"\x3eOff by Do Not Track\x3c/span\x3e' : "") + '\x3cdiv class\x3d"menu-item-border"\x3e\x3c/div\x3e\x3c/li\x3e'), b.OptanonGroupId) {
                case 2:
                    g.find(".icon").removeClass("necessary-icon").addClass("performance-icon");
                    break;
                case 3:
                    g.find(".icon").removeClass("necessary-icon").addClass("functional-icon");
                    break;
                case 4:
                    g.find(".icon").removeClass("necessary-icon").addClass("advertising-icon");
                    break;
                case 8:
                    g.find(".icon").removeClass("necessary-icon").addClass("social-icon")
            }
            e("#optanon-show-settings-popup ul").append(g)
        }
        e("#optanon-show-settings-popup ul").children(":first").addClass("first");
        e("#optanon-show-settings-popup ul").children(":last").addClass("last");
        e("#optanon-show-settings-popup ul").children(":odd").addClass("even");
        e("#optanon-show-settings-popup ul").children(":even").addClass("odd");
        e("#optanon-show-settings-popup ul").children(":last").hasClass("odd") && (e("#optanon-show-settings-popup .bottom-arrow-even").removeClass("bottom-arrow-even").addClass("bottom-arrow-odd"), e("#optanon-show-settings-popup .menu-bottom-even").removeClass("menu-bottom-even").addClass("menu-bottom-odd"));
        e("#optanon-show-settings-popup ul li.last div").remove(".menu-item-border")
    }

    function W() {
        e("#optanon-show-settings-popup").remove()
    }

    function Da() {
        na || e("#optanon-show-settings-popup").fadeOut(800, function() {
            W()
        });
        N = !1
    }

    function Ca() {
        e(".optanon-show-settings-button").click(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Click")
        });
        "ontouchstart" in window || navigator.msMaxTouchPoints || e(".optanon-show-settings-button").hover(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Hover");
            na = !0;
            N || (e("#optanon-show-settings-popup").stop(), W(), fa(e(this)),
                e("#optanon-show-settings-popup").fadeIn(400), ha(e(this)), ia(e(this)))
        }, function() {
            e("#optanon-show-settings-popup").fadeOut(400, function() {
                N = !1;
                W()
            })
        })
    }

    function Ba() {
        if (!Optanon.IsAlertBoxClosedAndValid()) {
            // Non EU members will automatically accept all cookies when visiting WeVideo
            var b = q();
            Optanon.AllowAll();
            ma(!0, !0);
        }
    }

    function Ea() {
        var b, d, g, f, h, m, n = q(),
            x, p;
        for (g = 0; g < n.Groups.length; g += 1)
            if ((b = n.Groups[g]) && null == b.Parent && w(b)) {
                x = e('\x3cdiv class\x3d"optanon-cookie-policy-group"\x3e\x3c/div\x3e');
                x.append('\x3cp class\x3d"optanon-cookie-policy-group-name"\x3e' + u(b) + "\x3c/p\x3e");
                x.append('\x3cp class\x3d"optanon-cookie-policy-group-description"\x3e' + Q(b) + "\x3c/p\x3e");
                if (0 < b.Cookies.length)
                    for (x.append('\x3cp class\x3d"optanon-cookie-policy-cookies-used"\x3e' +
                            n.CookiesUsedText + "\x3c/p\x3e"), x.append('\x3cul class\x3d"optanon-cookie-policy-group-cookies-list"\x3e\x3c/ul\x3e'), f = 0; f < b.Cookies.length; f += 1) d = b.Cookies[f], d = ka(d), x.find(".optanon-cookie-policy-group-cookies-list").append("\x3cli\x3e" + d + "\x3c/li\x3e");
                b = V(b);
                if (0 < b.length) {
                    n.CookiesText || (n.CookiesText = "Cookies");
                    n.CategoriesText || (n.CategoriesText = "Categories");
                    n.LifespanText || (n.LifespanText = "Lifespan");
                    f = e('\x3cdiv class\x3d"optanon-cookie-policy-subgroup-table"\x3e\x3c/div\x3e');
                    f.append('\x3cdiv class\x3d"optanon-cookie-policy-subgroup-table-header clearfix"\x3e\x3c/div\x3e');
                    d = "";
                    n.IsLifespanEnabled && (d = "\x26nbsp;(" + n.LifespanText + ")");
                    f.find(".optanon-cookie-policy-subgroup-table-header").append('\x3cdiv class\x3d"optanon-cookie-policy-right"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + n.CookiesText + d + "\x3c/p\x3e\x3c/div\x3e");
                    f.find(".optanon-cookie-policy-subgroup-table-header").append('\x3cdiv class\x3d"optanon-cookie-policy-left"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + n.CategoriesText + "\x3c/p\x3e\x3c/div\x3e");
                    for (d = 0; d < b.length; d += 1) {
                        p = e('\x3cdiv class\x3d"optanon-cookie-policy-subgroup"\x3e\x3c/div\x3e');
                        p.append('\x3cdiv class\x3d"optanon-cookie-policy-left"\x3e\x3c/div\x3e');
                        h = la(b[d]);
                        p.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-name"\x3e' + h + "\x3c/p\x3e");
                        p.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-description"\x3e' + Q(b[d]) + "\x3c/p\x3e");
                        p.append('\x3cdiv class\x3d"optanon-cookie-policy-right"\x3e\x3c/div\x3e');
                        p.find(".optanon-cookie-policy-right").append('\x3cul class\x3d"optanon-cookie-policy-subgroup-cookies-list"\x3e\x3c/ul\x3e');
                        if (n.IsLifespanEnabled)
                            for (h = 0; h < b[d].Cookies.length; h += 1) {
                                m = b[d].Cookies[h];
                                var r = "",
                                    r = m.IsSession ? "Session" : 0 === m.Length ? "\x3c 1 days" : m.Length + " days";
                                p.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e" + m.Name + "\x26nbsp;(" + r + ")\x3c/li\x3e")
                            } else
                                for (h = 0; h < b[d].Cookies.length; h += 1) m = b[d].Cookies[h], p.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e" +
                                    m.Name + "\x3c/li\x3e");
                        f.append(p)
                    }
                    x.append(f)
                }
                e("#optanon-cookie-policy").append(x);
                oa()
            }
        e(window).resize(function() {
            oa()
        })
    }

    function Q(b) {
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].GroupDescription && b.GroupLanguagePropertiesSets[0].GroupDescription.Text ? b.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g, "\x3cbr\x3e") : ""
    }

    function u(b) {
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].GroupName ?
            b.GroupLanguagePropertiesSets[0].GroupName.Text : ""
    }

    function v(b) {
        var d = q();
        return b && b.GroupLanguagePropertiesSets && b.GroupLanguagePropertiesSets[0] && b.GroupLanguagePropertiesSets[0].DefaultStatus ? M && d.IsDntEnabled && b.GroupLanguagePropertiesSets[0].IsDntEnabled ? "do not track" : b.GroupLanguagePropertiesSets[0].DefaultStatus.Text : ""
    }

    function la(b) {
        if (!b) return "";
        var d = u(b);
        b = b.Cookies[0];
        return b ? d = '\x3ca href\x3d"http://cookiepedia.co.uk/host/' + b.Host + '" target\x3d"_blank" style\x3d"text-decoration: underline;"\x3e' +
            d + "\x3c/a\x3e" : d
    }

    function ka(b) {
        return b ? '\x3ca href\x3d"http://cookiepedia.co.uk/cookies/' + b.Name + '" target\x3d"_blank" style\x3d"text-decoration: underline;"\x3e' + b.Name + "\x3c/a\x3e" : ""
    }

    function oa() {
        e("#optanon-cookie-policy .optanon-cookie-policy-subgroup").each(function() {
            e(this).find(".optanon-cookie-policy-left").height("auto");
            e(this).find(".optanon-cookie-policy-right").height("auto");
            e(this).find(".optanon-cookie-policy-left").height() >= e(this).find(".optanon-cookie-policy-right").height() ?
                e(this).find(".optanon-cookie-policy-right").height(e(this).find(".optanon-cookie-policy-left").height()) : e(this).find(".optanon-cookie-policy-left").height(e(this).find(".optanon-cookie-policy-right").height())
        })
    }

    function Ha() {
        e("#optanon #optanon-menu li").removeClass("menu-item-selected");
        e("#optanon #optanon-menu li").each(function() {
            e(this).text() == A && e(this).click()
        });
        U();
        var b = e("#optanon-popup-wrapper"),
            d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            g =
            window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        b.css("margin-top", "10px");
        720 > d ? b.css("top", "10px") : b.outerHeight() > g ? b.css("top", Math.max(0, (g - b.outerHeight()) / 2 + e(window).scrollTop()) + "px") : b.css("top", Math.max(0, (g - b.outerHeight()) / 2) + "px");
        e("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").hide().fadeIn(400);
        b.focus()
    }

    function E(b) {
        e("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400, b)
    }

    function pa(b) {
        if (v(b)) {
            var d =
                v(b).toLowerCase();
            b.Parent && (d = v(b.Parent).toLowerCase());
            return "always active" == d || "active" == d || "inactive landingpage" == d || "do not track" == d && !M
        }
        return !0
    }

    function qa() {
        var b, d = q(),
            g;
        if (t("OptanonConsent", "groups")) {
            t("OptanonConsent", "groups") && !X && (X = !0);
            b = !1;
            var d = G(t("OptanonConsent", "groups")),
                e = G(t("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, ""));
            g = q();
            var h, m, n;
            if (t("OptanonConsent", "groups")) {
                for (m = 0; m < g.Groups.length; m += 1) h = g.Groups[m], w(h) && (n = R(e, r(h)), -1 == n && (b = !0, pa(h) ?
                    d.push(r(h) + ":1") : d.push(r(h) + ":0")));
                for (m = d.length - 1; 0 <= m; --m) {
                    n = !1;
                    for (e = 0; e < g.Groups.length; e += 1)
                        if (h = g.Groups[e], w(h) && r(h) == d[m].replace(/:0/g, "").replace(/:1/g, "")) {
                            n = !0;
                            break
                        }
                    n || (b = !0, d.splice(m, 1))
                }
                b && B("OptanonConsent", d)
            }
            p = G(t("OptanonConsent", "groups"))
        } else {
            p = [];
            for (g = 0; g < d.Groups.length; g += 1) b = d.Groups[g], w(b) && (pa(b) ? p.push(r(b) + ":1") : p.push(r(b) + ":0"));
            X = !0
        }
    }

    function B(b, d) {
        d ? z(b, "groups", d.toString().toLowerCase()) : z(b, "groups", p.toString().toLowerCase())
    }

    function z(b, d, g) {
        var e = {},
            h = F(b),
            m, n;
        q();
        if (h)
            for (m = h.split("\x26"), h = 0; h < m.length; h += 1) n = m[h].split("\x3d"), e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]).replace(/\+/g, " ");
        e[d] = g;
        e.datestamp = (new Date).toString();
        e.version = "3.6.22";
        d = "";
        for (var p in e) e.hasOwnProperty(p) && ("" != d && (d += "\x26"), d += p + "\x3d" + encodeURIComponent(e[p]).replace(/%20/g, "+"));
        Y(b, d, 365)
    }

    function t(b, d) {
        var e = F(b),
            f, h, m;
        if (e) {
            f = {};
            h = e.split("\x26");
            for (e = 0; e < h.length; e += 1) m = h[e].split("\x3d"), f[decodeURIComponent(m[0])] = decodeURIComponent(m[1]).replace(/\+/g,
                " ");
            return d && f[d] ? f[d] : d && !f[d] ? "" : f
        }
        return ""
    }

    function Y(b, d, e) {
        var g;
        e ? (g = new Date, g.setTime(g.getTime() + 864E5 * e), e = "; expires\x3d" + g.toGMTString()) : e = "";
        g = ["wevideo.com"];
        1 >= g.length && (g[1] = "");
        document.cookie = b + "\x3d" + d + e + "; path\x3d/" + g[1] + "; domain\x3d." + g[0]
    }

    function F(b) {
        b += "\x3d";
        var d = document.cookie.split(";"),
            e, f;
        for (e = 0; e < d.length; e += 1) {
            for (f = d[e];
                " " == f.charAt(0);) f = f.substring(1, f.length);
            if (0 == f.indexOf(b)) return f.substring(b.length, f.length)
        }
        return null
    }

    function P(b, d) {
        var e =
            null != b && "undefined" != typeof b,
            f, h;
        if (!d) {
            qa();
            f = C(p, b + ":1");
            a: {
                h = q();
                var m;
                for (m = 0; m < h.Groups.length; m += 1)
                    if (h.Groups[m].OptanonGroupId == b) {
                        h = !0;
                        break a
                    }
                h = !1
            }
            h = !h;
            return e && (f && da(b) || h) ? !0 : !1
        }
        return !0
    }

    function da(b) {
        var d = q(),
            e, f;
        for (f = 0; f < d.Groups.length; f += 1)
            if (d.Groups[f].OptanonGroupId == b) {
                e = d.Groups[f];
                break
            }
        return "inactive landingpage" != v(e).toLowerCase() ? !0 : (b = t("OptanonConsent", "landingPath")) && b !== location.href ? !0 : !1
    }

    function G(b) {
        return b ? b.toLowerCase().split(",") : []
    }

    function O() {
        var b;
        if ("function" == typeof OptanonWrapper && "undefined" != OptanonWrapper) {
            OptanonWrapper();
            for (b = 0; b < H.length; b += 1) C(Z, H[b]) || Z.push(H[b]);
            H = [];
            for (b = 0; b < I.length; b += 1) C(aa, I[b]) || aa.push(I[b]);
            I = []
        }
    }

    function ea(b) {
        b.Groups.unshift({
            GroupLanguagePropertiesSets: [{
                GroupName: {
                    Text: A
                },
                GroupDescription: {
                    Text: b.MainInfoText
                }
            }]
        })
    }

    function ra(b) {
        if (b = document.getElementById(b))
            for (; b.hasChildNodes();) b.removeChild(b.lastChild)
    }

    function S(b) {
        if (b = document.getElementById(b)) b.style.display = "block"
    }

    function sa(b) {
        (b =
            document.getElementById(b)) && b.parentNode.removeChild(b)
    }

    function C(b, d) {
        var e;
        for (e = 0; e < b.length; e += 1)
            if (b[e].toString().toLowerCase() == d.toString().toLowerCase()) return !0;
        return !1
    }

    function R(b, d) {
        var e;
        for (e = 0; e < b.length; e += 1)
            if (b[e] == d) return e;
        return -1
    }

    function va(b, d) {
        return -1 != b.indexOf(d, b.length - d.length)
    }

    function U() {
        var b = 0,
            d, g = q(),
            f;
        for (f = 0; f < g.Groups.length; f += 1)
            if (d = g.Groups[f], w(d) && C(p, r(d) + ":0") && (b += 1, 1 <= b)) return e("#optanon .optanon-allow-all-button").show(), !0;
        e("#optanon .optanon-allow-all-button").hide();
        return !1
    }

    function ma(b, d) {
        e(".optanon-alert-box-wrapper").fadeOut(400);
        b && (ta || !ta && !Optanon.IsAlertBoxClosedAndValid()) && Optanon.SetAlertBoxClosed(d)
    }

    function ha(b) {
        e("#optanon-show-settings-popup").removeClass("optanon-show-settings-popup-top-button");
        e("#optanon-show-settings-popup ul").removeClass("top-button");
        e("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").hide();
        e("#optanon-show-settings-popup").css("top",
            "-" + e("#optanon-show-settings-popup-inner").height() + "px");
        var d = e("#optanon-show-settings-popup"),
            g = e(window).scrollTop(),
            d = d.offset().top;
        g >= d - 50 ? (e("#optanon-show-settings-popup").addClass("optanon-show-settings-popup-top-button"), e("#optanon-show-settings-popup ul").addClass("top-button"), e("#optanon-show-settings-popup").css("top", b.find(".optanon-show-settings-left").height() + e("#optanon-show-settings-popup .top-arrow").height() - 3 + "px"), e("#optanon-show-settings-popup .top-arrow").css("top",
            "-" + (e("#optanon-show-settings-popup .top-arrow").height() - 2) + "px"), e("#optanon-show-settings-popup .top-arrow").show()) : e("#optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").show()
    }

    function ia(b) {
        var d = e("#optanon-show-settings-popup-inner");
        b = b.find(".optanon-show-settings-left").width() + b.find(".optanon-show-settings-middle").width() + b.find(".optanon-show-settings-right").width();
        var g = e("#optanon-show-settings-popup ul").width() - 3,
            f = e("#optanon-show-settings-popup .top-arrow").width(),
            h, m, n, p;
        d.css("margin-left", "-" + ((g - b) / 2 + b) + "px");
        e("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", (g - f) / 2 + "px");
        d.css("left", "0px");
        h = e(window).scrollLeft();
        m = d.offset().left;
        n = h + e(window).width();
        p = m + d.width();
        b < g ? h >= m ? (d.css("margin-left", "-" + b + "px"), e("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", (b - f) / 2 + "px")) : n <= p && (d.css("margin-left", "-" + g + "px"), e("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left", g - (b + f) / 2 + "px")) : n <= p ? d.css("margin-left", "-" + b + "px") : h >= m && d.css("margin-left", "-" + g + "px")
    }

    function w(b) {
        var d, e = q(),
            f = !1,
            h, m, n = e.IsIABEnabled ? !0 : null != b.Cookies && 0 < b.Cookies.length;
        if (b && null == b.Parent) {
            h = (b.Vendors && 0 < b.Vendors.length || b.Purposes && 0 < b.Purposes.length) && e.IsIABEnabled;
            for (m = 0; m < e.Groups.length; m += 1) {
                d = e.Groups[m];
                var p = e.IsIABEnabled ? !0 : null != d.Cookies && 0 < d.Cookies.length;
                if (null != d.Parent && u(b) && u(d.Parent) == u(b) && d.ShowInPopup && p) {
                    f = !0;
                    break
                }
            }
            return b.ShowInPopup && (n || f || h)
        }
        return b.ShowInPopup && n
    }

    function V(b) {
        var d, e = q(),
            f = [],
            h;
        for (h = 0; h < e.Groups.length; h += 1) {
            d = e.Groups[h];
            var m = e.IsIABEnabled ? !0 : null != d.Cookies && 0 < d.Cookies.length;
            null != d.Parent && u(d.Parent) == u(b) && d.ShowInPopup && m && f.push(d)
        }
        return f
    }

    function q() {
        ba || (ba = {
            cctId: "2c5f9c6b-b6b5-41cd-880e-ad811705362b",
            euOnly: !1,
            MainText: "Privacy Preference Center",
            MainInfoText: "When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience.\n\nBecause we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.",
            AboutText: "More Information",
            AboutCookiesText: "Your Privacy",
            ConfirmText: "Allow All",
            AllowAllText: "Save Settings",
            CookiesUsedText: "Cookies used",
            ShowAlertNotice: !0,
            AboutLink: "https://cookiepedia.co.uk/giving-consent-to-cookies",
            HideToolbarCookieList: !1,
            ActiveText: "Active",
            AlwaysActiveText: "Always Active",
            AlertNoticeText: "Our website uses cookies to provide you with a better browsing experience. By continuing to use this website, you agree to the use of cookies. \x3ca href\x3d'https://www.wevideo.com/privacy'\x3eLearn more\x3c/a\x3e",
            AlertCloseText: "Close",
            AlertMoreInfoText: "Cookie Settings",
            AlertAllowCookiesText: "Accept Cookies",
            CloseShouldAcceptAllCookies: 1,
            LastReconsentDate: 1527017565667,
            BannerTitle: null,
            ForceConsent: !1,
            InactiveText: "Inactive",
            CookiesText: "Cookies",
            CategoriesText: "Categories",
            HasScriptArchive: !0,
            IsLifespanEnabled: !1,
            LifespanText: "Lifespan",
            IsIABEnabled: !1,
            VendorLevelOptOut: !0,
            Groups: [{
                ShowInPopup: !0,
                Order: 0,
                OptanonGroupId: 104,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17562
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "analytics.twitter.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "lang",
                    Host: "analytics.twitter.com",
                    IsSession: !0,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 17568
            }, {
                ShowInPopup: !0,
                Order: 0,
                OptanonGroupId: 1,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Always Active"
                    },
                    GroupDescription: {
                        Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\n\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                    },
                    GroupName: {
                        Text: "Strictly Necessary Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [],
                Purposes: [],
                GroupId: 17564
            }, {
                ShowInPopup: !0,
                Order: 1,
                OptanonGroupId: 2,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.\n\nAll information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
                    },
                    GroupName: {
                        Text: "Performance Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [],
                Purposes: [],
                GroupId: 17560
            }, {
                ShowInPopup: !0,
                Order: 1,
                OptanonGroupId: 101,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17562
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "facebook.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "datr",
                    Host: ".facebook.com",
                    IsSession: !1,
                    Length: 442
                }, {
                    Name: "fr",
                    Host: ".facebook.com",
                    IsSession: !1,
                    Length: 89
                }, {
                    Name: "lu",
                    Host: ".facebook.com",
                    IsSession: !1,
                    Length: 442
                }],
                Purposes: [],
                GroupId: 17565
            }, {
                ShowInPopup: !0,
                Order: 2,
                OptanonGroupId: 3,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."
                    },
                    GroupName: {
                        Text: "Functional Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [],
                Purposes: [],
                GroupId: 17561
            }, {
                ShowInPopup: !0,
                Order: 2,
                OptanonGroupId: 102,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17562
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "twitter.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "auth_token",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 5427
                }, {
                    Name: "twll",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1775
                }, {
                    Name: "secure_session",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 5427
                }, {
                    Name: "guest_id",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 442
                }, {
                    Name: "__utma",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 442
                }, {
                    Name: "personalization_id",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 729
                }, {
                    Name: "remember_checked",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1775
                }, {
                    Name: "remember_checked_on",
                    Host: ".twitter.com",
                    IsSession: !1,
                    Length: 1775
                }],
                Purposes: [],
                GroupId: 17566
            }, {
                ShowInPopup: !0,
                Order: 3,
                OptanonGroupId: 103,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17562
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "google.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "APISID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 442
                }, {
                    Name: "SSID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 442
                }, {
                    Name: "PREF",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 442
                }, {
                    Name: "SID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 442
                }, {
                    Name: "SAPISID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 442
                }, {
                    Name: "HSID",
                    Host: ".google.com",
                    IsSession: !1,
                    Length: 442
                }],
                Purposes: [],
                GroupId: 17567
            }, {
                ShowInPopup: !0,
                Order: 3,
                OptanonGroupId: 4,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                    },
                    GroupName: {
                        Text: "Targeting Cookies"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [],
                Purposes: [],
                GroupId: 17562
            }, {
                ShowInPopup: !0,
                Order: 4,
                OptanonGroupId: 105,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17562
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "doubleclick.net"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "id",
                    Host: ".doubleclick.net",
                    IsSession: !1,
                    Length: 442
                }],
                Purposes: [],
                GroupId: 17569
            }, {
                ShowInPopup: !0,
                Order: 4,
                OptanonGroupId: 106,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17562
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "linkedin.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "",
                    Host: ".linkedin.com",
                    IsSession: !1,
                    Length: 442
                }],
                Purposes: [],
                GroupId: 17570
            }, {
                ShowInPopup: !0,
                Order: 4,
                OptanonGroupId: 107,
                Parent: {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive"
                        },
                        GroupDescription: {
                            Text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\n\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        },
                        GroupName: {
                            Text: "Targeting Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17562
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "pinterest.com"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "",
                    Host: ".pinterest.com",
                    IsSession: !1,
                    Length: 442
                }],
                Purposes: [],
                GroupId: 17571
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 2,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17561
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Fullstory"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "wvFS",
                    Host: "www.wevideo.com",
                    IsSession: !1,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 17609
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\n\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17564
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "OneTrust Cookie Consent"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "OptanonConsent",
                    Host: "www.wevideo.com",
                    IsSession: !1,
                    Length: 364
                }, {
                    Name: "OptanonAlertBoxClosed",
                    Host: "www.wevideo.com",
                    IsSession: !1,
                    Length: 365
                }],
                Purposes: [],
                GroupId: 17585
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\n\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17564
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "AWSELB Cookies associated with Amazon Web Services Elastic Load Balancing functionality for routing client request on the server. JSESSIONID cookie is a general purpose platform session cookie, used by sites written in JSP. Usually used to maintain an anonymous user session by the server."
                    },
                    GroupName: {
                        Text: "Amazon Web Services"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "JSESSIONID",
                    Host: "www.wevideo.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "AWSELB",
                    Host: "www.wevideo.com",
                    IsSession: !0,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 17587
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 2,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17561
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "HubSpot"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "__cfduid",
                    Host: ".hs-scripts.com",
                    IsSession: !1,
                    Length: 364
                }, {
                    Name: "__hssrc",
                    Host: ".wevideo.com",
                    IsSession: !0,
                    Length: 0
                }, {
                    Name: "__hstc",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 729
                }, {
                    Name: "__hssc",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "hubspotutk",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 3649
                }],
                Purposes: [],
                GroupId: 17600
            },{
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 2,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17561
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Disqus"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "disqus_unique",
                    Host: "www.wevideo.com",
                    IsSession: !1,
                    Length: 0
                },{
                    Name: "__jid",
                    Host: "www.wevideo.com",
                    IsSession: !1,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 18000
            },{
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 2,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17561
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "AddThis"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "loc",
                    Host: "www.wevideo.com",
                    IsSession: !1,
                    Length: 0
                },{
                    Name: "uvc",
                    Host: "www.wevideo.com",
                    IsSession: !1,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 18001
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 2,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17561
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Drift"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "driftt_aid",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 0
                },{
                    Name: "driftt_sid",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 0
                },{
                    Name: "driftt_wmd",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 0
                },{
                    Name: "DFTT_END_USER_PREV_BOOTSTRAPPED",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 0
                },{
                    Name: "DFTT_LEAD_HAS_PREV_IDENTIFIED",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 18002
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 1,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive"
                        },
                        GroupDescription: {
                            Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17561
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Google Optimize"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 18003
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 1,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive"
                        },
                        GroupDescription: {
                            Text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\n\nIf you do not allow these cookies then some or all of these services may not function properly."
                        },
                        GroupName: {
                            Text: "Functional Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17561
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Lucky Orange"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "",
                    Host: ".luckyorange.com",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 18004
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 1,
                    OptanonGroupId: 2,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.\n\nAll information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
                        },
                        GroupName: {
                            Text: "Performance Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17560
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Indicative"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "Indicative_b4dd1986-ed42-44c9-a0dd-2aa629cb0ec9",
                    Host: "www.wevideo.com",
                    IsSession: !1,
                    Length: 364
                }],
                Purposes: [],
                GroupId: 17599
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 1,
                    OptanonGroupId: 2,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.\n\nAll information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
                        },
                        GroupName: {
                            Text: "Performance Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17560
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Google Analytics"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "_gid",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 0
                }, {
                    Name: "_ga",
                    Host: ".wevideo.com",
                    IsSession: !1,
                    Length: 729
                }],
                Purposes: [],
                GroupId: 17598
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\n\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17564
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "WeVideo"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "wevideo",
                    Host: "www.wevideo.com",
                    IsSession: !0,
                    Length: 0
                } , {
                    Name: "wv_usr_ll",
                    Host: "wevideo.com",
                    IsSession: !0,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 17597
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\n\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17564
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: ""
                    },
                    GroupName: {
                        Text: "Ambassador"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "__3idcontext",
                    Host: ".cdnwidget.com",
                    IsSession: !0,
                    Length: 0
                },
                    {
                        Name: "__adcontext",
                        Host: ".cdnwidget.com",
                        IsSession: !0,
                        Length: 0
                    },
                    {
                        Name: "__idcontext",
                        Host: ".wevideo.com",
                        IsSession: !0,
                        Length: 0
                    },
                    {
                        Name: "mbsywevideo",
                        Host: ".mbsy.co",
                        IsSession: !0,
                        Length: 0
                    }],
                Purposes: [],
                GroupId: 100001
            }, {
                ShowInPopup: !0,
                Order: 100,
                OptanonGroupId: 0,
                Parent: {
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\n\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    GroupId: 17564
                },
                GroupLanguagePropertiesSets: [{
                    DefaultStatus: {
                        Text: "Active"
                    },
                    GroupDescription: {
                        Text: "Influitive cookie enables creator community functionality."
                    },
                    GroupName: {
                        Text: "Influitive"
                    },
                    IsDntEnabled: !1
                }],
                Cookies: [{
                    Name: "",
                    Host: ".influitive.com",
                    IsSession: !0,
                    Length: 0
                }],
                Purposes: [],
                GroupId: 100001
            }, {
              ShowInPopup: !0,
              Order: 100,
              OptanonGroupId: 0,
              Parent: {
                ShowInPopup: !0,
                Order: 1,
                OptanonGroupId: 1,
                Parent: null,
                GroupLanguagePropertiesSets: [{
                  DefaultStatus: {
                    Text: "Inactive"
                  },
                  GroupDescription: {
                    Text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.\n\nAll information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
                  },
                  GroupName: {
                    Text: "Strictly Necessary Cookies"
                  },
                  IsDntEnabled: !1
                }],
                Cookies: [],
                Purposes: [],
                GroupId: 17564
              },
              GroupLanguagePropertiesSets: [{
                DefaultStatus: {
                  Text: "Active"
                },
                GroupDescription: {
                  Text: ""
                },
                GroupName: {
                  Text: "Google Tag Manager"
                },
                IsDntEnabled: !1
              }],
              Cookies: [{
                Name: "_dc_gtm_UA-25627126-1",
                Host: ".wevideo.com",
                IsSession: !1,
                Length: 0
              }],
              Purposes: [],
              GroupId: 17586
            }],
            ConsentModel: {
                Name: "Owner Defined"
            },
            Language: {
                Culture: "en-GB"
            },
            showBannerCloseButton: !0,
            ShowPreferenceCenterCloseButton: !0,
            FooterDescriptionText: null,
            IsDntEnabled: !1
        });
        return ba
    }

    function L(b) {
        var d = ua(b);
        T && d && T.hostname !==
            d.hostname && (b = b.replace(d.hostname, T.hostname));
        return b
    }

    function ua(b) {
        var d = document.createElement("a");
        d.href = b;
        return d
    }
    var M = "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack,
        N = !1,
        na = !1,
        ta = function() {
            var b = !0,
                d, e = q(),
                f;
            for (f = 0; f < e.Groups.length; f += 1)
                if (d = e.Groups[f], w(d) && (!v(d) || v(d) && ("active" == v(d).toLowerCase() || "inactive landingpage" == v(d).toLowerCase() || "do not track" == v(d).toLowerCase()))) {
                    b = !1;
                    break
                }
            return b
        }(),
        Ia = function() {
            var b = !0,
                d, e = q(),
                f;
            for (f =
                0; f < e.Groups.length; f += 1)
                if (d = e.Groups[f], w(d) && (d = v(d).toLowerCase(), "inactive landingpage" !== d && "always active" !== d)) {
                    b = !1;
                    break
                }
            return b
        }(),
        X = !1,
        p, Z = [],
        aa = [],
        H = [],
        I = [],
        A = q().AboutCookiesText,
        T = null,
        ja = !1,
        ba, e;
    this.LoadBanner = function() {
        e ? e(window).trigger("otloadbanner") : ja = !0
    };
    this.Init = function() {
        for (var b = q(), d = document.getElementsByTagName("script"), e = 0; e < d.length; ++e) {
            var f = d[e],
                h = b.cctId;
            if (f.getAttribute("src") && -1 !== f.getAttribute("src").indexOf(h)) {
                T = ua(d[e].src);
                break
            }
        }
        qa();
        J();
        wa(xa);
        b = L("https://d3tvj3lw2y3r4c.cloudfront.net/webpage/prod3/css/cookies/optanon.css");
        d = document.createElement("link");
        d.type = "text/css";
        d.href = b;
        d.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(d);
        b = (b = (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("#40A6D8")) ? {
            r: parseInt(b[1], 16),
            g: parseInt(b[2], 16),
            b: parseInt(b[3], 16)
        } : null) ? 186 < .299 * b.r + .587 * b.g + .114 * b.b ? "#000000" : "#ffffff" : "";
        d = document.createElement("style");
        d.innerHTML = "#optanon ul#optanon-menu li { background-color:  !important }#optanon ul#optanon-menu li.menu-item-selected { background-color:  !important }#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: #40A6D8 !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: #40A6D8 !important; border-color: #40A6D8 !important; }#optanon #optanon-popup-wrapper .optanon-white-button-middle a { color: " +
            b + " !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle a { color: " + b + " !important }#optanon #optanon-popup-bottom { background-color: #E8E8E8 !important }#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color: #E8E8E8 !important }.optanon-alert-box-wrapper { background-color:#D7E4EA !important }.optanon-alert-box-wrapper .optanon-alert-box-bg p { color:#4F4F4F !important }";
        document.getElementsByTagName("head")[0].appendChild(d);
        (b = t("OptanonConsent", "landingPath")) && b !== location.href ? (b = "true" === t("OptanonConsent", "AwaitingReconsent"), e = q(), d = F("OptanonAlertBoxClosed"), e = e.LastReconsentDate, d && e && new Date(e) > new Date(d) && !b ? (D(location.href), z("OptanonConsent", "AwaitingReconsent", !0)) : (D("NotLandingPage"), z("OptanonConsent", "AwaitingReconsent", !1), Ia && Optanon.SetAlertBoxClosed(!0))) : D(location.href)
    };
    this.InsertScript = function(b, d, e, f, h) {
        var g = null != f && "undefined" != typeof f,
            n;
        if (P(h, g && "undefined" != typeof f.ignoreGroupCheck &&
                1 == f.ignoreGroupCheck || !1) && !C(Z, h)) {
            H.push(h);
            g && "undefined" != typeof f.deleteSelectorContent && 1 == f.deleteSelectorContent && ra(d);
            h = document.createElement("script");
            null != e && "undefined" != typeof e && (n = !1, h.onload = h.onreadystatechange = function() {
                n || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (n = !0, e())
            });
            h.type = "text/javascript";
            h.src = b;
            switch (d) {
                case "head":
                    document.getElementsByTagName("head")[0].appendChild(h);
                    break;
                case "body":
                    document.getElementsByTagName("body")[0].appendChild(h);
                    break;
                default:
                    document.getElementById(d) && (document.getElementById(d).appendChild(h), g && "undefined" != typeof f.makeSelectorVisible && 1 == f.makeSelectorVisible && S(d))
            }
            if (g && "undefined" != typeof f.makeElementsVisible)
                for (b = 0; b < f.makeElementsVisible.length; b += 1) S(f.makeElementsVisible[b]);
            if (g && "undefined" != typeof f.deleteElements)
                for (g = 0; g < f.deleteElements.length; g += 1) sa(f.deleteElements[g])
        }
    };
    this.InsertHtml = function(b, d, e, f, h) {
        var g = null != f && "undefined" != typeof f;
        if (P(h, g && "undefined" != typeof f.ignoreGroupCheck &&
                1 == f.ignoreGroupCheck || !1) && !C(aa, h)) {
            I.push(h);
            g && "undefined" != typeof f.deleteSelectorContent && 1 == f.deleteSelectorContent && ra(d);
            h = document.getElementById(d);
            var n;
            h && (n = document.createElement("div"), n.innerHTML = b, h.appendChild(n));
            g && "undefined" != typeof f.makeSelectorVisible && 1 == f.makeSelectorVisible && S(d);
            if (g && "undefined" != typeof f.makeElementsVisible)
                for (b = 0; b < f.makeElementsVisible.length; b += 1) S(f.makeElementsVisible[b]);
            if (g && "undefined" != typeof f.deleteElements)
                for (g = 0; g < f.deleteElements.length; g +=
                    1) sa(f.deleteElements[g]);
            null != e && "undefined" != typeof e && e()
        }
    };
    this.Close = function() {
        E();
        D("NotLandingPage");
        B("OptanonConsent");
        K();
        J();
        O()
    };
    this.AllowAll = function() {
        var b, d = q(),
            g;
        p = [];
        for (g = 0; g < d.Groups.length; g += 1) b = d.Groups[g], w(b) && p.push(r(b) + ":1");
        e("#optanon #optanon-menu li").removeClass("menu-item-off");
        e("#optanon #optanon-menu li").addClass("menu-item-on");
        e("#optanon-show-settings-popup ul li").each(function() {
            e(this).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")
        });
        E();
        D("NotLandingPage");
        B("OptanonConsent");
        K();
        J();
        O()
    };
    this.ToggleInfoDisplay = function() {
        e("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").is(":hidden") ? Ha() : (E(), B("OptanonConsent"), K(), J(), O())
    };
    this.BlockGoogleAnalytics = function(b, d) {
        window["ga-disable-" + b] = !P(d)
    };
    this.TriggerGoogleAnalyticsEvent = function(b, d, e, f) {
        "undefined" != typeof _gaq && _gaq.push(["_trackEvent", b, d, e, f]);
        "undefined" != typeof ga && ga("send", "event", b, d, e, f);
        "undefined" != typeof dataLayer && dataLayer.constructor ===
            Array && dataLayer.push({
                event: "trackOptanonEvent",
                optanonCategory: b,
                optanonAction: d,
                optanonLabel: e,
                optanonValue: f
            })
    };
    this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid = function() {
        var b = q(),
            d = F("OptanonAlertBoxClosed"),
            b = b.LastReconsentDate;
        if (null === d) return !1;
        if (!b) return !0;
        (d = new Date(b) > new Date(d)) && Optanon.ReconsentGroups();
        return !d
    };
    this.ReconsentGroups = function() {
        var b = !1,
            d = G(t("OptanonConsent", "groups")),
            e = G(t("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, "")),
            f = q();
        if (t("OptanonConsent",
                "groups")) {
            for (var h = 0; h < f.Groups.length; h += 1) {
                var m = f.Groups[h];
                if (w(m)) {
                    var n = R(e, r(m));
                    if (-1 != n) {
                        var p = v(m).toLowerCase(); - 1 < ["inactive", "inactive landingpage", "do not track"].indexOf(p) && (b = !0, p = "inactive landingpage" === p ? ":1" : ":0", d[n] = r(m) + p)
                    }
                }
            }
            b && B("OptanonConsent", d)
        }
    };
    this.SetAlertBoxClosed = function(b) {
        var d = (new Date).toISOString();
        b ? Y("OptanonAlertBoxClosed", d, 365) : Y("OptanonAlertBoxClosed", d)
    };
    this.GetDomainData = function() {
        return q()
    };
    this.OnConsentChanged = function(b) {
        window.addEventListener("consent.onetrust",
            b)
    }
}).call(Optanon);
Optanon.Init();