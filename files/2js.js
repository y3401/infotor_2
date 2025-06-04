;// lib.init.js
$(function() {
 $(document).foundation();
});

$(function() {
 function t(t) {
  var e = t.dataset['ts_text'];
  if (e !== undefined) {
   return e;
  }
  var r = t.querySelector('.ts-text');
  if (r) {
   return r.textContent;
  }
  return t.innerText;
 }
 $.tablesorter.defaults.textExtraction = t;
 $('.tablesorter').each(function() {
  var t = this;
  var e = $(t);
  var r = {
   delayInit: true
  };
  if (t.dataset['tablesorter'] !== undefined) {
   try {
    var n = JSON.parse(t.dataset['tablesorter']);
    r = $.extend(true, r, n);
   } catch (t) {
    console.error(t);
   }
  }
  e.tablesorter(r);
 });
});
;// main.js
if (!String.prototype.startsWith) {
 Object.defineProperty(String.prototype, 'startsWith', {
  value: function(t, e) {
   var n = e > 0 ? e | 0 : 0;
   return this.substring(n, n + t.length) === t;
  }
 });
}

if (!String.prototype.includes) {
 String.prototype.includes = function(t, e) {
  'use strict';
  if (t instanceof RegExp) {
   throw TypeError('first argument must not be a RegExp');
  }
  if (e === undefined) {
   e = 0;
  }
  return this.indexOf(t, e) !== -1;
 };
}

(function(t) {
 [ 'count', 'debug', 'dirxml', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'log', 'table', 'time', 'timeEnd', 'timeStamp', 'trace' ].forEach(function(e) {
  t[e] = t[e] || function() {};
 });
})(window.console = window.console || {});

BB.randomNumber = Math.round(Math.random() * 1e9);

BB.getRandomNumber = function(t, e) {
 return t + Math.floor((e - t + 1) * Math.random());
};

function cfm(t) {
 return window.confirm(t);
}

function bb_alert(t, e) {
 t = t + '';
 var n = t.replace(/\n/g, '<br>');
 $('#bb-alert-msg').html(n);
 $('#bb-alert-box').toggleClass('bb-alert-err', e == true).modal();
 return false;
}

function post2url(t, e) {
 var n = $.extend({
  form_token: BB.form_token
 }, e);
 var i = document.createElement('form');
 i.setAttribute('action', t);
 i.setAttribute('method', 'post');
 i.setAttribute('target', n['target'] || '_self');
 for (var o in n) {
  var r = document.createElement('input');
  r.setAttribute('type', 'hidden');
  r.setAttribute('name', o);
  r.setAttribute('value', n[o]);
  i.appendChild(r);
 }
 document.body.appendChild(i);
 i.submit();
 return false;
}

function get2url(t, e) {
 var n = $.extend({}, e);
 var i = document.createElement('form');
 i.setAttribute('action', t);
 i.setAttribute('method', 'get');
 i.setAttribute('target', n['target'] || '_self');
 delete n['target'];
 for (var o in n) {
  var r = document.createElement('input');
  r.setAttribute('type', 'hidden');
  r.setAttribute('name', o);
  r.setAttribute('value', n[o]);
  i.appendChild(r);
 }
 document.body.appendChild(i);
 i.submit();
 return false;
}

BB.escapeHtml = function(t) {
 return t.replace(/</g, '&lt;');
};

BB.localStorage = {
 get: function(t) {
  try {
   return JSON.parse(localStorage.getItem(t));
  } catch (t) {
   console.error(t);
   return null;
  }
 },
 remove: function(t) {
  try {
   localStorage.removeItem(t);
  } catch (t) {
   console.error(t);
  }
 },
 set: function(t, e) {
  try {
   localStorage.setItem(t, JSON.stringify(e));
  } catch (t) {
   console.error(t);
  }
 }
};

BB.sessionStorage = {
 get: function(t) {
  try {
   return JSON.parse(sessionStorage.getItem(t));
  } catch (t) {
   console.error(t);
   return null;
  }
 },
 remove: function(t) {
  try {
   sessionStorage.removeItem(t);
  } catch (t) {
   console.error(t);
  }
 },
 set: function(t, e) {
  try {
   sessionStorage.setItem(t, JSON.stringify(e));
  } catch (t) {
   console.error(t);
  }
 }
};

var Menu = {
 hideSpeed: 'fast',
 offsetCorrection_X: -40,
 offsetCorrection_Y: 2,
 activeMenuId: null,
 clickedMenuId: null,
 $root: null,
 $menu: null,
 positioningType: null,
 outsideClickWatch: false,
 clicked: function(t) {
  t.blur();
  this.clickedMenuId = this.getMenuId(t);
  this.$menu = $(this.clickedMenuId);
  this.$root = t;
  this.hideElements(t);
  this.toggleMenu();
 },
 hovered: function(t) {
  if (this.activeMenuId && this.activeMenuId !== this.getMenuId(t)) {
   this.clicked(t);
  }
 },
 getMenuId: function(t) {
  var e = t.attr('href');
  return e.substr(e.indexOf('#'));
 },
 setLocation: function() {
  var t = this.$root.offset();
  t.top += this.$root.height() + this.offsetCorrection_Y;
  t.left += this.offsetCorrection_X;
  this.$menu.css(t);
 },
 fixLocation: function() {
  var t = this.$menu;
  var e = parseInt(t.css('left'));
  if (e < 12) {
   t.css('left', 12);
  }
  var n = $(document).scrollLeft() + $(window).width() - 6;
  var i = Math.min(e, Math.max(0, n - t.width()));
  if (e > i) {
   t.css('left', i);
  }
  var o = parseInt(t.css('top'));
  var r = $(document).scrollTop() + $(window).height() - 20;
  var a = Math.min(o, Math.max(0, r - t.height()));
  if (o != a) {
   t.css('top', a);
  }
 },
 toggleMenu: function() {
  if (this.activeMenuId && this.activeMenuId !== this.clickedMenuId) {
   $(this.activeMenuId).hide(this.hideSpeed);
  }
  if (this.$menu.is(':visible')) {
   this.$menu.hide(this.hideSpeed);
   this.activeMenuId = null;
  } else {
   this.showClickedMenu();
   if (!this.outsideClickWatch) {
    $(document).one('mousedown', function(t) {
     Menu.hideClickWatcher(t);
    });
    this.outsideClickWatch = true;
   }
  }
 },
 showClickedMenu: function() {
  this.setLocation();
  this.fixLocation();
  this.$menu.css({
   display: 'block'
  });
  this.activeMenuId = this.clickedMenuId;
 },
 hideClickWatcher: function(t) {
  this.outsideClickWatch = false;
  this.hide(t);
 },
 hide: function() {
  if (this.$menu) {
   this.$menu.hide(this.hideSpeed);
  }
  this.activeMenuId = this.clickedMenuId = this.$menu = null;
 },
 hideElements: function(t) {
  var e = t.data('hide_el_id');
  if (e) {
   var n = '#' + e;
   $(n).css({
    visibility: 'hidden'
   });
  }
 }
};

