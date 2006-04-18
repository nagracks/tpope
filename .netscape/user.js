// -*- Mode: java; c-basic-offset: 2 -*- vi:set sw=2 sts=2:
// Author: Tim Pope
// $Id$

// This file configures everything from Netscape 4 to Firefox

with (PrefConfig) {
user_pref("accessibility.typeaheadfind.autostart", false);
user_pref("advanced.system.supportDDEExec", false);
user_pref("browser.blink_allowed", false);
user_pref("browser.block.target_new_window", true);
user_pref("browser.download.defaultFolder", "~/dl");
user_pref("browser.download.dir", "~/dl");
user_pref("browser.download.manager.closeWhenDone", true);
user_pref("browser.download.manager.retention", 1);
user_pref("browser.enable_automatic_image_resizing", false);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.startup.homepage", "http://www.google.com/");
user_pref("browser.tabs.autoHide", false);
user_pref("browser.tabs.extensions.default.type", 2);
user_pref("browser.tabs.extensions.direction_of_focusing", 3);
user_pref("browser.tabs.extensions.last_tab_closing", 1);
user_pref("browser.tabs.extensions.loadInBackgroundMiddleClick", true);
user_pref("browser.tabs.extensions.open_tab_in", 2);
user_pref("browser.tabs.extensions.prevent_same_uri_tab", true);
user_pref("browser.tabs.extensions.show_item.duplicateTab", true);
user_pref("browser.tabs.extensions.show_item.moveLeft", true);
user_pref("browser.tabs.extensions.show_item.moveRight", true);
user_pref("browser.tabs.extensions.slow_down_autoreload_in_background.enabled", true);
user_pref("browser.tabs.extensions.view_source_tab", true);
user_pref("browser.tabs.extensions.window_hook_mode", 2);
user_pref("browser.tabs.loadInBackground", true);
user_pref("browser.tabs.opentabfor.middleclick", true);
user_pref("browser.tabs.opentabfor.windowopen", true);
user_pref("browser.throbber.url","http://www.sexyeek.org/");
user_pref("content.notify.backoffcount", 200);
user_pref("content.notify.interval", 120000);
user_pref("content.notify.ontimer", true);
user_pref("ctxextensions.default.type", 1);
user_pref("ctxextensions.enable.navigations_advanced", true);
user_pref("ctxextensions.enable.navigations_collectLinks", true);
user_pref("dom.disable_open_click_delay", 0);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_status_change", true);
user_pref("downloadmgr.loadTabInBackground", true);
user_pref("downloadmgr.windowType", 2);
user_pref("extensions.downloadmgr.loadTabInBackground", true);
user_pref("extensions.downloadmgr.windowType", 2);
user_pref("editor.html_editor", "gvim %f");
user_pref("editor.image_editor", "gimp %f");
user_pref("editor.use_html_editor", 1);
user_pref("extensions.disabledObsolete", true);
user_pref("googlebar.country2Search", 71);
user_pref("imageblocker.enable", true);
user_pref("keyconfig.main.trp_key_ScrollLineDown", "][J][][goDoCommand('cmd_scrollLineDown');");
user_pref("keyconfig.main.trp_key_ScrollLineUp", "][K][][goDoCommand('cmd_scrollLineUp');");
user_pref("mailnews.headers.showUserAgent", true);
user_pref("mailnews.reply_on_top", 0);
user_pref("middlemouse.openNewWindow", true);
user_pref("middlemouse.contentLoadURL", true);
user_pref("middlemouse.scrollbarPosition", true);
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 100);
user_pref("nglayout.initialpaint.delay", 50);
user_pref("security.warn_submit_insecure", false);
user_pref("view_source.wrap_long_lines", true);
user_pref("webdeveloper.view.source.key", "");
}
