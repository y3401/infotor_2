function insert(aTag, eTag) {
  //var input = document.forms['tagable'].elements['descr'];
var input;
if (document.forms['tagable'].elements['descr'])
	input = document.forms['tagable'].elements['descr'];
else
	input = document.forms['tagable'].elements['text'];
//
  input.focus();
  /* fur Internet Explorer */
  if(typeof document.selection != 'undefined') {
    /* Einfugen des Formatierungscodes */
    var range = document.selection.createRange();
    var insText = range.text;
    range.text = aTag + insText + eTag;
    /* Anpassen der Cursorposition */
    range = document.selection.createRange();
    if (insText.length == 0) {
      range.move('character', -eTag.length);
    } else {
      range.moveStart('character', aTag.length + insText.length + eTag.length);
    }
    range.select();
  }
  /* fur neuere auf Gecko basierende Browser */
  else if(typeof input.selectionStart != 'undefined')
  {
    /* Einfugen des Formatierungscodes */
    var start = input.selectionStart;
    var end = input.selectionEnd;
    var insText = input.value.substring(start, end);
    input.value = input.value.substr(0, start) + aTag + insText + eTag + input.value.substr(end);
    /* Anpassen der Cursorposition */
    var pos;
    if (insText.length == 0) {
      pos = start + aTag.length;
    } else {
      pos = start + aTag.length + insText.length + eTag.length;
    }
    input.selectionStart = pos;
    input.selectionEnd = pos;
  }
  /* fur die ubrigen Browser */
  else
  {
    /* Abfrage der Einfugeposition */
    var pos;
    var re = new RegExp('^[0-9]{0,3}$');
    while(!re.test(pos)) {
      pos = prompt("Вставить на место (0.." + input.value.length + "):", "0");
    }
    if(pos > input.value.length) {
      pos = input.value.length;
    }
    /* Einfugen des Formatierungscodes */
    var insText = prompt("пожалйуста выделите текст для форматирования:");
    input.value = input.value.substr(0, pos) + aTag + insText + eTag + input.value.substr(pos);
  }
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    {
    c_start=c_start + c_name.length+1;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    }
  }
return "";
}

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
}

function filter_bad_words(value, form)
{
	$.post('/filter.php',
	{ajax: value},
	function(data)
	{
		if (data=='0')
		{
			alert('Текст содержит запрещенные ссылки/фразы/текст!');
			window.open('/filter.php');
		}
		else
		{
			$(form).unbind('submit').submit();
		}
	});
}