BB.build_share_buttons = function() {
 if (!$('#soc-container').length) {
  return;
 }
 var t = {};
 t['Facebook'] = [ 0, 'http://www.facebook.com/sharer.php?u={URL}&t={TITLE}' ];
 t['Twitter'] = [ -18, 'http://twitter.com/share?url={URL}&text={TITLE}' ];
 t['Вконтакте'] = [ -36, 'http://vkontakte.ru/share.php?url={URL}' ];
 t['LiveJournal'] = [ -54, 'http://www.livejournal.com/update.bml?event={URL}&subject={TITLE}' ];
 var e = $('#soc-container');
 var n = $('<div class="soc-buttons"></div>');
 var i = encodeURIComponent(e.data('share_url'));
 var o = encodeURIComponent(e.data('share_title'));
 $.each(t, function(t, e) {
  var r = 'Опубликовать ссылку в ' + t;
  var a = e[0] + 'px';
  var s = e[1].replace('{URL}', i).replace('{TITLE}', o);
  $('<span></span>').attr('title', r).css('background-position', a).on('click', function() {
   window.open(s, '_blank', 'width=800,height=550,top=50,left=100,location=yes,scrollbars=yes');
  }).appendTo(n);
 });
 n.appendTo(e);
};

BB.navbar = {
 init: function() {
  this.nav_btn_click();
  this.change_unhide_event();
  this.show_menu();
  this.show_panel();
 },
 nav_btn_click: function() {
  $('#nav-up').on('click', function() {
   BB.navbar.scroll_page(0);
  });
  $('#nav-down').on('click', function() {
   var t = $(document).height() - $(window).height() - 150;
   BB.navbar.scroll_page(t);
  });
 },
 scroll_page: function(t) {
  $('html,body').animate({
   scrollTop: t
  }, 200);
 },
 change_unhide_event: function() {
  $('.nav-event').on('click', function() {
   var t = $(this).data('event') || 'mouseenter';
   $('#nav-panel').off('.nav').on(t + '.nav', function() {
    $(this).removeClass('nav-hidden-arrow');
   });
   BB.localStorage.set('unhide_event', t);
  });
 },
 show_menu: function() {
  var t = $('#nav-opt-menu');
  var e = false;
  $('#nav-settings').on('click', function() {
   if (e) {
    t.hide();
   } else {
    t.show();
   }
   e = !e;
  }).on('mouseleave', function() {
   if (!e) {
    return;
   }
   t.click();
  });
 },
 show_panel: function() {
  if ($(document).height() < $(window).height() + 400) {
   return;
  }
  var t = BB.localStorage.get('unhide_event') || 'mouseenter';
  $('#nav-panel').on(t + '.nav', function() {
   $(this).removeClass('nav-hidden-arrow');
  }).on('mouseleave', function() {
   $(this).addClass('nav-hidden-arrow');
  }).show();
 }
};

(function() {
 var t = {};
 $.each([ 160, 164, 166, 167, 169, 171, 172, 173, 174, 176, 177, 181, 182, 183, 187, 1118, 1119, 1168, 1169, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8226, 8230, 8240, 8249, 8250, 8364, 8470, 8482 ], function(e, n) {
  t[n] = true;
 });
 String.prototype.to1251 = function() {
  var e = this + '';
  var n = '';
  var i = e.length;
  for (var o = 0; o < i; o++) {
   var r = e.charCodeAt(o);
   if (r > 1037 && r < 1104 || r < 128 || r > 1104 && r < 1117 || r > 1024 && r < 1037 || t[r] != null) {
    n += e[o];
   } else {
    n += '&#' + r + ';';
   }
  }
  return n;
 };
 String.prototype.highlight_non_1251 = function() {
  var e = this + '';
  var n = '';
  var i = e.length;
  for (var o = 0; o < i; o++) {
   var r = e.charCodeAt(o);
   if (r > 1037 && r < 1104 || r < 128 || r > 1104 && r < 1117 || r > 1024 && r < 1037 || t[r] != null) {
    n += e[o];
   } else {
    n += '<em class="hl-non-1251">' + e[o] + '</em>';
   }
  }
  return n;
 };
 String.prototype.count_as_1251 = function() {
  var e = this.toString();
  var n = e.length;
  var i = n;
  for (var o = 0; o < n; o++) {
   var r = e.charCodeAt(o);
   if (r > 1037 && r < 1104 || r < 128 || r > 1104 && r < 1117 || r > 1024 && r < 1037 || t[r] != null) {
    continue;
   }
   i += 2 + r.toString().length;
  }
  return i;
 };
})();

BB.highlightCyrillic = function(t) {
 t.innerHTML = t.innerHTML.replace(/[�-���]+/gi, '<span class="cyrillic-char">$&</span>');
};

BB.FSN = {
 build_nav: function() {
  var t = $('#fs').find('select');
  var e = '';
  t.children('optgroup').each(function() {
   var t = $(this);
   var n = t.attr('label');
   e += '<li><span class="b">' + n + '</span><ul>';
   t.children('option.root_forum').each(function() {
    var t = $(this).html();
    var n = $(this)[0].index;
    var i = $(this)[0].value;
    e += '<li><span class="f" data-index="' + n + '" data-forum_id="' + i + '">' + t + '</span></li>';
   });
   e += '</ul></li>';
  });
  $('#fsn-load-stub').remove();
  $('#fs-nav-ul').html(e).treeview({
   collapsed: true
  }).on('click', 'span.f', function() {
   var e = $(this).data('index');
   var n = $(this).data('forum_id');
   t[0].selectedIndex = e;
   if (t.attr('multiple')) {
    t.find('.fp-' + n).prop({
     selected: true
    });
   }
   $('#fs-nav-list').fadeOut();
  });
 },
 selectSubforums: function(t) {
  var e = this.getFirstSelected(t);
  if (!e) {
   return;
  }
  t[0].selectedIndex = e.index;
  if (e.classList.contains('has_sf')) {
   var n = e.value;
   t.find('.fp-' + n).prop({
    selected: true
   });
  } else {
   var i = e.className.match(/fp-(\d+)/);
   if (i) {
    var o = i[1];
    t.find('.fp-' + o).prop({
     selected: true
    });
    t.find('#fs-' + o).prop({
     selected: true
    });
   }
  }
 },
 selectCategory: function(t) {
  var e = this.getFirstSelected(t);
  if (!e || e.value == -1) {
   return;
  }
  $('#fs option:selected').prop({
   selected: false
  });
  t[0].selectedIndex = e.index;
  var n = e.parentNode;
  $('option', n).prop({
   selected: true
  });
 },
 getFirstSelected: function(t) {
  return $('option:selected', t).first()[0];
 }
};

BB.focus_pg_input = function() {
 setTimeout(function() {
  if ($('#pg-page').is(':visible')) {
   $('#pg-page').focus();
  }
 }, 100);
};

BB.go_to_page = function(t) {
 var e = (parseInt(t) - 1) * BB.PG_PER_PAGE;
 var n = BB.PG_BASE_URL.indexOf('?') == -1 ? '?' : '&';
 window.location.href = BB.PG_BASE_URL + n + 'start=' + e;
};

BB.allowed_translator_hosts = /(\.googleusercontent\.com|\.translate\.goog)$/;

BB.set_opt_js = function(t, e, n) {
 BB.opt_js[t] = e;
 BB.Cookies.set('opt_js', BB.opt_js);
 if (n) {
  window.location.reload();
 }
};

BB.hl_quick_search_err = function() {
 $('#search-text').addClass('hl-err-input').focus();
};

BB.hasET = function() {
 return 'ET' in window && $.isPlainObject(ET);
};

BB.isHttpsDomain = function() {
 return !!BB.cur_domain.match(/^torrents\.loc|rutracker\.(org|net|nl)$/);
};

BB.isHttps = function() {
 return location.protocol === 'https:';
};

BB.toggle_top_login = function() {
 $('#quick-search-guest, #login-form-quick').toggle();
 $('#top-login-uname').focus();
};

if (BB.IS_GUEST) {
 $(function() {
  if (!BB.isHttps() && BB.isHttpsDomain()) {
   $('#top-login-box').addClass('with-ssl-opt');
   $('.login-ssl-block').show();
   $('#login-form-quick, #login-form-full').on('submit', function() {
    var t = $(this).find('input.login-ssl:visible').is(':checked');
    if (t) {
     this.action = 'https://' + BB.cur_domain + '/forum/login.php';
    }
   });
  }
 });
}

BB.printTopic = function() {
 $('html').addClass('print-mode');
 $('.menu-sub').hide();
 $('div.sp-head:not(.unfolded)').click();
 setTimeout(function() {
  window.print();
 }, 600);
};

BB.humnSize = function(t) {
 var e = 0;
 var n = [ 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];
 while (t / 1024 >= 1) {
  t = t / 1024;
  e++;
 }
 t = String(t);
 if (t.indexOf('.') != -1) {
  t = t.substring(0, t.indexOf('.') + 3);
 }
 return t + ' ' + n[e];
};

BB.generateRandomString = function(t) {
 if (t < 0) {
  throw new Error('Length must be a positive number.');
 }
 var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 var n = '';
 for (var i = 0; i < t; i++) {
  n += e[Math.floor(Math.random() * e.length)];
 }
 return n;
};

BB.Guid = function() {
 this.pattern = /^[a-zA-Z0-9]{12}$/;
 this.key = 'bb_guid';
 this.value = null;
};

BB.Guid.prototype = {
 init: function() {
  var t = BB.Cookies.get(this.key);
  var e = BB.localStorage.get(this.key);
  if (this.isValid(t)) {
   this.value = t;
   if (!this.isValid(e) || e !== t) {
    BB.localStorage.set(this.key, this.value);
   }
   return;
  }
  if (this.isValid(e)) {
   this.value = e;
   BB.Cookies.set(this.key, this.value);
   return;
  }
  this.value = BB.generateRandomString(12);
  if (!this.isValid(this.value)) {
   console.error('Invalid GUID: ' + this.value);
   return;
  }
  BB.Cookies.set(this.key, this.value);
  BB.localStorage.set(this.key, this.value);
 },
 isValid: function(t) {
  return typeof t === 'string' && this.pattern.test(t);
 }
};

BB.externalSiteSearch = function(t, e) {
 var n = encodeURIComponent(e);
 switch (t) {
 case 'duckduckgo':
  get2url('out.php', {
   target: '_blank',
   url: 'https://duckduckgo.com/?q=site:rutracker.org%20' + n
  });
  break;

 default:
  throw new Error('Invalid searchType: ' + t);
 }
};

(function() {
 function t(t) {
  var e = {
   topicId: 0,
   redirectUrl: ''
  };
  var n = t.dataset['dl'];
  if (n) {
   n = JSON.parse(n);
   e.topicId = n['t'];
   e.redirectUrl = n['r'];
  }
  return e;
 }
 function e() {
  $('#del_future_dl').click();
 }
 function n(t, e) {
  if (t.redirectUrl) {
   setTimeout(function() {
    window.location.href = t.redirectUrl;
   }, e);
  }
 }
 BB.downloadTorrent = function i(o) {
  var r = t(this);
  var a = {};
  if (r.redirectUrl) {
   a['target'] = '_blank';
  }
  post2url(this.href, a);
  if (!o.ctrlKey) {
   e();
  }
  n(r, 3e3);
  return false;
 };
 BB.downloadMagnet = function e() {
  var i = t(this);
  n(i, 5e3);
 };
 BB.initMagnetLinks = function() {
  $('.magnet-link').each(function() {
   var t = $(this).data('topic_id');
   var e = $('.topic-title-' + t).text().substr(0, 150);
   this.href += '&dn=' + encodeURIComponent(e);
  });
 };
 BB.highlightRefDls = function() {
  $('.dl-stub').each(function() {
   var e = t(this);
   if (e.redirectUrl) {
    this.title = e.redirectUrl;
    this.classList.add('t-ref-url');
   }
  });
 };
})();

$(function() {
 window.injectCSS = function(t) {
  var e = t.createElement('div');
  var n = t.createElement('div');
  return function(i) {
   if (!e.id) {
    e.id = 'injected-css';
    e.style.display = 'none';
    t.body.appendChild(e);
   }
   n.innerHTML = '<br><style>' + i + '</style>';
   e.appendChild(n.children[1]);
  };
 }(document);
});
;// ajax.js
function Ajax(a, t, e) {
 this.url = a;
 this.type = t;
 this.dataType = e;
 this.errors = {};
}

Ajax.prototype = {
 init: {},
 callback: {},
 state: {},
 request: {},
 params: {},
 form_token: BB.form_token,
 exec: function(a) {
  this.request[a.action] = a;
  a['form_token'] = this.form_token;
  $.ajax({
   url: this.url,
   type: this.type,
   dataType: this.dataType,
   data: a,
   success: ajax.success,
   error: ajax.error
  });
 },
 success: function(a) {
  var t = a.action;
  if (a.raw_output) {
   $('body').prepend(a.raw_output);
  }
  if (a.sql_log) {
   $('#sqlLog').prepend(a.sql_log + '<hr>');
  }
  if (a.update_ids) {
   for (var e in a.update_ids) {
    $('#' + e).html(a.update_ids[e]);
   }
  } else if (a.prompt_confirm) {
   if (window.confirm(a.confirm_msg)) {
    var r = ajax.request[t];
    r.confirmed = 1;
    ajax.exec(r);
   } else {
    ajax.clearActionState(t);
   }
  } else if (a.error_code) {
   ajax.showErrorMsg(a.error_msg);
   $('.loading-1').removeClass('loading-1').html('error');
  } else {
   ajax.callback[t](a);
   ajax.clearActionState(t);
  }
 },
 error: function(a, t) {},
 clearActionState: function(a) {
  ajax.state[a] = ajax.request[a] = '';
 },
 showErrorMsg: function(a) {
  bb_alert(a, true);
 },
 callInitFn: function(a) {
  a.stopPropagation();
  var t = ajax.params[$(this).attr('id')];
  var e = t.action;
  if (ajax.state[e] == 'readyToSubmit' || ajax.state[e] == 'error') {
   return false;
  } else {
   ajax.state[e] = 'readyToSubmit';
  }
  ajax.init[e](t);
 },
 setStatusBoxPosition: function(a) {
  var t = $(document).scrollTop();
  var e = $(document).scrollLeft() + $(window).width() - 8;
  var r = Math.max(0, e - a.width());
  a.css({
   top: t,
   left: r
  });
 },
 makeEditable: function(a, t) {
  var e = $('#' + a);
  var r = $('.editable', e);
  var o = $('#editable-tpl-' + t).html();
  r.hide().after(o);
  var i = $('.editable-inputs', e);
  if (t == 'input' || t == 'textarea') {
   $('.editable-value', i).val(r.data('editable_value') || $.trim(r.text()));
  }
  $('input.editable-submit', i).on('click', function() {
   var t = ajax.params[a];
   var e = $('.editable-value', '#' + a);
   t.value = e.length == 1 ? e.val() : e.filter(':checked').val();
   t.submit = true;
   ajax.init[t.action](t);
  });
  $('input.editable-cancel', i).on('click', function() {
   ajax.restoreEditable(a);
  });
  i.show().find('.editable-value').focus();
  e.removeClass('editable-container');
 },
 restoreEditable: function(a, t) {
  var e = $('#' + a);
  var r = $('.editable', e);
  $('.editable-inputs', e).remove();
  if (t) {
   r.text(t);
  }
  r.show();
  ajax.clearActionState(ajax.params[a].action);
  ajax.params[a].submit = false;
  e.addClass('editable-container');
 }
};

window.ajax = new Ajax('//' + location.host + '/forum/ajax.php', 'POST', 'json');

$(function() {
 $('#forum-moderators').one('click', function() {
  ajax.get_forum_mods(BB.FORUM_ID);
 });
});

ajax.get_forum_mods = function(a) {
 ajax.exec({
  action: 'get_forum_mods',
  forum_id: a
 });
};

ajax.callback.get_forum_mods = function(a) {
 $('#forum-moderators').removeClass('a-like').html(a.html);
};
;// bbcode.js
BB.local_link_reg = new RegExp('^https?://' + location.hostname + '/forum/', 'i');

BB.banned_img_hosts_reg = /keep4u|centrkino|flashrelease|hidebehind|imagebanana|imageshack|imagevenue|imgur|interfoto|ipicture|photobucket|tinypic|(youpic|upimg|sendpic)\.ru|(rimg|ifotki)\.info/i;

BB.initPost = function(e) {
 var t = $(e);
 BB.initQuotes(t);
 BB.initPostImages(t);
 BB.initSpoilers(t);
 //BB.initLinks(t);
};

BB.initQuotes = function(e) {
 if (e.hasClass('signature')) {
  return;
 }
 $('div.q', e).each(function() {
  var e = $(this);
  var t;
  if (t = e.children('u.q-post:first').text()) {
   var n = 'viewtopic.php?p=' + t + '#' + t;
   e.siblings('div.q-head').find('span').prepend('<img src="' + BB.IMG_URL + '/icon_latest_reply.gif" class="icon2" alt="->">').wrap('<a href="' + n + '" title="Перейти к цитируемому сообщению"></a>');
  }
 });
};

BB.getBannedImageHtml = function(e) {
 return '' + '<a href="/go/2" target="_blank" title="Прочитайте правила размещения картинок!">' + '<img src="' + BB.SMILES_URL + '/tr_oops.gif' + '" class="' + e + '" alt="!">' + '</a>';
};

BB.getBrokenImageHtml = function(e, t) {
 var n = BB.IMG_URL + '/broken_image_1.svg';
 return '<img src="' + n + '" class="' + e + ' post-img-broken" title="' + t + '" alt="x">';
};

BB.getBrokenImageLinkifiedHtml = function(e, t) {
 return '<a href="' + t + '" target="_blank">' + BB.getBrokenImageHtml(e, t) + '</a>';
};

BB.initPostImages = function(e) {
 if (BB.opt_js.h_post_i) {
  return;
 }
 var t = BB.opt_js.sp_op ? [] : $('div.sp-body var.postImg', e);
 $('var.postImg', e).not(t).each(function() {
  var e = this;
  var t = e.title;
  var n = e.className;
  if (t.match(BB.banned_img_hosts_reg)) {
   var i = BB.getBannedImageHtml(n);
   $(e).replaceWith(i);
   return;
  }
  var r = document.createElement('img');
  r.onerror = function() {
   var e = this;
   var t = e.parentNode.nodeName === 'A' ? BB.getBrokenImageHtml(n, e.src) : BB.getBrokenImageLinkifiedHtml(n, e.src);
   $(e).replaceWith(t);
  };
  r.className = n;
  r.alt = 'pic';
  if (t.includes('.fastpic.')) {
   t += '?r=1';
  }
  r.src = t;
  $(e).replaceWith(r);
 });
};

BB.initSpoilers = function(e) {
 if (e.hasClass('signature')) {
  return;
 }
 e.off('.spoiler');
 e.on('click.spoiler', 'div.sp-head', function(e) {
  var t = $(this);
  var n = t.next('div.sp-body');
  var i = t.parent('div.sp-wrap');
  if (!n.hasClass('inited')) {
   BB.initPostImages(n);
   var r = $('<div class="sp-fold clickable">[Свернуть]</div>').on('click', function() {
    $.scrollTo(t, {
     duration: 200,
     axis: 'y',
     offset: -200
    });
    t.click().animate({
     opacity: .1
    }, 500).animate({
     opacity: 1
    }, 700);
   });
   n.append(r).addClass('clearfix inited');
   n.parent().addClass('clearfix');
  }
  if (e.shiftKey) {
   t.css('user-select', 'none');
   e.stopPropagation();
   e.shiftKey = false;
   var s = t.hasClass('unfolded');
   $('div.sp-head', $(n.parents('td')[0])).not('.sp-no-auto-open').filter(function() {
    return $(this).hasClass('unfolded') ? s : !s;
   }).click();
  } else {
   t.toggleClass('unfolded');
   i.toggleClass('sp-opened');
   n.slideToggle('fast');
  }
 });
};

BB.initLinks = function(e) {
 var t = e.hasClass('signature');
 $('a.postLink', e).each(function() {
  if (BB.local_link_reg.test(this.href)) {
   return;
  }
  var e = $(this);
  var n = e.attr('href');
  var i;
  if (t) {
   BB.build_external_link(e);
  } else if (i = n.match(/^https?:\/\/(?:www\.)?(?:youtube\.com\/|youtu\.be)(?!user)(?:.*?)(?:[=/])([\w\-]{11})(?!\w)/i)) {
   BB.build_video_link(e, 'YouTube', i[1], n);
  } else if (i = n.match(/^https?:\/\/vimeo\.com\/(\d+)$/i)) {
   BB.build_video_link(e, 'Vimeo', i[1], n);
  } else if (/^https?:\/\/soundcloud\.com\//.test(n)) {
   var r = BB.build_m_link(e);
   e.on('click', function(e) {
    e.preventDefault();
    if (typeof window.SC === 'undefined') {
     $.ajax({
      url: "https://connect.soundcloud.com/sdk/sdk-3.3.2.js",
      dataType: "script",
      cache: true,
      global: false,
      success: function() {
       BB.embedSoundcloudObject(r, n);
      }
     });
    } else {
     BB.embedSoundcloudObject(r, n);
    }
   });
  } else {
   BB.build_external_link(e);
  }
 });
};

BB.build_external_link = function(e) {
 e.addClass('p-ext-link');
};

BB.build_m_link = function(e) {
 var t = $('<a class="m-icon" target="_blank" title="Открыть в новой вкладке"></a>').attr('href', e.attr('href'));
 if (e.has('var.postImg').length) {
  t.addClass('m-icon-over-img');
 } else {
  t.css('display', 'inline-block');
 }
 return e.wrap('<span class="m-link"></span>').before(t).parent();
};

BB.build_video_link = function(e, t, n, i) {
 BB.build_m_link(e);
 e.on('click', function(r) {
  r.preventDefault();
  e.modal({
   mode: 'video',
   provider: t,
   video_id: n,
   url: i
  });
 });
 if (/^http/.test(e.html())) {
  e.html(t + ': ' + n);
 }
};

BB.embedSoundcloudObject = function(e, t) {
 var n = $('<div style="clear: both; margin: 8px 0 2px;"><i class="loading-1"></i></div>');
 e.after(n).remove();
 window.SC.oEmbed(t, {
  auto_play: false
 }).then(function(e) {
  n.html(e.html);
 });
};

BBCode = function(e) {
 this.construct(e);
};

BBCode.prototype = {
 VK_TAB: 9,
 VK_PAGE_UP: 33,
 BRK_OP: '[',
 BRK_CL: ']',
 textarea: null,
 quoter: null,
 quoted_pid: null,
 collapseAfterInsert: false,
 replaceOnInsert: false,
 hotKeyClicked: false,
 construct: function(e) {
  this.textarea = e;
  this.tags = {};
  this.addTag('_quoter', function() {
   return '[quote="' + t.quoter + '"][qpost=' + t.quoted_pid + ']';
  }, '[/quote]\n', null, function() {
   t.collapseAfterInsert = true;
   return t._prepareMultiline(t.quoterText);
  });
  var t = this;
  $(e).on('keydown', function(e) {
   return t.onKeyPress(e, window.HTMLElement ? 'down' : 'press');
  });
  $(e).on('keypress', function(e) {
   return t.onKeyPress(e, 'press');
  });
 },
 onclickPoster: function(e, t) {
  var n = this.getSelection()[0];
  if (n) {
   this.quoter = e;
   this.quoted_pid = t;
   this.quoterText = n;
   this.insertTag('_quoter');
  } else {
   this.insertAtCursor("[b]" + e + '[/b]\n');
  }
  return false;
 },
 onclickQuoteSel: function() {
  var e = this.getSelection()[0];
  if (e) {
   this.insertAtCursor('[quote]' + e + '[/quote]\n');
  } else {
   alert('Вы не выбрали текст для цитирования');
  }
  return false;
 },
 emoticon: function(e) {
  if (e) {
   this.insertAtCursor(' ' + e + ' ');
  } else {
   return false;
  }
  return false;
 },
 getSelection: function() {
  var e = window.getSelection();
  e = "" + e;
  e = e.replace("/^s+|s+$/g", "");
  return [ e, null ];
 },
 insertAtCursor: function(e) {
  var t = this.textarea;
  t.focus();
  if (document.selection && document.selection.createRange) {
   var n = document.selection.createRange();
   if (!this.replaceOnInsert) {
    n.collapse();
   }
   n.text = e;
  } else if (t.setSelectionRange) {
   var i = this.replaceOnInsert ? t.selectionStart : t.selectionEnd;
   var r = t.selectionEnd;
   var s = t.value.substr(0, i);
   var a = t.value.substr(r);
   t.value = s + e + a;
   t.setSelectionRange(i + e.length, i + e.length);
  } else {
   t.value += e;
  }
  setTimeout(function() {
   t.focus();
  }, 100);
 },
 surround: function(e, t, n) {
  var i = this.textarea;
  i.focus();
  if (!n) {
   n = function(e) {
    return e;
   };
  }
  var r = this.getSelection();
  var s = r[0];
  if (s == null) {
   return false;
  }
  var a = s != null && s != '';
  if (i.setSelectionRange) {
   var o = i.selectionStart;
   var l = i.selectionEnd;
   var c = i.scrollTop;
   var u = i.value.substr(0, o);
   var f = i.value.substr(l);
   var d = n(i.value.substr(o, l - o));
   var p = e + d + t;
   i.value = u + p + f;
   if (d != '') {
    i.setSelectionRange(o, o + p.length);
    a = true;
   } else {
    i.setSelectionRange(o + e.length, o + e.length);
    a = false;
   }
   i.scrollTop = c;
   if (this.collapseAfterInsert) {
    i.setSelectionRange(o + p.length, o + p.length);
   }
  } else {
   i.value += e + s + t;
  }
  this.collapseAfterInsert = false;
  return a;
 },
 _cancelEvent: function(e) {
  if (e.preventDefault) {
   e.preventDefault();
  }
  if (e.stopPropagation) {
   e.stopPropagation();
  }
  return e.returnValue = false;
 },
 onKeyPress: function(e) {
  var t = String.fromCharCode(e.keyCode ? e.keyCode : e.charCode);
  for (var n in this.tags) {
   var i = this.tags[n];
   if (i.ctrlKey && !e[i.ctrlKey + "Key"]) {
    continue;
   }
   if (!i.key || t.toUpperCase() != i.key.toUpperCase()) {
    continue;
   }
   if (e.type == "keydown") {
    this.insertTag(n);
   }
   return this._cancelEvent(e);
  }
  if (e.keyCode == this.VK_TAB && !e.shiftKey && e.ctrlKey && !e.altKey) {
   this.textarea.form.post.focus();
   return this._cancelEvent(e);
  }
  return true;
 },
 addTag: function(e, t, n, i, r) {
  var s = {};
  s.id = e;
  s.open = t;
  s.close = n;
  s.key = i;
  s.ctrlKey = "ctrl";
  s.multiline = r;
  s.elt = this.textarea.form[e];
  this.tags[e] = s;
  var a = s.elt;
  if (a) {
   var o = this;
   if (a.type && a.type.toUpperCase() == "BUTTON") {
    $(a).on('click', function() {
     o.insertTag(e);
     return false;
    });
   }
   if (a.tagName && a.tagName.toUpperCase() == "SELECT") {
    $(a).on('change', function() {
     o.insertTag(e);
     return false;
    });
   }
  } else {
   if (e && e.indexOf('_') != 0) {
    return alert("addTag('" + e + "'): no such element in the form");
   }
  }
 },
 insertTag: function(e) {
  var t = this.tags[e];
  if (!t) {
   return alert("Unknown tag ID: " + e);
  }
  var n = t.open;
  if (typeof t.open == "function") {
   n = t.open(t.elt);
  }
  var i = t.close != null ? t.close : "/" + n;
  if (n.charAt(0) != this.BRK_OP) {
   n = this.BRK_OP + n + this.BRK_CL;
  }
  if (i && i.charAt(0) != this.BRK_OP) {
   i = this.BRK_OP + i + this.BRK_CL;
  }
  this.surround(n, i, !t.multiline ? null : t.multiline === true ? this._prepareMultiline : t.multiline);
 },
 _prepareMultiline: function(e) {
  e = e.replace(/\s+$/, '');
  e = e.replace(/^([ \t]*\r?\n)+/, '');
  if (e.indexOf("\n") >= 0) {
   e = "\n" + e + "\n";
  }
  return e;
 }
};
;// bb.init.js
$(function() {
 new BB.Guid().init();
 $('body').append($('div.menu-sub'));
 $('a.menu-root').on('click', function(t) {
  t.preventDefault();
  Menu.clicked($(this));
  return false;
 }).on('mouseenter', function() {
  Menu.hovered($(this));
  return false;
 }).on('mouseleave', function() {
  return false;
 });
 $('div.menu-sub').on('mousedown', function(t) {
  t.stopPropagation();
 }).find('a').on('click', function(t) {
  Menu.hide(t);
 });
 $('input.error').one('focus', function() {
  $(this).removeClass('error');
 });
 var t = $("#ajax-loading");
 var e = $("#ajax-error");
 $(document).ajaxStart(function() {
  e.hide();
  t.show();
  ajax.setStatusBoxPosition(t);
 });
 $(document).ajaxStop(function() {
  t.hide();
 });
 $(document).ajaxError(function(t, n) {
  var a = n.status;
  var i = n.statusText;
  if (a == 200) {
   a = '';
   i = 'invalid data format';
  }
  e.html("Ajax error in: <i>" + ajax.url + "</i><br><b>" + a + " " + i + "</b>").show();
  ajax.setStatusBoxPosition(e);
 });
 $('var.ajax-params').each(function() {
  var t = JSON.parse($(this).html());
  t.event = t.event || 'dblclick';
  ajax.params[t.id] = t;
  var e = $("#" + t.id);
  e.on(t.event, ajax.callInitFn);
  if (t.event == 'click' || t.event == 'dblclick') {
   e.addClass('editable-container');
  }
 });
 $(document).on('click', '.dl-stub', BB.downloadTorrent);
 $(document).on('click', '.magnet-link', BB.downloadMagnet);
 $('#jumpbox-wrap').html([ '<select>', '<option style="width: 250px;">&nbsp;&raquo;&raquo; Выберите форум для перехода &nbsp;</option>', '</select>' ].join()).one('click', function() {
  $('option', this).html('&nbsp;&nbsp; Загружается... &nbsp;');
  $(this).load('/html/ajax/jumpbox_user.html', function() {
   var t = $('select', this);
   t.on('change', function t() {
    window.location.href = 'viewforum.php?f=' + $(this).val();
   });
   setTimeout(function() {
    try {
     var e = document.createEvent('MouseEvents');
     e.initMouseEvent('mousedown', true, true, window);
     t[0].dispatchEvent(e);
    } catch (t) {}
   }, 50);
  });
 });
 $('#footer-info-links').on('click', 'a', function() {
  $(this).attr({
   target: '_blank'
  });
 });
 $('.ext-links a').each(function() {
  BB.build_external_link($(this));
 });
 $(document).on('click', 'a', function() {
  var t = $(this);
  if (t.hasClass('ref-link')) {
   $(this).attr({
    target: '_blank'
   });
  }
 });
 var n = [ 'chrome.google.com/', 'addons.mozilla.org/' ];
 function a(t) {
  for (var e = 0; e < n.length; e++) {
   if (t.includes(n[e])) {
    return true;
   }
  }
  if ('disableRefLinks' in BB && BB.disableRefLinks === true) {
   return true;
  }
  return false;
 }
 $(document).on('click mousedown touchstart', 'a.p-ext-link:not(.p-ext-link-initialized)', function t() {
  var e = $(this);
  var n = e.attr('href');
  e.attr({
   target: '_blank'
  });
  if (n.toLowerCase().startsWith('http') && !a(n)) {
   var i = {
    url: n
   };
   var r = e.parents('[data-ext_link_data]');
   var o = r.data('ext_link_data');
   if ($.isPlainObject(o)) {
    i = $.extend(i, o);
   }
   var s = 'out.php?' + $.param(i);
   e.attr({
    href: s
   });
  }
  e.addClass('p-ext-link-initialized');
 });
 function i() {
  $('.at-base').remove();
 }
 function r() {
  i();
 }
 setTimeout(r, 1500);
 setInterval(r, 3e3);
 $('#cse-search-btn, #cse-search-btn-top').on('click', function() {
  var t = $(this).data('query_input_id');
  var e = $('#' + t).val();
  if (e == '') {
   $('#' + t).addClass('hl-err-input').focus();
   return false;
  }
  $('#cse-text-match').val(e);
  $('#cse-search-box').submit();
  return false;
 });
 $('#search-text').on('mousedown keypress', function() {
  if ($(this).hasClass('hl-err-input')) {
   $(this).removeClass('hl-err-input');
  }
 });
 $('#search-menu').on('change', function() {
  $('#quick-search').submit();
 });
 $('#quick-search').on('submit', function() {
  var t = $(this);
  var e = $('#search-menu').val();
  var n = $('#search-menu option:selected').data();
  var a = $.trim($('#search-text').val());
  var i = [];
  if (a == '' && e != 'search-tr') {
   BB.hl_quick_search_err();
   return false;
  }
  var r = encodeURIComponent(a);
  switch (e) {
  case 'search-tr':
  case 'search-all':
   var o = n.action;
   if (n.forum_id != null) {
    i.push('f=' + n.forum_id);
   }
   if (r != '') {
    i.push('nm=' + r);
   }
   if (i.length) {
    o += '?' + i.join('&');
   }
   t.attr({
    action: o
   });
   break;

  case 'cse':
   $('#cse-search-btn-top').click();
   return false;

  case 'wiki':
   var s = 'http://rutracker.wiki/' + encodeURIComponent('Служебная:Search') + '?fulltext=1&search=' + r;
   post2url(s, {
    target: '_blank'
   });
   return false;

  case 'duckduckgo':
   BB.externalSiteSearch('duckduckgo', a);
   return false;

  case 'hash':
   if (/^[a-fA-F0-9]{40}$/.test(a)) {
    window.location.href = 'viewtopic.php?h=' + a;
   } else {
    BB.hl_quick_search_err();
   }
   return false;
  }
 });
 $('.ext-site-search').on('click', function() {
  var t = $(this);
  var e = t.data('query_input_id');
  var n = $('#' + e).val();
  if (n == '') {
   $('#' + e).addClass('hl-err-input').focus();
   return false;
  }
  var a = t.data('search_type');
  BB.externalSiteSearch(a, n);
  return false;
 });
 var o;
 var s = function(t) {
  var e = function(t) {
   return decodeURIComponent(t.replace(/\+/g, ' '));
  };
  var n = Object.create(null);
  var a = /([^&=]+)=?([^&]*)/g;
  var i;
  while (i = a.exec(t)) {
   n[e(i[1])] = e(i[2]);
  }
  return n;
 };
 BB.getUrlParam = function(t) {
  if (!o) {
   o = s(window.location.search.substring(1));
  }
  return o[t];
 };
 $('.user-is-seeding-icon').attr('title', 'Вы на раздаче');
 $('.keeper-is-seeding-icon').attr('title', 'Хранитель на раздаче');
 BB.build_share_buttons();
 if (BB.form_token) {
  $('form.tokenized').append('<input type="hidden" name="form_token" value="' + BB.form_token + '">');
 }
 var c = $('.poster_info:first');
 if (c.length) {
  injectCSS([ '.post_wrap { max-width: ' + Math.round($(window).width() - c.outerWidth() - 32) + 'px }' ].join('\n'));
 }
 $('div.post_body, div.signature').each(function() {
  BB.initPost(this);
 });
 $(document).on('click', 'a', function() {
  var t = this;
  if (t.classList.contains('topics-started')) {
   var e = 'myto';
   var n = BB.localStorage.get(e);
   if (n) {
    t.href += '&' + e + '=' + n;
   }
  }
 });
 $('.highlight-cyrillic').each(function() {
  BB.highlightCyrillic(this);
 });
});
;// unread_topics.js
$(function() {
 var t = 20;
 var n = $('.open-all-unread-topics');
 function i() {
  n.text('Перезагрузить страницу').attr({
   title: ''
  });
  n.off('click').on('click', function() {
   window.location.reload();
  });
 }
 function o() {
  return !!document.querySelector('.t-is-unread');
 }
 function e() {
  var t = $(this);
  t.removeClass('t-is-unread');
  if (!o()) {
   i();
  }
  t.find('img').attr({
   src: BB.IMG_URL + '/icon_latest_reply.gif'
  });
 }
 function c() {
  var n = $('.t-is-unread').slice(0, t);
  if (!n.length) {
   i();
   return;
  }
  var o = 0;
  n.each(function() {
   var t = this;
   t.target = '_blank';
   setTimeout(function() {
    t.click();
   }, o);
   o += 1e3;
  });
 }
 function r() {
  BB.Cookies.set(BB.COOKIE_MARK, 'all_forums', 'SESSION');
  window.location.reload();
 }
 $('.mark-all-forums-read').on('click', r);
 if (o()) {
  n.show();
  $('.t-is-unread').on('click', e);
  n.on('click', c);
  n.show().attr({
   title: 'Требует отключения блокировщика всплывающих окон! До ' + t + '-ти вкладок за один раз'
  });
 }
});
;// file-tree.js
(function() {
 var i = [ 'ext-group-1', 'ext-group-2' ];
 var t = [ 8, 35, 31, 22, 23, 37 ];
 var e = function(i, t) {
  var e = i.length;
  while (e--) {
   if (i[e] !== t[e]) {
    return false;
   }
  }
  return true;
 }, r = function(i) {
  return Function.prototype.call.bind(i);
 }, n = function(i) {
  return function(t, e) {
   s(t, e, i);
  };
 }, s = r([].forEach), l = r([].slice);
 window.FileTree = function(i) {
  this.container_id = '';
  this.controls_id = '';
  this.load_from = '';
  this.post_data = {};
  this.cat_id = 0;
  this.is_inited = false;
  this.$container_el = null;
  this.$ctl_li = null;
  this.ftree_root_el = null;
  this.ul_with_children = [];
  this.li_dirs = [];
  this.li_files = [];
  this.sort_by = '';
  this.sorted_cache = {};
  this.f_size_grouped = {};
  this.each = n(this);
  $.extend(this, i);
  this.cat_id = Number(this.cat_id);
  this.highlight_non_1251_in_filenames = t.indexOf(this.cat_id) !== -1;
 };
 FileTree.prototype = {
  init: function() {
   if (this.is_inited) {
    throw new Error('already inited');
   }
   this.is_inited = true;
   this.init_container_el();
   this.get_file_list();
  },
  init_container_el: function() {
   this.$container_el = $('#' + this.container_id);
   if (!this.$container_el.length) {
    throw new Error('container el not found. container_id: ' + this.container_id);
   }
  },
  get_file_list: function() {
   if (this.load_from) {
    $.ajax({
     type: $.isEmptyObject(this.post_data) ? 'GET' : 'POST',
     url: this.load_from,
     data: this.post_data,
     success: this.build_file_tree.bind(this)
    });
   } else {
    this.build_file_tree(this.$container_el.html());
   }
  },
  build_file_tree: function(i) {
   var t = this;
   var e = this.each;
   var r = this.create_list_fragment(i);
   this.ftree_root_el = r.firstChild;
   i = null;
   var n = r.querySelectorAll('ul');
   e(n, function(i) {
    var r = l(i.children);
    t.ul_with_children.push([ i, r ]);
    e(r, function(i) {
     if (i.className == 'dir') {
      Object.defineProperty(i, 'ftreeDirSize', {
       value: 0,
       writable: true
      });
      t.li_dirs.push(i);
     } else {
      i.className = 'file';
      t.li_files.push(i);
     }
    });
   });
   this.initial_sort();
   e(this.li_files, function(i) {
    var t = i.firstChild.children, e = t[0], r = t[1], n = t[2];
    var s = parseInt(n.innerHTML);
    r.textContent = ' ' + BB.humnSize(s) + ' ';
    var l = i.parentNode.parentNode;
    l.ftreeDirSize += s;
    this.highlight_fname_errors(e);
   });
   e(this.li_dirs, function(i) {
    var t = i.firstChild.firstChild;
    this.highlight_fname_errors(t);
    this.highlightDirWithErrors(i);
    this.calc_dir_size(i);
   });
   this.$container_el.empty().append(this.ftree_root_el);
   r = null;
   $(this.ftree_root_el).on('click', 'li.dir > div', function() {
    $(this).parent().toggleClass('collapsed');
   });
   this.bind_controls();
  },
  create_list_fragment: function(i) {
   i = i || 'Не удалось получить список';
   if (i.substr(0, 3) != '<ul') {
    this.$container_el.html(i);
    throw new Error('invalid list_html');
   }
   var t = document.createElement('div');
   t.innerHTML = i;
   return t;
  },
  initial_sort: function() {
   this.ul_with_children.forEach(function(i) {
    var t = i[0];
    var r = i[1];
    var n = r.slice();
    var s = r.length;
    if (s > 1) {
     n.sort(function(i, t) {
      var e = i.className == 'dir';
      var r = t.className == 'dir';
      if (e && !r) {
       return -1;
      } else if (r && !e) {
       return 1;
      } else {
       var n = i.firstChild.firstChild.innerHTML;
       var s = t.firstChild.firstChild.innerHTML;
       return n.localeCompare(s);
      }
     });
     if (!e(r, n)) {
      for (var l = 0; l < s; l++) {
       t.appendChild(n[l]);
      }
     }
    }
   });
   this.sort_by = 'name_asc';
   this.sorted_cache[this.sort_by] = this.ftree_root_el;
  },
  calc_dir_size: function(i) {
   var t = i.ftreeDirSize;
   var e = i.querySelectorAll('li.dir');
   s(e, function(i) {
    t += i.ftreeDirSize;
   });
   i.querySelector('s').textContent = ' ' + BB.humnSize(t);
  },
  highlight_fname_errors: function(i) {
   var t = i.innerHTML + '';
   if (/~uTorrentPartFile|padding_file/i.test(t)) {
    i.className = 'ext-group-1';
   } else if (/\.(wav|url|torrent)$|Thumbs\.db$/i.test(t)) {
    i.className = 'ext-group-1';
   } else if (/\.(zip|rar|7z)$/i.test(t)) {
    i.className = 'ext-group-2';
   }
   if (this.highlight_non_1251_in_filenames) {
    i.innerHTML = t.highlight_non_1251();
   }
  },
  highlightDirWithErrors: function(t) {
   for (var e = 0; e < i.length; e++) {
    var r = i[e];
    if (t.querySelector('b.' + r) !== null) {
     t.firstChild.className = r;
     return;
    }
   }
  },
  bind_controls: function() {
   if (this.controls_id) {
    var i = $('#' + this.controls_id).find('li');
    this.each(i, function(i) {
     var t = $(i);
     var e = t.data('action');
     var r = this.do_control_action.bind(this, e, t);
     t.on('click', r);
    });
   }
  },
  do_control_action: function(i, t) {
   if (!this.$ctl_li) {
    this.$ctl_li = $('ul.ftree > li.dir li.dir', this.$container_el);
   }
   switch (i) {
   case 'collapse':
    this.$ctl_li.addClass('collapsed');
    break;

   case 'expand':
    this.$ctl_li.removeClass('collapsed');
    break;

   case 'toggle':
    this.$ctl_li.toggleClass('collapsed');
    break;

   case 'toggle_win_size':
    this.$container_el.toggleClass('ftree-windowed');
    break;

   case 'sort_by':
    var e = t.data('sort_type');
    this.switch_to_sorted_by(e);
    break;

   case 'compare':
    this.compare_with_other_tor();
    break;

   default:
    throw new Error('invalid action: ' + i);
   }
  },
  switch_to_sorted_by: function(i) {
   if (this.sort_by == i) {
    return;
   }
   switch (i) {
   case 'name_asc':
   case 'size_desc':
    if (!this.sorted_cache[i]) {
     this.sorted_cache[i] = this.resort_by[i].call(this);
    }
    this.sort_by = i;
    this.$container_el.children().hide();
    $(this.sorted_cache[i]).show();
    break;

   default:
    throw new Error('invalid sort_type: ' + i);
   }
  },
  resort_by: {
   size_desc: function() {
    return this.get_flat_file_list('desc');
   }
  },
  get_flat_file_list: function(i) {
   this.sort_li_files_by_size(i);
   var t = [];
   for (var e = 0, r; r = this.li_files[e++]; ) {
    var n = r.firstChild.children;
    var s = n[2].innerHTML;
    var l = n[0].textContent;
    t.push('<i>' + s + '</i><b>' + l + '</b>');
   }
   var o = $('<div class="f-bysize"></div>').html('<div>' + t.join('</div><div>') + '</div>');
   this.$container_el.append(o);
   return o;
  },
  sort_li_files_by_size: function(i) {
   var t = i == 'asc';
   this.li_files.sort(function(i, e) {
    var r = parseInt(i.firstChild.children[2].innerHTML);
    var n = parseInt(e.firstChild.children[2].innerHTML);
    return t ? r - n : n - r;
   });
  },
  compare_with_other_tor: function(i) {
   var t = i || prompt('Ссылка на тему или TOPIC_ID сравниваемой раздачи') || '';
   t = Number(t.replace(/[^\d]/g, ''));
   if (t) {
    $.ajax({
     type: 'POST',
     url: 'viewtorrent.php',
     data: {
      t: t
     },
     success: this.do_comparison_with.bind(this, t)
    });
   } else {
    bb_alert('Укажите ссылку на тему или TOPIC_ID сравниваемой раздачи');
   }
  },
  do_comparison_with: function(i, t) {
   if (!t || t.substr(0, 3) != '<ul') {
    return bb_alert('Не удалось загрузить список файлов из раздачи ' + i + '<br><br>' + t);
   }
   this.build_files_grouped_by_size();
   var e = this.f_size_grouped;
   var r = {};
   var n = {};
   var s = {};
   var l = {};
   var o = {};
   var a = {};
   Object.keys(e).forEach(function(i) {
    a[i] = true;
   });
   var h = /<b>([^<]+?)<\/b><s><\/s><i>(\d+)<\/i>/g;
   var c;
   while ((c = h.exec(t)) != null) {
    var _ = c[1];
    var f = c[2];
    if (r[f] === undefined) {
     r[f] = [ _ ];
    } else {
     r[f].push(_);
    }
    a[f] = true;
   }
   Object.keys(a).forEach(function(i) {
    if (e[i] !== undefined && r[i] !== undefined) {
     n[i] = e[i];
     s[i] = r[i];
    } else {
     if (e[i] !== undefined) {
      e[i].forEach(function(i) {
       l[i] = true;
      });
     }
     if (r[i] !== undefined) {
      r[i].forEach(function(i) {
       o[i] = true;
      });
     }
    }
   });
   this.build_comparison_result(i, n, s, l, o);
  },
  build_comparison_result: function(i, t, e, r, n) {
   var s = Object.keys(e).sort(function(i, t) {
    return t - i;
   });
   var l = $('#cmp-results');
   var o = $('#cmp-result-tpl').clone();
   o.find('a.cmp-topic').text(i).attr('href', 'viewtopic.php?t=' + i);
   o.find('img.cmp-hide-btn').on('click', function() {
    o.remove();
    if (!l.children().length) {
     l.hide();
    }
   });
   var a = [];
   var h = 0;
   var c = 0;
   s.forEach(function(i) {
    var r = t[i].join('</li><li>');
    var n = e[i].join('</li><li>');
    h += t[i].length;
    c += e[i].length;
    a.push([ '<td class="this-f"><ul><li>' + r + '</li></ul></td>', '<td class="other-f"><ul><li>' + n + '</li></ul></td>' ].join(''));
   });
   if (a.length) {
    o.find('tbody.cmp-same').append('<tr>' + a.join('</tr><tr>') + '</tr>');
    o.find('.cmp-same-count').show().find('b').html(h + ' / ' + c);
   } else {
    o.find('.cmp-same-none').show();
   }
   var _ = Object.keys(r).sort();
   var f = _.length;
   if (f) {
    o.find('td.cmp-this-diff').append('<ul><li>' + _.join('</li><li>') + '</li></ul>');
    o.find('tbody.cmp-diff').show();
   }
   var d = Object.keys(n).sort();
   var u = d.length;
   if (u) {
    o.find('td.cmp-other-diff').append('<ul><li>' + d.join('</li><li>') + '</li></ul>');
    o.find('tbody.cmp-diff').show();
   }
   if (f || u) {
    o.find('.cmp-diff-count').show().find('b').html(f + ' / ' + u);
   }
   o.prependTo(l).show();
   l.show();
  },
  build_files_grouped_by_size: function() {
   if ($.isEmptyObject(this.f_size_grouped)) {
    this.each(this.li_files, function(i) {
     var t = i.querySelector('i').innerHTML;
     var e = i.querySelector('b').textContent;
     if (this.f_size_grouped[t] === undefined) {
      this.f_size_grouped[t] = [ e ];
     } else {
      this.f_size_grouped[t].push(e);
     }
    });
   }
  }
 };
})();

function hideshow(me)
{
	var thisvar = me.next('div');
	if (thisvar.css('display') == 'none')
	{
		thisvar.html(thisvar.next('textarea').val());
		thisvar.css('display', 'block');
		me.css('background-image', "url('data:image/gif;base64,R0lGODlhCQAJAMQeAOLt+ff8//z+/4CRxo2by7vF6a254X6PxICQw87a74CQxuXo84CQxM/b7/H6/v7+/oGRxouayoGSxv7+/8LN7IqZyv7//4KSxur0/MrV74OTx9Ld8trl9gwMDP///wAAACH5BAEAAB4ALAAAAAAJAAkAAAU4oFcpwzFAkWgUVLZxCQGxLgdgGtS+t6NJmY5QOEFcNo/kZGLRXGwYR0DQjDSiU8uCIJJIGJdLKgQAOw==')");
	}
	else
	{
		thisvar.html('');
		thisvar.css('display', 'none');
		me.css('background-image', "url('data:image/gif;base64,R0lGODlhCQAJAMQfAIqZyoGSxv3+/trl84CQxYCRxn6PxMXQ7efq9H+Pwtnk8oKTxoCQxKy44QAAANvl9rvG6fD5/o2by4GRxvb8//v9//7+/ubw+v39/ouayoKSxoOTx/7+/wwMDP///////yH5BAEAAB8ALAAAAAAJAAkAAAU84AdoGkNmX4Z4HldRirSxXMdF1zK7nXU9mk2t4+h0BIlNhWPpYTCBDQXXwRwggczgJ8BAGhLRZGIoEFAhADs=')");
	}
};
