;// jquery.min.js
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){
    "use strict";
    "object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){
        if(!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)}:b(a)
    }
    ("undefined"!=typeof window?window:this,
function(a,b){
            "use strict";
            var c=[],
            d=a.document,
            e=Object.getPrototypeOf,
            f=c.slice,
            g=c.concat,
            h=c.push,
            i=c.indexOf,
            j={},
            k=j.toString,
            l=j.hasOwnProperty,
            m=l.toString,
            n=m.call(Object),
            o={};
function p(a,b){
    b=b||d;
    var c=b.createElement("script");
    c.text=a,b.head.appendChild(c).parentNode.removeChild(c)
}
var q="3.2.1",
    r=function(a,b){
        return new r.fn.init(a,b)
    },
    s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t=/^-ms-/,
    u=/-([a-z])/g,
    v=function(a,b){
        return b.toUpperCase()
    };
        r.fn=r.prototype={
            jquery:q,
            constructor:r,
            length:0,
            toArray:function(){
                return f.call(this)},
                get:function(a){
                    return null==a?f.call(this):a<0?this[a+this.length]:this[a]},
                    pushStack:function(a){
                        var b=r.merge(this.constructor(),a);
                        return b.prevObject=this,b
                    },
                        each:function(a){
                            return r.each(this,a)
                        },
                            map:function(a){
                                return this.pushStack(r.map(this,function(b,c){
                                    return a.call(b,c,b)
                                }))
                            },
                                    slice:function(){
                                        return this.pushStack(f.apply(this,arguments))
                                    },
                                        first:function(){
                                            return this.eq(0)
                                        },
                                            last:function(){
                                                return this.eq(-1)
                                            },
                                                eq:function(a){
                                                    var b=this.length,
                                                    c=+a+(a<0?b:0);
                                                    return this.pushStack(c>=0&&c<b?[this[c]]:[])},
                                                    end:function(){
                                                        return this.prevObject||this.constructor()},
                                                        push:h,
                                                        sort:c.sort,
                                                        splice:c.splice},
                                                        r.extend=r.fn.extend=function(){
                                                            var a,b,c,d,e,f,g=arguments[0]||{},
                                                            h=1,
                                                            i=arguments.length,
                                                            j=!1;
                                                            for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);
                                                            h<i;h++)
                                                            if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));
                                                            return g},
                                                            r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),
                                                            isReady:!0,
                                                            error:function(a){
                                                                throw new Error(a)
                                                            },
                                                                noop:function(){
                                                                },isFunction:function(a){
                                                                    return"function"===r.type(a)},
                                                                    isWindow:function(a){
                                                                        return null!=a&&a===a.window},
                                                                        isNumeric:function(a){
                                                                            var b=r.type(a);
                                                                            return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},
                                                                            isPlainObject:function(a){
                                                                                var b,c;
                                                                                return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},
                                                                                isEmptyObject:function(a){
                                                                                    var b;
                                                                                    for(b in a)
        return!1;
                                                                                    return!0},
                                                                                    type:function(a){
                                                                                        return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},
                                                                                    globalEval:function(a){
                                                                                        p(a)
                                                                                    },
                                                                                    camelCase:function(a){
                                                                                        return a.replace(t,"ms-").replace(u,v)
                                                                                    },
                                                                                    each:function(a,b){
                                                                                        var c,d=0;
                                                                                    if(w(a)){for(c=a.length;d<c;d++)
        if(b.call(a[d],d,a[d])===!1)
    break}else for(d in a)
        if(b.call(a[d],d,a[d])===!1)
    break;
                                                                                    return a
                                                                                },
                                                                                trim:function(a){
                                                                                    return null==a?"":(a+"").replace(s,"")},
                                                                                    makeArray:function(a,b){
                                                                                            var c=b||[];
                                                                                            return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},
                                                                                            inArray:function(a,b,c){
                                                                                                return null==b?-1:i.call(b,a,c)},
                                                                                                merge:function(a,b){
                                                                                                    for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];
                                                                                                    return a.length=e,a},
                                                                                                    grep:function(a,b,c){
                                                                                                        for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);
                                                                                                        return e},
                                                                                                        map:function(a,b,c){
                                                                                                            var d,e,f=0,h=[];
                                                                                                            if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),
                                                                                                            null!=e&&h.push(e);
                                                                                                                else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);
                                                                                                                return g.apply([],h)},
                                                                                                                guid:1,
                                                                                                                proxy:function(a,b){
                                                                                                                    var c,d,e;
                                                                                                                    if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))
        return d=f.call(arguments,2),
                                                                                                                    e=function(){
                                                                                                                        return a.apply(b||this,d.concat(f.call(arguments)))},
                                                                                                                        e.guid=a.guid=a.guid||r.guid++,e},
                                                                                                                now:Date.now,support:o}),
                                                                                                                "function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),
                                                                                                                r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
                                                                                                                function(a,b){
                                                                                                                            j["[object "+b+"]"]=b.toLowerCase()
                                                                                                                        }
                                                                                                                );
function w(a){
    var b=!!a&&"length"in a&&a.length,c=r.type(a);
    return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}
    var x=function(a){
        var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,
        v=a.document,
        w=0,
        x=0,
        y=ha(),
        z=ha(),
        A=ha(),
        B=function(a,b){
            return a===b&&(l=!0),0
        },
        C={}.hasOwnProperty,
        D=[],
        E=D.pop,
        F=D.push,
        G=D.push,
        H=D.slice,
        I=function(a,b){
            for(var c=0,d=a.length;c<d;c++)
            if(a[c]===b)
        return c;
            return-1},
            J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K="[\\x20\\t\\r\\n\\f]",
            L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",
            N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",
            O=new RegExp(K+"+","g"),
            P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),
            Q=new RegExp("^"+K+"*,"+K+"*"),
            R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),
            S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),
            T=new RegExp(N),
            U=new RegExp("^"+L+"$"),
            V={ID:new RegExp("^#("+L+")"),
            CLASS:new RegExp("^\\.("+L+")"),
            TAG:new RegExp("^("+L+"|[*])"),
            ATTR:new RegExp("^"+M),
            PSEUDO:new RegExp("^"+N),
            CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),
            bool:new RegExp("^(?:"+J+")$","i")
            ,needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},
            W=/^(?:input|select|textarea|button)$/i,
            X=/^h\d$/i,
            Y=/^[^{]+\{\s*\[native \w/,
            Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,
            _=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),
            aa=function(a,b,c){
                var d="0x"+b-65536;
                return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
            },
            ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca=function(a,b){
                    return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},
                    da=function(){m()},
                    ea=ta(function(a){
                        return a.disabled===!0&&("form"in a||"label"in a)},
                        {dir:"parentNode",next:"legend"});
                        try{G.apply(D=H.call(v.childNodes),v.childNodes),
                            D[v.childNodes.length].nodeType}
        catch(fa)
                            {G={apply:D.length?function(a,b){
                                F.apply(a,H.call(b))
                                }
                                :function(a,b){
                                var c=a.length,d=0;
    while(a[c++]=b[d++]);a.length=c-1}
                            }
                            }

                                function ga(a,b,d,e){
                                    var f,h,j,k,l,o,r,s=b&&b.ownerDocument,
                                    w=b?b.nodeType:9;
                                    if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)
                                    return d;
                                    if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){
                                        if(11!==w&&(l=Z.exec(a)))
                                        if(f=l[1]){
        if(9===w){
                                            if(!(j=b.getElementById(f)))
                                            return d;
                                            if(j.id===f)
                                                return d.push(j),d}
                                            else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)
                                                return d.push(j),d
                                        }
                                            else{
                                                if(l[2])
                                                    return G.apply(d,b.getElementsByTagName(a)),d;
                                                if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)
                                                    return G.apply(d,b.getElementsByClassName(f)),d
                                            }
                                                if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){
                                                    if(1!==w)s=b,r=a;
                                                    else if("object"!==b.nodeName.toLowerCase()){
                                                        (k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;
    while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}
                                                    if(r)try{
                                                        return G.apply(d,s.querySelectorAll(r)),d}
                                                        catch(x){}
                                                        finally{k===u&&b.removeAttribute("id")}
                                                }
                                        }
                                                        return i(a.replace(P,"$1"),b,d,e)
                                    }
function ha(){
        var a=[];
    function b(c,e){
        return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}
return b}
function ia(a){
    return a[u]=!0,a}
function ja(a){
    var b=n.createElement("fieldset");
try{
        return!!a(b)}
        catch(c){
        return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}
function ka(a,b){
        var c=a.split("|"),e=c.length;
while(e--)d.attrHandle[c[e]]=b}
function la(a,b){
        var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;
        if(d)
        return d;
        if(c)while(c=c.nextSibling)
        if(c===b)
        return-1;
        return a?1:-1}
function ma(a){
    return function(b){
        var c=b.nodeName.toLowerCase();
        return"input"===c&&b.type===a}}
function na(a){
    return function(b){
        var c=b.nodeName.toLowerCase();
        return("input"===c||"button"===c)&&b.type===a}}
function oa(a){
    return function(b){
        return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}
function pa(a){
    return ia(function(b){
    return b=+b,ia(function(c,d){
        var e,f=a([],c.length,b),g=f.length    ;
while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}
function qa(a){
    return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){
        var b=a&&(a.ownerDocument||a).documentElement;
        return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){
        var b,e,g=a?a.ownerDocument||a:v;
        return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){
        return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){
        return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){
            return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){
        var b=a.replace(_,aa);
        return function(a){
                return a.getAttribute("id")===b}},d.find.ID=function(a,b){
        if("undefined"!=typeof b.getElementById&&p){
        var c=b.getElementById(a);
        return c?[c]:[]}}):(d.filter.ID=function(a){
        var b=a.replace(_,aa);
        return function(a){
        var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");
        return c&&c.value===b}},d.find.ID=function(a,b){
        if("undefined"!=typeof b.getElementById&&p){
        var c,d,e,f=b.getElementById(a);
        if(f){
        if(c=f.getAttributeNode("id"),c&&c.value===a)
        return[f]    ;
e=b.getElementsByName(a),d=0;
    while(f=e[d++])
        if(c=f.getAttributeNode("id"),c&&c.value===a)
        return[f]}
        return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){
            return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){
        var c,d=[],e=0,f=b.getElementsByTagName(a);
        if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);
        return d}
        return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){
        if("undefined"!=typeof b.getElementsByClassName&&p)
        return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){
        var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
        return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){
        if(b)while(b=b.parentNode)
        if(b===a)
        return!0;
        return!1},
        B=b?function(a,b){
        if(a===b)
        return l=!0,0;
        var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
        return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){
        if(a===b)
        return l=!0,0;
        var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];
        if(!e||!f)
        return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;
        if(e===f)
        return la(a,b);c=a;
    while(c=c.parentNode)g.unshift(c);c=b;
    while(c=c.parentNode)h.unshift(c);
    while(g[d]===h[d])d++;
        return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){
            return ga(a,null,null,b)},ga.matchesSelector=function(a,b){
        if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{
        var d=s.call(a,b);
        if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)
        return d}
        catch(e){}
        return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){
            return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
        var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
        return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){
            return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},
        ga.uniqueSort=function(a){
        var b,d=[],e=0,f=0;
        if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));
    while(e--)a.splice(d[e],1)}
        return k=null,a},e=ga.getText=function(a){
        var b,c="",d=0,f=a.nodeType;
        if(f){
        if(1===f||9===f||11===f){
        if("string"==typeof a.textContent)
        return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)
        return a.nodeValue}else while(b=a[d++])c+=e(b);
        return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){
            return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){
                return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){
        var b,c=!a[6]&&a[2];
        return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){
        var b=a.replace(_,aa).toLowerCase();
        return"*"===a?function(){
                    return!0}:function(a){
                        return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){
        var b=y[a+" "];
        return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){
                            return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){
                                return function(d){
        var e=ga.attr(d,a);
        return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},
        CHILD:function(a,b,c,d,e){
        var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
        return 1===d&&0===e?function(a){
            return!!a.parentNode}:function(b,c,i){
        var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;
        if(q){
        if(f){while(p){m=b;
    while(m=m[p])
        if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)
        return!1;o=p="only"===a&&!o&&"nextSibling"}
        return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];
    while(m=++n&&m&&m[p]||(t=n=0)||o.pop())
        if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];
    break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())
        if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))
    break;
        return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){
        var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);
        return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){
        var d,f=e(a,b),g=f.length;
    while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){
                return e(a,0,c)}):e}},pseudos:{not:ia(function(a){
        var b=[],c=[],d=h(a.replace(P,"$1"));
        return d[u]?ia(function(a,b,c,e){
        var f,g=d(a,null,e,[]),h=a.length;
    while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){
                return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){
                    return function(b){
                    return ga(a,b).length>0}}),contains:ia(function(a){
                    return a=a.replace(_,aa),function(b){
                        return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){
                            return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){
        var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))
        return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");
    while((b=b.parentNode)&&1===b.nodeType);
        return!1}}),target:function(b){
        var c=a.location&&a.location.hash;
        return c&&c.slice(1)===b.id},
        root:function(a){
            return a===o},focus:function(a){
            return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){
        var b=a.nodeName.toLowerCase();
        return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){
                return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)
        if(a.nodeType<6)
        return!1;
        return!0},parent:function(a){
                    return!d.pseudos.empty(a)},header:function(a){
                    return X.test(a.nodeName)},input:function(a){
                return W.test(a.nodeName)},button:function(a){
        var b=a.nodeName.toLowerCase();
        return"input"===b&&"button"===a.type||"button"===b},text:function(a){
        var b;
        return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){
                    return[0]}),last:pa(function(a,b){
                        return[b-1]}),eq:pa(function(a,b,c){
                            return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);
        return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);
        return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);
        return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);
        return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);
    function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){
        var c,e,f,g,h,i,j,k=z[a+" "];
        if(k)
        return b?0:k.slice(0);h=a,i=[],j=d.preFilter;
    while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));
        if(!c)
    break}
        return b?h.length:h?ga.error(a):z(a,i).slice(0)};
    function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;
        return d}
    function ta(a,b,c){
        var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;
        return b.first?function(b,c,e){while(b=b[d])
        if(1===b.nodeType||g)
        return a(b,c,e);
        return!1}:function(b,c,i){
        var j,k,l,m=[w,h];
        if(i){while(b=b[d])
        if((1===b.nodeType||g)&&a(b,c,i))
        return!0}else while(b=b[d])
        if(1===b.nodeType||g)
        if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;
    else{
        if((j=k[f])&&j[0]===w&&j[1]===h)
        return m[2]=j[2];
        if(k[f]=m,m[2]=a(b,c,i))
        return!0}
        return!1}}
    function ua(a){
        return a.length>1?function(b,c,d){
        var e=a.length;
    while(e--)
        if(!a[e](b,c,d))
        return!1;
        return!0}:a[0]}
    function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);
        return c}
    function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));
        return g}
    function xa(a,b,c,d,e,f){
        return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){
        var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
        if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;
    while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){
        if(e||a){
        if(e){j=[],k=r.length;
    while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;
    while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}
    function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){
        return a===b},h,!0),l=ta(function(a){
            return I(b,a)>-1},h,!0),m=[function(a,c,d){
        var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));
        return b=null,e}];i<f;i++)
        if(c=d.relative[a[i].type])m=[ta(ua(m),c)];
    else{
        if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)
        if(d.relative[a[e].type])
    break;
        return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}
        return ua(m)}
    function za(a,b){
        var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){
        var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){
        if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);
    while(q=a[o++])
        if(q(l,g||n,h)){i.push(l);
    break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;
    while(q=b[o++])q(t,u,g,h);
        if(f){
        if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}
        return k&&(w=y,j=v),t};
        return c?ia(f):f}
        return h=ga.compile=function(a,b){
        var c,d=[],e=[],f=A[a+" "];
        if(!f){b||(b=g(a)),c=b.length;
    while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}
        return f},i=ga.select=function(a,b,c,e){
        var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);
        if(c=c||[],1===n.length){
        if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){
        if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)
        return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;
    while(f--){
        if(j=i[f],d.relative[k=j.type])
    break;
        if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){
        if(i.splice(f,1),a=e.length&&sa(i),!a)
        return G.apply(c,e),c;
    break}}}
        return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),
    c.sortDetached=ja(function(a){
        return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){
            return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){
        if(!c)
        return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){
                return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){
        if(!c&&"input"===a.nodeName.toLowerCase())
        return a.defaultValue}),ja(function(a){
                    return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){
        var d;
        if(!c)
        return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;
        var y=function(a,b,c){
        var d=[],e=void 0!==c;
    while((a=a[b])&&9!==a.nodeType)
        if(1===a.nodeType){
        if(e&&r(a).is(c))
    break;d.push(a)}
        return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);
        return c},A=r.expr.match.needsContext;
    function B(a,b){
        return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}
        var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;
    function E(a,b,c){
        return r.isFunction(b)?r.grep(a,function(a,d){
            return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){
                return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){
                    return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){
                        return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){
        var d=b[0];
        return c&&(a=":not("+a+")"),
        1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){
                            return 1===a.nodeType}))},r.fn.extend({find:function(a){
        var b,c,d=this.length,e=this;
        if("string"!=typeof a)
        return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)
        if(r.contains(e[b],this))
        return!0}));for(c=this.pushStack([]),
        b=0;b<d;b++)r.find(a,e[b],c);
        return d>1?r.uniqueSort(c):c},filter:function(a){
                                return this.pushStack(E(this,a||[],!1))},
                                not:function(a){
                                    return this.pushStack(E(this,a||[],!0))},
                                    is:function(a){
                                    return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});
                                    var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){
        var e,f;
        if(!a)
        return this;
        if(c=c||F,"string"==typeof a){
        if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)
        return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);
        if(e[1]){
        if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);
        return this}
        return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}
        return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);
        var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){
        var b=r(a,this),c=b.length;
        return this.filter(function(){for(var a=0;a<c;a++)
        if(r.contains(this,b[a]))
        return!0})},
    closest:function(a,b){
        var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);
        if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
        if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);
    break}
        return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){
        return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){
            return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){
                return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});
    function K(a,b){while((a=a[b])&&1!==a.nodeType);
        return a}r.each({parent:function(a){
        var b=a.parentNode;
        return b&&11!==b.nodeType?b:null},parents:function(a){
        return y(a,"parentNode")},parentsUntil:function(a,b,c){
            return y(a,"parentNode",c)},next:function(a){
        return K(a,"nextSibling")},prev:function(a){
            return K(a,"previousSibling")},nextAll:function(a){
            return y(a,"nextSibling")},prevAll:function(a){
            return y(a,"previousSibling")},nextUntil:function(a,b,c){
                return y(a,"nextSibling",c)},prevUntil:function(a,b,c){
                    return y(a,"previousSibling",c)},siblings:function(a){
                        return z((a.parentNode||{}).firstChild,a)},children:function(a){
                            return z(a.firstChild)},contents:function(a){
                                return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},
function(a,b){r.fn[a]=function(c,d){
        var e=r.map(this,b,c);
        return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});
        var L=/[^\x20\t\r\n\f]+/g;
    function M(a){
        var b={};
        return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);
        var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();
    while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){
        return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){
            return r.each(arguments,function(a,b){
        var c;
    while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){
                return a?r.inArray(a,f)>-1:f.length>0},empty:function(){
                return f&&(f=[]),this},disable:function(){
                    return e=g=[],f=c="",this},disabled:function(){
                        return!f},lock:function(){
                            return e=g=[],c||b||(f=c=""),this},locked:function(){
                    return!!e},fireWith:function(a,c){
                        return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){
                            return j.fireWith(this,arguments),this},fired:function(){
                        return!!d}};
        return j};
    function N(a){
        return a}
    function O(a){throw a}
    function P(a,b,c,d){
        var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}
        catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){
        var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){
        return d},always:function(){
            return f.done(arguments).fail(arguments),this},"catch":function(a){
            return e.then(null,a)},pipe:function(){
        var a=arguments;
        return r.Deferred(function(b){r.each(c,function(c,d){
        var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){
        var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){
        var f=0;
        function g(b,c,d,e){
            return function(){
        var h=this,i=arguments,j=function(){
        var a,j;
        if(!(b<f)){
        if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){
        try{j()}
        catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}
        return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){
                return null!=a?r.extend(a,e):e}},f={};
        return r.each(c,function(a,b){
        var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){
                    return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){
        var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){
                        return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};
        if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))
        return g.then();
    while(c--)P(e[c],h(c),g.reject);
        return g.promise()}});
        var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};
        var R=r.Deferred();r.fn.ready=function(a){
                            return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;
        function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));
        var T=function(a,b,c,d,e,f,g){
        var h=0,i=a.length,j=null==c;
        if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){
    return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
        return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){
        return 1===a.nodeType||9===a.nodeType||!+a.nodeType};
function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){
        var b=a[this.expando];
        return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){
        var d,e=this.cache(a);
        if("string"==typeof b)e[r.camelCase(b)]=c;
    else for(d in b)e[r.camelCase(d)]=b[d];
        return e},get:function(a,b){
    return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){
    return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){
        var c,d=a[this.expando];
        if(void 0!==d){
        if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;
    while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){
        var b=a[this.expando];
        return void 0!==b&&!r.isEmptyObject(b)}};
        var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;
function $(a){
    return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}
function _(a,b,c){
        var d;
        if(void 0===c&&1===a.nodeType)
        if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){
        try{c=$(c)}
        catch(e){}X.set(a,b,c)}else c=void 0;
        return c}r.extend({hasData:function(a){
    return X.hasData(a)||W.hasData(a)},data:function(a,b,c){
    return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){
        return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){
        var c,d,e,f=this[0],g=f&&f.attributes;
        if(void 0===a){
        if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;
    while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}
        return e}
        return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){
        var c;
        if(f&&void 0===b){
        if(c=X.get(f,a),void 0!==c)
        return c;
        if(c=_(f,a),void 0!==c)
        return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},
removeData:function(a){
    return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){
        var d;
        if(a)
        return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";
        var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){
        var c=b+"queueHooks";
        return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){
        var c=2;
        return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){
        var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){
    return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){
        return this.queue(a||"fx",[])},promise:function(a,b){
        var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
    while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));
        return h(),e.promise(b)}});
        var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){
        return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){
        var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];
        return e};
function fa(a,b,c,d){
        var e,f=1,g=20,h=d?function(){
    return d.cur()}:function(){
    return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));
        if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);
    while(f!==(f=h()/i)&&1!==f&&--g)}
        return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}
        var ga={};
function ha(a){
        var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];
        return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}
function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);
        return a}r.fn.extend({show:function(){
        return ia(this,!0)},hide:function(){
        return ia(this)},toggle:function(a){
        return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});
        var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;
function na(a,b){
        var c;
        return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}
function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}
        var pa=/<|&#?\w+;/;
function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)
        if(f=a[n],f||0===f)
        if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);
    else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];
    while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;
    while(f=m[n++])
        if(d&&r.inArray(f,d)>-1)e&&e.push(f);
    else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;
    while(f=g[k++])la.test(f.type||"")&&c.push(f)}
        return l}!function(){
        var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();
        var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;
function va(){
        return!0}
function wa(){
        return!1}
function xa(){
        try{
        return d.activeElement}
        catch(a){}}
function ya(a,b,c,d,e,f){
        var g,h;
        if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);
        return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;
    else if(!e)
        return a;
        return 1===f&&(g=e,e=function(a){
        return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},
add:function(a,b,c,d,e){
        var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);
        if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){
        return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;
    while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},
remove:function(a,b,c,d,e){
        var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);
        if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;
    while(j--)
        if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;
    while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},
dispatch:function(a){
        var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];
        if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;
    while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;
    while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}
        return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){
        var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;
        if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)
        if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}
        return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){
        if(this.originalEvent)
        return b(this.originalEvent)}:function(){
        if(this.originalEvent)
        return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},
fix:function(a){
        return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){
        if(this!==xa()&&this.focus)
        return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){
        if(this===xa()&&this.blur)
        return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){
        if("checkbox"===this.type&&this.click&&B(this,"input"))
        return this.click(),!1},_default:function(a){
        return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){
        return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){
        var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},
stopPropagation:function(){
        var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){
        var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){
        var b=a.button;
        return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){
        var c,d=this,e=a.relatedTarget,f=a.handleObj;
        return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){
        return ya(this,a,b,c,d)},one:function(a,b,c,d){
        return ya(this,a,b,c,d,1)},off:function(a,b,c){
        var d,e;
        if(a&&a.preventDefault&&a.handleObj)
        return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;
        if("object"==typeof a){for(e in a)this.off(e,b,a[e]);
        return this}
        return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});
        var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function Ea(a,b){
        return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}
function Fa(a){
        return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}
function Ga(a){
        var b=Ca.exec(a.type);
        return b?a.type=b[1]:a.removeAttribute("type"),a}
function Ha(a,b){
        var c,d,e,f,g,h,i,j;
        if(1===b.nodeType){
        if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}
function Ia(a,b){
        var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}
function Ja(a,b,c,d){b=g.apply([],b);
        var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);
        if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))
        return a.each(function(e){
        var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});
        if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);
        if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}
        return a}
function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));
        return a}r.extend({htmlPrefilter:function(a){
        return a.replace(za,"<$1></$2>")},
clone:function(a,b,c){
        var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);
        if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);
        if(b)
        if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);
    else Ha(a,h);
        return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)
        if(U(c)){
        if(b=c[W.expando]){
        if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){
        return Ka(this,a,!0)},remove:function(a){
        return Ka(this,a)},text:function(a){
        return T(this,function(a){
        return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){
        return Ja(this,arguments,function(a){
        if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
        var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){
        return Ja(this,arguments,function(a){
        if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
        var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},
before:function(){
        return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){
        return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");
        return this},clone:function(a,b){
        return a=null!=a&&a,b=null==b?a:b,this.map(function(){
        return r.clone(this,a,b)})},html:function(a){
        return T(this,function(a){
        var b=this[0]||{},c=0,d=this.length;
        if(void 0===a&&1===b.nodeType)
        return b.innerHTML;
        if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}
        catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){
        var a=[];
        return Ja(this,arguments,function(b){
        var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},
function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());
        return this.pushStack(d)}});
        var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){
        var c=b.ownerDocument.defaultView;
        return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){
        if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);
        var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}
        var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){
        return b(),c},boxSizingReliable:function(){
        return b(),e},pixelMarginRight:function(){
        return b(),f},reliableMarginLeft:function(){
        return b(),g}}))}();
function Oa(a,b,c){
        var d,e,f,g,h=a.style;
        return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}
function Pa(a,b){
        return{get:function(){
        return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
        var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;
function Wa(a){
        if(a in Va)
        return a;
        var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;
    while(c--)
        if(a=Ua[c]+b,a in Va)
        return a}
function Xa(a){
        var b=r.cssProps[a];
        return b||(b=r.cssProps[a]=Wa(a)||a),b}
function Ya(a,b,c){
        var d=ba.exec(b);
        return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}
function Za(a,b,c,d,e){
        var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));
        return g}
function $a(a,b,c){
        var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);
        return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){
        if(b){
        var c=Oa(a,"opacity");
        return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},
style:function(a,b,c,d){
        if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
        var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;
        return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){
        var e,f,g,h=r.camelCase(b),i=Ra.test(b);
        return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){
        if(c)
        return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){
        return $a(a,b,d)})},set:function(a,c,d){
        var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);
        return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){
        if(b)
        return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){
        return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];
        return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){
        return T(this,function(a,b,c){
        var d,e,f={},g=0;
        if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);
        return f}
        return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});
function _a(a,b,c,d,e){
        return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){
        var a=_a.propHooks[this.prop];
        return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){
        var b,c=_a.propHooks[this.prop];
        return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){
        var b;
        return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){
        return a},swing:function(a){
        return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};
        var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;
function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}
function fb(){
        return a.setTimeout(function(){ab=void 0}),ab=r.now()}
function gb(a,b){
        var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;
        return b&&(e.opacity=e.width=a),e}
function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)
        if(d=e[f].call(c,b,a))
        return d}
function ib(a,b,c){
        var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,
    g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)
        if(e=b[d],cb.test(e)){
        if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){
        if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),
    m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}
    function jb(a,b){
        var c,d,e,f,g;for(c in a)
        if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}
    function kb(a,b,c){
        var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){
        if(e)
        return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);
        return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){
        var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
        return j.tweens.push(d),d},stop:function(b){
        var c=0,d=b?j.tweens.length:0;
        if(e)
        return this;for(e=!0;c<d;c++)j.tweens[c].run(1);
        return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)
        if(d=kb.prefilters[f].call(j,a,k,j.opts))
        return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;
        return r.map(k,hb,j),
    r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){
        var c=this.createTween(a,b);
        return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){
        var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};
        return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){
        return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){
        var e=r.isEmptyObject(a),f=r.speed(b,c,d),
        g=function(){
        var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};
        return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){
        var d=function(a){
        var b=a.stop;delete a.stop,b(c)};
        return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){
        var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);
        if(e)g[e]&&g[e].stop&&d(g[e]);
    else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){
        return a!==!1&&(a=a||"fx"),this.each(function(){
        var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){
        var c=r.fn[b];r.fn[b]=function(a,d,e){
        return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){
        return this.animate(b,a,c,d)}}),r.timers=[],
        r.fx.tick=function(){
        var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){
        return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){
        var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){
        var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();
        var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){
        return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){
        return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){
        var d,e,f=a.nodeType;
        if(3!==f&&8!==f&&2!==f)
        return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){
        if(!o.radioValue&&"radio"===b&&B(a,"input")){
        var c=a.value;
        return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){
        var c,d=0,e=b&&b.match(L);
        if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){
        return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){
        var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){
        var e,f,g=b.toLowerCase();
        return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});
        var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){
        return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){
        return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){
        var d,e,f=a.nodeType;
        if(3!==f&&8!==f&&2!==f)
        return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){
        var b=r.find.attr(a,"tabindex");
        return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){
        var b=a.parentNode;
        return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){
        var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],
function(){r.propFix[this.toLowerCase()]=this});
function pb(a){
        var b=a.match(L)||[];
        return b.join(" ")}
function qb(a){
        return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){
        var b,c,d,e,f,g,h,i=0;
        if(r.isFunction(a))
        return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});
        if("string"==typeof a&&a){b=a.match(L)||[];
    while(c=this[i++])
        if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;
    while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}
        return this},removeClass:function(a){
        var b,c,d,e,f,g,h,i=0;
        if(r.isFunction(a))
        return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});
        if(!arguments.length)
        return this.attr("class","");
        if("string"==typeof a&&a){b=a.match(L)||[];
    while(c=this[i++])
        if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;
    while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}
        return this},toggleClass:function(a,b){
        var c=typeof a;
        return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){
        var b,d,e,f;
        if("string"===c){d=0,e=r(this),f=a.match(L)||[];
    while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},
hasClass:function(a){
        var b,c,d=0;b=" "+a+" ";
    while(c=this[d++])
        if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)
        return!0;
        return!1}});
        var rb=/\r/g;r.fn.extend({val:function(a){
        var b,c,d,e=this[0];{
        if(arguments.length)
        return d=r.isFunction(a),this.each(function(c){
        var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){
        return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});
        if(e)
        return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){
        var b=r.find.attr(a,"value");
        return null!=b?b:pb(r.text(a))}},select:{get:function(a){
        var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)
        if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){
        if(b=r(c).val(),g)
        return b;h.push(b)}
        return h},set:function(a,b){
        var c,d,e=a.options,f=r.makeArray(b),g=e.length;
    while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);
        return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],
function(){r.valHooks[this]={set:function(a,b){
        if(Array.isArray(b))
        return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){
        return null===a.getAttribute("value")?"on":a.value})});
        var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){
        var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];
        if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){
        if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;
    while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());
        return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},
simulate:function(a,b,c){
        var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){
        return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){
        var c=this[0];
        if(c)
        return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){
        return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){
        return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){
        var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){
        var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){
        var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});
        var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){
        var c;
        if(!b||"string"!=typeof b)
        return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}
        catch(d){c=void 0}
        return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};
        var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;
function Ab(a,b,c,d){
        var e;
        if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});
    else if(c||"object"!==r.type(b))d(a,b);
    else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){
        var c,d=[],e=function(a,b){
        var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};
        if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});
    else for(c in a)Ab(c,a[c],b,e);
        return d.join("&")},r.fn.extend({serialize:function(){
        return r.param(this.serializeArray())},serializeArray:function(){
        return this.map(function(){
        var a=r.prop(this,"elements");
        return a?r.makeArray(a):this}).filter(function(){
        var a=this.type;
        return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){
        var c=r(this).val();
        return null==c?null:Array.isArray(c)?r.map(c,function(a){
        return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});
        var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;
function Mb(a){
        return function(b,c){"string"!=typeof b&&(c=b,b="*");
        var d,e=0,f=b.toLowerCase().match(L)||[];
        if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
function Nb(a,b,c,d){
        var e={},f=a===Jb;
function g(h){
        var i;
        return e[h]=!0,r.each(a[h]||[],function(a,h){
        var j=h(b,c,d);
        return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}
        return g(b.dataTypes[0])||!e["*"]&&g("*")}
function Ob(a,b){
        var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);
        return d&&r.extend(!0,a,d),a}
function Pb(a,b,c){
        var d,e,f,g,h=a.contents,i=a.dataTypes;
    while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));
        if(d)for(e in h)
        if(h[e]&&h[e].test(d)){i.unshift(e);
    break}if(i[0]in c)f=i[0];
    else{for(e in c){
        if(!i[0]||a.converters[e+" "+i[0]]){f=e;
    break}g||(g=e)}f=f||g}if(f)
        return f!==i[0]&&i.unshift(f),c[f]}
function Qb(a,b,c,d){
        var e,f,g,h,i,j={},k=a.dataTypes.slice();
        if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();
    while(f)
        if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())
        if("*"===f)f=i;
    else if("*"!==i&&i!==f){
        if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)
        if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
    break}if(g!==!0)
        if(g&&a["throws"])b=g(b);
    else try{b=g(b)}
        catch(l){
        return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}
        return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},
ajaxSetup:function(a,b){
        return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};
        var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){
        var b;
        if(k){
        if(!h){h={};
    while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}
        return null==b?null:b},getAllResponseHeaders:function(){
        return k?g:null},setRequestHeader:function(a,b){
        return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){
        return null==k&&(o.mimeType=a),this},statusCode:function(a){
        var b;
        if(a)
        if(k)y.always(a[y.status]);
    else for(b in a)u[b]=[u[b],a[b]];
        return this},
abort:function(a){
        var b=a||x;
        return e&&e.abort(b),A(0,b),this}};
        if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}
        catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)
        return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);
        if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))
        return y.abort();
        if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){
        if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)
        return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}
        catch(z){
        if(k)throw z;A(-1,z)}}else A(-1,"No Transport");
function A(b,c,d,h){
        var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}
        return y},getJSON:function(a,b,c){
        return r.get(a,b,c,"json")},getScript:function(a,b){
        return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){
        return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){
        return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){
        var b;
        return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){
        var a=this;
    while(a.firstElementChild)a=a.firstElementChild;
        return a}).append(this)),this},
wrapInner:function(a){
        return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){
        var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){
        var b=r.isFunction(a);
        return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){
        return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){
        return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){
        return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){
        try{
        return new a.XMLHttpRequest}
        catch(b){}};
        var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){
        var c,d;
        if(o.cors||Sb&&!b.crossDomain)
        return{send:function(e,f){
        var g,h=b.xhr();
        if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){
        return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}
        catch(i){
        if(c)throw i}},
abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){
        return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){
        if(a.crossDomain){
        var b,c;
        return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});
        var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){
        var a=Tb.pop()||r.expando+"_"+ub++;
        return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){
        var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");
        if(h||"jsonp"===b.dataTypes[0])
        return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){
        return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),
    g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){
        var a=d.implementation.createHTMLDocument("").body;
        return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){
        if("string"!=typeof a)
        return[];"boolean"==typeof b&&(c=b,b=!1);
        var e,f,g;
        return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){
        var d,e,f,g=this,h=a.indexOf(" ");
        return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],
function(a,b){r.fn[b]=function(a){
        return this.on(b,a)}}),r.expr.pseudos.animated=function(a){
        return r.grep(r.timers,function(b){
        return a===b.elem}).length},r.offset={setOffset:function(a,b,c){
        var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){
        if(arguments.length)
        return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});
        var b,c,d,e,f=this[0];
        if(f)
        return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){
        if(this[0]){
        var a,b,c=this[0],d={top:0,left:0};
        return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){
        return this.map(function(){
        var a=this.offsetParent;
    while(a&&"static"===r.css(a,"position"))a=a.offsetParent;
        return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},
function(a,b){
        var c="pageYOffset"===b;r.fn[a]=function(d){
        return T(this,function(a,d,e){
        var f;
        return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){
        if(c)
        return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){
        var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");
        return T(this,function(b,c,e){
        var f;
        return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){
        return this.on(a,null,b,c)},unbind:function(a,b){
        return this.off(a,null,b)},delegate:function(a,b,c,d){
        return this.on(b,a,c,d)},undelegate:function(a,b,c){
        return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){
        return r});
        var Vb=a.jQuery,Wb=a.$;
        return r.noConflict=function(b){
        return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
;// jquery.imagesloaded.js
(function(e, i) {
 'use strict';
 var r = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
 e.fn.imagesLoaded = function(t) {
  var a = this, n = e.isFunction(e.Deferred) ? e.Deferred() : 0, s = e.isFunction(n.notify), f = a.find('img').add(a.filter('img')), o = [], c = [], d = [];
  if (e.isPlainObject(t)) {
   e.each(t, function(e, i) {
    if (e === 'callback') {
     t = i;
    } else if (n) {
     n[e](i);
    }
   });
  }
  function l() {
   var i = e(c), r = e(d);
   if (n) {
    if (d.length) {
     n.reject(f, i, r);
    } else {
     n.resolve(f);
    }
   }
   if (e.isFunction(t)) {
    t.call(a, f, i, r);
   }
  }
  function u(i, t) {
   if (i.src === r || e.inArray(i, o) !== -1) {
    return;
   }
   o.push(i);
   if (t) {
    d.push(i);
   } else {
    c.push(i);
   }
   e.data(i, 'imagesLoaded', {
    isBroken: t,
    src: i.src
   });
   if (s) {
    n.notifyWith(e(i), [ t, f, e(c), e(d) ]);
   }
   if (f.length === o.length) {
    setTimeout(l);
    f.off('.imagesLoaded');
   }
  }
  if (!f.length) {
   l();
  } else {
   f.on('load.imagesLoaded error.imagesLoaded', function(e) {
    u(e.target, e.type === 'error');
   }).each(function(t, a) {
    var n = a.src;
    var s = e.data(a, 'imagesLoaded');
    if (s && s.src === n) {
     u(a, s.isBroken);
     return;
    }
    if (a.complete && a.naturalWidth !== i) {
     u(a, a.naturalWidth === 0 || a.naturalHeight === 0);
     return;
    }
    if (a.readyState || a.complete) {
     a.src = r;
     a.src = n;
    }
   });
  }
  return n ? n.promise(a) : a;
 };
})(jQuery);
;// jquery.misc.js
(function(e) {
 e.fn.shuffle = function() {
  var n = this.get();
  var t = e.map(n, function() {
   var t = Math.floor(Math.random() * n.length);
   var i = e(n[t]).clone(true)[0];
   n.splice(t, 1);
   return i;
  });
  this.each(function(n) {
   e(this).replaceWith(e(t[n]));
  });
  return e(t);
 };
 e.fn.selectText = function() {
  return this.each(function(e, n) {
   var t = document.createRange();
   t.selectNodeContents(n);
   var i = window.getSelection();
   i.removeAllRanges();
   i.addRange(t);
  });
 };
 e.fn.hlSelectedOption = function() {
  function n(n) {
   e('option', n).removeClass('selected').filter('option:checked').addClass('selected');
  }
  return this.each(function() {
   n(this);
   e(this).addClass('hl-selected-option').on('change', function() {
    n(this);
   });
  });
 };
 e.fn.injectIFrame = function(n, t, i) {
  var r = e(this);
  var a = e.extend({
   style: 'display: block; margin: 0 auto;',
   width: '',
   height: ''
  }, t);
  var o = e.extend({
   rnd: BB.randomNumber
  }, i);
  if (n.indexOf('//') == 0) {
   n = location.protocol + n;
  }
  n += n.indexOf('?') == -1 ? '?' : '&';
  n += e.param(o);
  e(sprintf('<iframe src="%s" width="%s" height="%s" style="%s" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>', n, a.width, a.height, a.style)).appendTo(r);
 };
 var n = /\B(?=(?:\d{3})+(?!\d))/g;
 e.fn.numberFormat = function() {
  return this.each(function() {
   this.innerHTML = this.innerHTML.replace(n, ',');
  });
 };
})(jQuery);
;// jquery.modal.js
(function(e) {
 var t = null;
 function o(e) {
  var t;
  t = String(e).match(/[?&]t=([\dhms]+)/);
  if (!t) {
   return 0;
  }
  var o = t[1];
  if (/^\d+$/.test(o)) {
   return o;
  }
  var i = 0;
  t = o.match(/(\d+)h/);
  if (t) {
   i += t[1] * 3600;
  }
  t = o.match(/(\d+)m/);
  if (t) {
   i += t[1] * 60;
  }
  t = o.match(/(\d+)s/);
  if (t) {
   i += t[1] * 1;
  }
  return i;
 }
 e.modal = function(i, n) {
  e.modal.close();
  var s;
  this.$body = e('body');
  this.options = e.extend({}, e.modal.defaults, n);
  if (this.options.mode == 'video') {
   this.showSpinner();
   this.$elm = e('<div class="modal-video"></div>');
   var l = e('<iframe width="854" height="480" frameborder="0" allowfullscreen></iframe>');
   var r;
   var h;
   switch (this.options.provider) {
   case 'YouTube':
    r = 'https://www.youtube.com/embed/';
    h = e.param({
     wmode: 'opaque',
     start: o(this.options.url),
     autoplay: 1,
     autohide: 1,
     iv_load_policy: 3
    });
    
    break;

   case 'Vimeo':
    r = 'https://player.vimeo.com/video/';
    h = e.param({
     autoplay: 1
    });
    
    break;

   default:
    throw new Error('invalid mode: ' + this.options.mode);
   }
   l.attr('src', r + this.options.video_id + '?' + h).on('load', function() {
    if (!t) {
     return;
    }
    t.hideSpinner();
   }).appendTo(this.$elm);
   this.$elm.css({
    width: this.options.width,
    height: this.options.height
   }).on('modal:close', function() {
    e(this).remove();
    if (!t) {
     return;
    }
    t.hideSpinner();
   }).appendTo(this.$body);
   this.open();
  } else if (i.is('a')) {
   s = i.attr('href');
   if (/^#/.test(s)) {
    this.$elm = e(s);
    if (this.$elm.length !== 1) {
     return null;
    }
    this.open();
   }
  } else {
   this.$elm = i;
   this.open();
  }
  var a = e(document.activeElement);
  if (a.is('input,select,button')) {
   this.$elm.on('modal:close', function() {
    a.focus();
   });
  }
 };
 e.modal.prototype = {
  constructor: e.modal,
  open: function() {
   this.block();
   this.show();
   var t = this.options.escapeClose;
   e(document).on('keydown.modal', function(o) {
    if (t && o.which == 27) {
     e.modal.close();
    }
    if (e.inArray(o.which, [ 33, 34, 35, 36, 38, 40 ]) != -1) {
     o.preventDefault();
    }
   });
   if (this.options.clickClose) {
    this.$blocker.on('click', e.modal.close);
   }
  },
  close: function() {
   this.unblock();
   this.hide();
   e(document).off('keydown.modal');
  },
  block: function() {
   this.$blocker = e('#modal-blocker').show();
   this.$body.append(this.$blocker);
  },
  unblock: function() {
   this.$blocker.hide();
  },
  show: function() {
   this.closeButton = e('<a id="modal-close-btn" href="#close-modal" rel="modal:close"></a>');
   this.$elm.append(this.closeButton);
   this.$elm.addClass('modal current');
   this.center();
   this.$elm.show();
  },
  hide: function() {
   if (this.closeButton) {
    this.closeButton.remove();
   }
   this.$elm.removeClass('current').hide();
   this.$elm.trigger('modal:close', [ this._ctx() ]);
  },
  showSpinner: function() {
   if (!this.options.showSpinner) {
    return;
   }
   this.spinner = this.spinner || e('<div id="modal-spinner"></div>');
   this.$body.append(this.spinner);
   this.spinner.show();
  },
  hideSpinner: function() {
   if (this.spinner) {
    this.spinner.remove();
   }
  },
  center: function() {
   this.$elm.css({
    position: 'fixed',
    top: "50%",
    left: "50%",
    marginTop: -(this.$elm.outerHeight() / 2),
    marginLeft: -(this.$elm.outerWidth() / 2),
    zIndex: this.options.zIndex + 1
   });
  },
  _ctx: function() {
   return {
    elm: this.$elm,
    blocker: this.$blocker,
    options: this.options
   };
  }
 };
 e.modal.prototype.resize = e.modal.prototype.center;
 e.modal.close = function(e) {
  if (!t) {
   return;
  }
  if (e) {
   e.preventDefault();
  }
  t.close();
  var o = t.$elm;
  t = null;
  return o;
 };
 e.modal.resize = function() {
  if (!t) {
   return;
  }
  t.resize();
 };
 e.modal.defaults = {
  mode: '',
  escapeClose: true,
  clickClose: true,
  showSpinner: true,
  width: 854,
  height: 480
 };
 e.fn.modal = function(o) {
  if (this.length === 1) {
   t = new e.modal(this, o);
  }
  return this;
 };
 e(document).on('click.modal', 'a[rel="modal:close"]', e.modal.close);
 e(document).on('click.modal', 'a[rel="modal:open"]', function(t) {
  t.preventDefault();
  e(this).modal();
 });
})(jQuery);
;// jquery.quicksearch.js
(function(t, e, s, n) {
 t.fn.quicksearch = function(s, n) {
  var r, i, o, u, l = '', h = this, a = t.extend({
   delay: 500,
   selector: null,
   stripeRows: null,
   loader: null,
   noResults: '',
   matchedResultsCount: 0,
   bind: 'keyup cut paste',
   onBefore: function() {
    return;
   },
   onAfter: function() {
    return;
   },
   show: function() {
    this.style.display = "";
   },
   hide: function() {
    this.style.display = "none";
   },
   prepareQuery: function(t) {
    return t.toLowerCase().split(' ');
   },
   testQuery: function(t, e, s) {
    for (var n = 0; n < t.length; n += 1) {
     if (e.indexOf(t[n]) === -1) {
      return false;
     }
    }
    return true;
   }
  }, n);
  this.go = function() {
   var t = 0, e = 0, s = true, n = a.prepareQuery(l), r = l.replace(' ', '').length === 0;
   for (var t = 0, u = o.length; t < u; t++) {
    if (r || a.testQuery(n, i[t], o[t])) {
     a.show.apply(o[t]);
     s = false;
     e++;
    } else {
     a.hide.apply(o[t]);
    }
   }
   if (s) {
    this.results(false);
   } else {
    this.results(true);
    this.stripe();
   }
   this.matchedResultsCount = e;
   this.loader(false);
   a.onAfter();
   return this;
  };
  this.search = function(t) {
   l = t;
   h.trigger();
  };
  this.currentMatchedResults = function() {
   return this.matchedResultsCount;
  };
  this.stripe = function() {
   if (typeof a.stripeRows === "object" && a.stripeRows !== null) {
    var e = a.stripeRows.join(' ');
    var s = a.stripeRows.length;
    u.not(':hidden').each(function(n) {
     t(this).removeClass(e).addClass(a.stripeRows[n % s]);
    });
   }
   return this;
  };
  this.strip_html = function(e) {
   var s = e.replace(new RegExp('<[^<]+>', 'g'), "");
   s = t.trim(s.toLowerCase());
   return s;
  };
  this.results = function(e) {
   if (typeof a.noResults === "string" && a.noResults !== "") {
    if (e) {
     t(a.noResults).hide();
    } else {
     t(a.noResults).show();
    }
   }
   return this;
  };
  this.loader = function(e) {
   if (typeof a.loader === "string" && a.loader !== "") {
    e ? t(a.loader).show() : t(a.loader).hide();
   }
   return this;
  };
  this.cache = function() {
   u = t(s);
   if (typeof a.noResults === "string" && a.noResults !== "") {
    u = u.not(a.noResults);
   }
   var e = typeof a.selector === "string" ? u.find(a.selector) : t(s).not(a.noResults);
   i = e.map(function() {
    return h.strip_html(this.innerHTML);
   });
   o = u.map(function() {
    return this;
   });
   l = l || this.val() || "";
   return this.go();
  };
  this.trigger = function() {
   this.loader(true);
   a.onBefore();
   h.go();
   return this;
  };
  this.cache();
  this.results(true);
  this.stripe();
  this.loader(false);
  return this.each(function() {
   t(this).on(a.bind, function() {
    l = t(this).val();
    e.clearTimeout(r);
    r = e.setTimeout(function() {
     h.trigger();
    }, a.delay);
   });
  });
 };
})(jQuery, this, document);
;// jquery.scrollTo.js
(function(e) {
 'use strict';
 if (typeof define === 'function' && define.amd) {
  define([ 'jquery' ], e);
 } else if (typeof module !== 'undefined' && module.exports) {
  module.exports = e(require('jquery'));
 } else {
  e(jQuery);
 }
})(function(e) {
 'use strict';
 var t = e.scrollTo = function(t, n, o) {
  return e(window).scrollTo(t, n, o);
 };
 t.defaults = {
  axis: 'xy',
  duration: 0,
  limit: true
 };
 function n(t) {
  return !t.nodeName || e.inArray(t.nodeName.toLowerCase(), [ 'iframe', '#document', 'html', 'body' ]) !== -1;
 }
 e.fn.scrollTo = function(i, r, s) {
  if (typeof r === 'object') {
   s = r;
   r = 0;
  }
  if (typeof s === 'function') {
   s = {
    onAfter: s
   };
  }
  if (i === 'max') {
   i = 9e9;
  }
  s = e.extend({}, t.defaults, s);
  r = r || s.duration;
  var f = s.queue && s.axis.length > 1;
  if (f) {
   r /= 2;
  }
  s.offset = o(s.offset);
  s.over = o(s.over);
  return this.each(function() {
   if (i === null) return;
   var u = n(this), a = u ? this.contentWindow || window : this, l = e(a), c = i, d = {}, m;
   switch (typeof c) {
   case 'number':
   case 'string':
    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(c)) {
     c = o(c);
     
    break;
    }
    c = u ? e(c) : e(c, a);

   case 'object':
    if (c.length === 0) return;
    if (c.is || c.style) {
     m = (c = e(c)).offset();
    }
   }
   var p = e.isFunction(s.offset) && s.offset(a, c) || s.offset;
   e.each(s.axis.split(''), function(e, n) {
    var o = n === 'x' ? 'Left' : 'Top', i = o.toLowerCase(), r = 'scroll' + o, x = l[r](), v = t.max(a, n);
    if (m) {
     d[r] = m[i] + (u ? 0 : x - l.offset()[i]);
     if (s.margin) {
      d[r] -= parseInt(c.css('margin' + o), 10) || 0;
      d[r] -= parseInt(c.css('border' + o + 'Width'), 10) || 0;
     }
     d[r] += p[i] || 0;
     if (s.over[i]) {
      d[r] += c[n === 'x' ? 'width' : 'height']() * s.over[i];
     }
    } else {
     var w = c[i];
     d[r] = w.slice && w.slice(-1) === '%' ? parseFloat(w) / 100 * v : w;
    }
    if (s.limit && /^\d+$/.test(d[r])) {
     d[r] = d[r] <= 0 ? 0 : Math.min(d[r], v);
    }
    if (!e && s.axis.length > 1) {
     if (x === d[r]) {
      d = {};
     } else if (f) {
      h(s.onAfterFirst);
      d = {};
     }
    }
   });
   h(s.onAfter);
   function h(t) {
    var n = e.extend({}, s, {
     queue: true,
     duration: r,
     complete: t && function() {
      t.call(a, c, s);
     }
    });
    l.animate(d, n);
   }
  });
 };
 t.max = function(t, o) {
  var i = o === 'x' ? 'Width' : 'Height', r = 'scroll' + i;
  if (!n(t)) return t[r] - e(t)[i.toLowerCase()]();
  var s = 'client' + i, f = t.ownerDocument || t.document, u = f.documentElement, a = f.body;
  return Math.max(u[r], a[r]) - Math.min(u[s], a[s]);
 };
 function o(t) {
  return e.isFunction(t) || e.isPlainObject(t) ? t : {
   top: t,
   left: t
  };
 }
 e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
  get: function(t) {
   return e(t.elem)[t.prop]();
  },
  set: function(t) {
   var n = this.get(t);
   if (t.options.interrupt && t._last && t._last !== n) {
    return e(t.elem).stop();
   }
   var o = Math.round(t.now);
   if (n !== o) {
    e(t.elem)[t.prop](o);
    t._last = this.get(t);
   }
  }
 };
 return t;
});
;// jquery.scrollyTable.js
(function(t) {
 t.fn.scrollyTable = function(a) {
  var o = t.extend({
   scroll_max_height: 'auto'
  }, a);
  this.each(function() {
   var a = t(this);
   var l = [ '<div class="scrolly">', '  <table class="scrolly-head"></table>', '  <div   class="scrolly-body"></div>', '  <table class="scrolly-foot"></table>', '</div>' ].join('');
   var i = t(l).insertBefore(a);
   var r = i.find('.scrolly-head');
   var d = i.find('.scrolly-body');
   var s = i.find('.scrolly-foot');
   var h = a.attr('class');
   i.add(r).add(s).addClass(h);
   a.appendTo(d);
   var n = a.width();
   var c = e();
   a.width(n);
   i.width(n + c);
   t('thead th, tbody tr:first td, tfoot td', a).each(function() {
    t(this).width(t(this).width());
   });
   a.find('thead').appendTo(r);
   a.find('tfoot').appendTo(s);
   if (o.scroll_max_height == 'auto') {
    var f = 100;
    var v = t(window).height() - r.outerHeight() - s.outerHeight();
    o.scroll_max_height = Math.max(v, f);
   }
   d.css({
    'overflow-y': 'auto',
    'overflow-x': 'hidden',
    'max-height': o.scroll_max_height + 'px'
   });
   var u = r.find('th');
   a.on('mouseenter mouseleave', 'td', function() {
    if (t(this).attr('colspan') == null) {
     var a = t(this).index();
     u.eq(a).toggleClass('hl-hovered-column');
    }
   });
  });
  function e() {
   return 16;
  }
 };
})(jQuery);
;// jquery.tablesorter.js
(function(e) {
 if (typeof define === 'function' && define.amd) {
  define([ 'jquery' ], e);
 } else if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = e(require('jquery'));
 } else {
  e(jQuery);
 }
})(function(e) {
 (function(e) {
  'use strict';
  var t = e.tablesorter = {
   version: '2.31.3',
   parsers: [],
   widgets: [],
   defaults: {
    theme: 'default',
    widthFixed: false,
    showProcessing: false,
    headerTemplate: '{content}',
    onRenderTemplate: null,
    onRenderHeader: null,
    cancelSelection: true,
    tabIndex: true,
    dateFormat: 'mmddyyyy',
    sortMultiSortKey: 'shiftKey',
    sortResetKey: 'ctrlKey',
    usNumberFormat: true,
    delayInit: false,
    serverSideSorting: false,
    resort: true,
    headers: {},
    ignoreCase: true,
    sortForce: null,
    sortList: [],
    sortAppend: null,
    sortStable: false,
    sortInitialOrder: 'asc',
    sortLocaleCompare: false,
    sortReset: false,
    sortRestart: false,
    emptyTo: 'bottom',
    stringTo: 'max',
    duplicateSpan: true,
    textExtraction: 'basic',
    textAttribute: 'data-text',
    textSorter: null,
    numberSorter: null,
    initWidgets: true,
    widgetClass: 'widget-{name}',
    widgets: [],
    widgetOptions: {
     zebra: [ 'even', 'odd' ]
    },
    initialized: null,
    tableClass: '',
    cssAsc: '',
    cssDesc: '',
    cssNone: '',
    cssHeader: '',
    cssHeaderRow: '',
    cssProcessing: '',
    cssChildRow: 'tablesorter-childRow',
    cssInfoBlock: 'tablesorter-infoOnly',
    cssNoSort: 'tablesorter-noSort',
    cssIgnoreRow: 'tablesorter-ignoreRow',
    cssIcon: 'tablesorter-icon',
    cssIconNone: '',
    cssIconAsc: '',
    cssIconDesc: '',
    cssIconDisabled: '',
    pointerClick: 'click',
    pointerDown: 'mousedown',
    pointerUp: 'mouseup',
    selectorHeaders: '> thead th, > thead td',
    selectorSort: 'th, td',
    selectorRemove: '.remove-me',
    debug: false,
    headerList: [],
    empties: {},
    strings: {},
    parsers: [],
    globalize: 0,
    imgAttr: 0
   },
   css: {
    table: 'tablesorter',
    cssHasChild: 'tablesorter-hasChildRow',
    childRow: 'tablesorter-childRow',
    colgroup: 'tablesorter-colgroup',
    header: 'tablesorter-header',
    headerRow: 'tablesorter-headerRow',
    headerIn: 'tablesorter-header-inner',
    icon: 'tablesorter-icon',
    processing: 'tablesorter-processing',
    sortAsc: 'tablesorter-headerAsc',
    sortDesc: 'tablesorter-headerDesc',
    sortNone: 'tablesorter-headerUnSorted'
   },
   language: {
    sortAsc: 'Ascending sort applied, ',
    sortDesc: 'Descending sort applied, ',
    sortNone: 'No sort applied, ',
    sortDisabled: 'sorting is disabled',
    nextAsc: 'activate to apply an ascending sort',
    nextDesc: 'activate to apply a descending sort',
    nextNone: 'activate to remove the sort'
   },
   regex: {
    templateContent: /\{content\}/g,
    templateIcon: /\{icon\}/g,
    templateName: /\{name\}/i,
    spaces: /\s+/g,
    nonWord: /\W/g,
    formElements: /(input|select|button|textarea)/i,
    chunk: /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
    chunks: /(^\\0|\\0$)/,
    hex: /^0x[0-9a-f]+$/i,
    comma: /,/g,
    digitNonUS: /[\s|\.]/g,
    digitNegativeTest: /^\s*\([.\d]+\)/,
    digitNegativeReplace: /^\s*\(([.\d]+)\)/,
    digitTest: /^[\-+(]?\d+[)]?$/,
    digitReplace: /[,.'"\s]/g
   },
   string: {
    max: 1,
    min: -1,
    emptymin: 1,
    emptymax: -1,
    zero: 0,
    none: 0,
    null: 0,
    top: true,
    bottom: false
   },
   keyCodes: {
    enter: 13
   },
   dates: {},
   instanceMethods: {},
   setup: function(r, s) {
    if (!r || !r.tHead || r.tBodies.length === 0 || r.hasInitialized === true) {
     if (t.debug(s, 'core')) {
      if (r.hasInitialized) {
       console.warn('Stopping initialization. Tablesorter has already been initialized');
      } else {
       console.error('Stopping initialization! No table, thead or tbody', r);
      }
     }
     return;
    }
    var o = '', a = e(r), n = e.metadata;
    r.hasInitialized = false;
    r.isProcessing = true;
    r.config = s;
    e.data(r, 'tablesorter', s);
    if (t.debug(s, 'core')) {
     console[console.group ? 'group' : 'log']('Initializing tablesorter v' + t.version);
     e.data(r, 'startoveralltimer', new Date());
    }
    s.supportsDataObject = function(e) {
     e[0] = parseInt(e[0], 10);
     return e[0] > 1 || e[0] === 1 && parseInt(e[1], 10) >= 4;
    }(e.fn.jquery.split('.'));
    s.emptyTo = s.emptyTo.toLowerCase();
    s.stringTo = s.stringTo.toLowerCase();
    s.last = {
     sortList: [],
     clickedIndex: -1
    };
    if (!/tablesorter\-/.test(a.attr('class'))) {
     o = s.theme !== '' ? ' tablesorter-' + s.theme : '';
    }
    if (!s.namespace) {
     s.namespace = '.tablesorter' + Math.random().toString(16).slice(2);
    } else {
     s.namespace = '.' + s.namespace.replace(t.regex.nonWord, '');
    }
    s.table = r;
    s.$table = a.addClass(t.css.table + ' ' + s.tableClass + o + ' ' + s.namespace.slice(1)).attr('role', 'grid');
    s.$headers = a.find(s.selectorHeaders);
    s.$table.children().children('tr').attr('role', 'row');
    s.$tbodies = a.children('tbody:not(.' + s.cssInfoBlock + ')').attr({
     'aria-live': 'polite',
     'aria-relevant': 'all'
    });
    if (s.$table.children('caption').length) {
     o = s.$table.children('caption')[0];
     if (!o.id) {
      o.id = s.namespace.slice(1) + 'caption';
     }
     s.$table.attr('aria-labelledby', o.id);
    }
    s.widgetInit = {};
    s.textExtraction = s.$table.attr('data-text-extraction') || s.textExtraction || 'basic';
    t.buildHeaders(s);
    t.fixColumnWidth(r);
    t.addWidgetFromClass(r);
    t.applyWidgetOptions(r);
    t.setupParsers(s);
    s.totalRows = 0;
    if (s.debug) {
     t.validateOptions(s);
    }
    if (!s.delayInit) {
     t.buildCache(s);
    }
    t.bindEvents(r, s.$headers, true);
    t.bindMethods(s);
    if (s.supportsDataObject && typeof a.data().sortlist !== 'undefined') {
     s.sortList = a.data().sortlist;
    } else if (n && (a.metadata() && a.metadata().sortlist)) {
     s.sortList = a.metadata().sortlist;
    }
    t.applyWidget(r, true);
    if (s.sortList.length > 0) {
     s.last.sortList = s.sortList;
     t.sortOn(s, s.sortList, {}, !s.initWidgets);
    } else {
     t.setHeadersCss(s);
     if (s.initWidgets) {
      t.applyWidget(r, false);
     }
    }
    if (s.showProcessing) {
     a.unbind('sortBegin' + s.namespace + ' sortEnd' + s.namespace).bind('sortBegin' + s.namespace + ' sortEnd' + s.namespace, function(e) {
      clearTimeout(s.timerProcessing);
      t.isProcessing(r);
      if (e.type === 'sortBegin') {
       s.timerProcessing = setTimeout(function() {
        t.isProcessing(r, true);
       }, 500);
      }
     });
    }
    r.hasInitialized = true;
    r.isProcessing = false;
    if (t.debug(s, 'core')) {
     console.log('Overall initialization time:' + t.benchmark(e.data(r, 'startoveralltimer')));
     if (t.debug(s, 'core') && console.groupEnd) {
      console.groupEnd();
     }
    }
    a.triggerHandler('tablesorter-initialized', r);
    if (typeof s.initialized === 'function') {
     s.initialized(r);
    }
   },
   bindMethods: function(r) {
    var s = r.$table, o = r.namespace, a = ('sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete ' + 'sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup ' + 'mouseleave ').split(' ').join(o + ' ');
    s.unbind(a.replace(t.regex.spaces, ' ')).bind('sortReset' + o, function(e, r) {
     e.stopPropagation();
     t.sortReset(this.config, function(e) {
      if (e.isApplyingWidgets) {
       setTimeout(function() {
        t.applyWidget(e, '', r);
       }, 100);
      } else {
       t.applyWidget(e, '', r);
      }
     });
    }).bind('updateAll' + o, function(e, r, s) {
     e.stopPropagation();
     t.updateAll(this.config, r, s);
    }).bind('update' + o + ' updateRows' + o, function(e, r, s) {
     e.stopPropagation();
     t.update(this.config, r, s);
    }).bind('updateHeaders' + o, function(e, r) {
     e.stopPropagation();
     t.updateHeaders(this.config, r);
    }).bind('updateCell' + o, function(e, r, s, o) {
     e.stopPropagation();
     t.updateCell(this.config, r, s, o);
    }).bind('addRows' + o, function(e, r, s, o) {
     e.stopPropagation();
     t.addRows(this.config, r, s, o);
    }).bind('updateComplete' + o, function() {
     this.isUpdating = false;
    }).bind('sorton' + o, function(e, r, s, o) {
     e.stopPropagation();
     t.sortOn(this.config, r, s, o);
    }).bind('appendCache' + o, function(r, s, o) {
     r.stopPropagation();
     t.appendCache(this.config, o);
     if (e.isFunction(s)) {
      s(this);
     }
    }).bind('updateCache' + o, function(e, r, s) {
     e.stopPropagation();
     t.updateCache(this.config, r, s);
    }).bind('applyWidgetId' + o, function(e, r) {
     e.stopPropagation();
     t.applyWidgetId(this, r);
    }).bind('applyWidgets' + o, function(e, r) {
     e.stopPropagation();
     t.applyWidget(this, false, r);
    }).bind('refreshWidgets' + o, function(e, r, s) {
     e.stopPropagation();
     t.refreshWidgets(this, r, s);
    }).bind('removeWidget' + o, function(e, r, s) {
     e.stopPropagation();
     t.removeWidget(this, r, s);
    }).bind('destroy' + o, function(e, r, s) {
     e.stopPropagation();
     t.destroy(this, r, s);
    }).bind('resetToLoadState' + o, function(s) {
     s.stopPropagation();
     t.removeWidget(this, true, false);
     var o = e.extend(true, {}, r.originalSettings);
     r = e.extend(true, {}, t.defaults, o);
     r.originalSettings = o;
     this.hasInitialized = false;
     t.setup(this, r);
    });
   },
   bindEvents: function(r, s, o) {
    r = e(r)[0];
    var a, n = r.config, i = n.namespace, l = null;
    if (o !== true) {
     s.addClass(i.slice(1) + '_extra_headers');
     a = t.getClosest(s, 'table');
     if (a.length && a[0].nodeName === 'TABLE' && a[0] !== r) {
      e(a[0]).addClass(i.slice(1) + '_extra_table');
     }
    }
    a = (n.pointerDown + ' ' + n.pointerUp + ' ' + n.pointerClick + ' sort keyup ').replace(t.regex.spaces, ' ').split(' ').join(i + ' ');
    s.find(n.selectorSort).add(s.filter(n.selectorSort)).unbind(a).bind(a, function(r, s) {
     var o, a, i, d = e(r.target), c = ' ' + r.type + ' ';
     if ((r.which || r.button) !== 1 && !c.match(' ' + n.pointerClick + ' | sort | keyup ') || c === ' keyup ' && r.which !== t.keyCodes.enter || c.match(' ' + n.pointerClick + ' ') && typeof r.which !== 'undefined') {
      return;
     }
     if (c.match(' ' + n.pointerUp + ' ') && l !== r.target && s !== true) {
      return;
     }
     if (c.match(' ' + n.pointerDown + ' ')) {
      l = r.target;
      i = d.jquery.split('.');
      if (i[0] === '1' && i[1] < 4) {
       r.preventDefault();
      }
      return;
     }
     l = null;
     o = t.getClosest(e(this), '.' + t.css.header);
     if (t.regex.formElements.test(r.target.nodeName) || d.hasClass(n.cssNoSort) || d.parents('.' + n.cssNoSort).length > 0 || o.hasClass('sorter-false') || d.parents('button').length > 0) {
      return !n.cancelSelection;
     }
     if (n.delayInit && t.isEmptyObject(n.cache)) {
      t.buildCache(n);
     }
     n.last.clickedIndex = o.attr('data-column') || o.index();
     a = n.$headerIndexed[n.last.clickedIndex][0];
     if (a && !a.sortDisabled) {
      t.initSort(n, a, r);
     }
    });
    if (n.cancelSelection) {
     s.attr('unselectable', 'on').bind('selectstart', false).css({
      'user-select': 'none',
      MozUserSelect: 'none'
     });
    }
   },
   buildHeaders: function(r) {
    var s, o, a, n;
    r.headerList = [];
    r.headerContent = [];
    r.sortVars = [];
    if (t.debug(r, 'core')) {
     a = new Date();
    }
    r.columns = t.computeColumnIndex(r.$table.children('thead, tfoot').children('tr'));
    o = r.cssIcon ? '<i class="' + (r.cssIcon === t.css.icon ? t.css.icon : r.cssIcon + ' ' + t.css.icon) + '"></i>' : '';
    r.$headers = e(e.map(r.$table.find(r.selectorHeaders), function(s, a) {
     var n, i, l, d, c, f = e(s);
     if (t.getClosest(f, 'tr').hasClass(r.cssIgnoreRow)) {
      return;
     }
     if (!/(th|td)/i.test(s.nodeName)) {
      c = t.getClosest(f, 'th, td');
      f.attr('data-column', c.attr('data-column'));
     }
     n = t.getColumnData(r.table, r.headers, a, true);
     r.headerContent[a] = f.html();
     if (r.headerTemplate !== '' && !f.find('.' + t.css.headerIn).length) {
      d = r.headerTemplate.replace(t.regex.templateContent, f.html()).replace(t.regex.templateIcon, f.find('.' + t.css.icon).length ? '' : o);
      if (r.onRenderTemplate) {
       i = r.onRenderTemplate.apply(f, [ a, d ]);
       if (i && typeof i === 'string') {
        d = i;
       }
      }
      f.html('<div class="' + t.css.headerIn + '">' + d + '</div>');
     }
     if (r.onRenderHeader) {
      r.onRenderHeader.apply(f, [ a, r, r.$table ]);
     }
     l = parseInt(f.attr('data-column'), 10);
     s.column = l;
     c = t.getOrder(t.getData(f, n, 'sortInitialOrder') || r.sortInitialOrder);
     r.sortVars[l] = {
      count: -1,
      order: c ? r.sortReset ? [ 1, 0, 2 ] : [ 1, 0 ] : r.sortReset ? [ 0, 1, 2 ] : [ 0, 1 ],
      lockedOrder: false,
      sortedBy: ''
     };
     c = t.getData(f, n, 'lockedOrder') || false;
     if (typeof c !== 'undefined' && c !== false) {
      r.sortVars[l].lockedOrder = true;
      r.sortVars[l].order = t.getOrder(c) ? [ 1, 1 ] : [ 0, 0 ];
     }
     r.headerList[a] = s;
     f.addClass(t.css.header + ' ' + r.cssHeader);
     t.getClosest(f, 'tr').addClass(t.css.headerRow + ' ' + r.cssHeaderRow).attr('role', 'row');
     if (r.tabIndex) {
      f.attr('tabindex', 0);
     }
     return s;
    }));
    r.$headerIndexed = [];
    for (n = 0; n < r.columns; n++) {
     if (t.isEmptyObject(r.sortVars[n])) {
      r.sortVars[n] = {};
     }
     s = r.$headers.filter('[data-column="' + n + '"]');
     r.$headerIndexed[n] = s.length ? s.not('.sorter-false').length ? s.not('.sorter-false').filter(':last') : s.filter(':last') : e();
    }
    r.$table.find(r.selectorHeaders).attr({
     scope: 'col',
     role: 'columnheader'
    });
    t.updateHeader(r);
    if (t.debug(r, 'core')) {
     console.log('Built headers:' + t.benchmark(a));
     console.log(r.$headers);
    }
   },
   addInstanceMethods: function(r) {
    e.extend(t.instanceMethods, r);
   },
   setupParsers: function(e, r) {
    var s, o, a, n, i, l, d, c, f, u, g, p, h, m, b = e.table, y = 0, w = t.debug(e, 'core'), x = {};
    e.$tbodies = e.$table.children('tbody:not(.' + e.cssInfoBlock + ')');
    h = typeof r === 'undefined' ? e.$tbodies : r;
    m = h.length;
    if (m === 0) {
     return w ? console.warn('Warning: *Empty table!* Not building a parser cache') : '';
    } else if (w) {
     p = new Date();
     console[console.group ? 'group' : 'log']('Detecting parsers for each column');
    }
    o = {
     extractors: [],
     parsers: []
    };
    while (y < m) {
     s = h[y].rows;
     if (s.length) {
      i = 0;
      n = e.columns;
      for (l = 0; l < n; l++) {
       d = e.$headerIndexed[i];
       if (d && d.length) {
        c = t.getColumnData(b, e.headers, i);
        g = t.getParserById(t.getData(d, c, 'extractor'));
        u = t.getParserById(t.getData(d, c, 'sorter'));
        f = t.getData(d, c, 'parser') === 'false';
        e.empties[i] = (t.getData(d, c, 'empty') || e.emptyTo || (e.emptyToBottom ? 'bottom' : 'top')).toLowerCase();
        e.strings[i] = (t.getData(d, c, 'string') || e.stringTo || 'max').toLowerCase();
        if (f) {
         u = t.getParserById('no-parser');
        }
        if (!g) {
         g = false;
        }
        if (!u) {
         u = t.detectParserForColumn(e, s, -1, i);
        }
        if (w) {
         x['(' + i + ') ' + d.text()] = {
          parser: u.id,
          extractor: g ? g.id : 'none',
          string: e.strings[i],
          empty: e.empties[i]
         };
        }
        o.parsers[i] = u;
        o.extractors[i] = g;
        a = d[0].colSpan - 1;
        if (a > 0) {
         i += a;
         n += a;
         while (a + 1 > 0) {
          o.parsers[i - a] = u;
          o.extractors[i - a] = g;
          a--;
         }
        }
       }
       i++;
      }
     }
     y += o.parsers.length ? m : 1;
    }
    if (w) {
     if (!t.isEmptyObject(x)) {
      console[console.table ? 'table' : 'log'](x);
     } else {
      console.warn('  No parsers detected!');
     }
     console.log('Completed detecting parsers' + t.benchmark(p));
     if (console.groupEnd) {
      console.groupEnd();
     }
    }
    e.parsers = o.parsers;
    e.extractors = o.extractors;
   },
   addParser: function(e) {
    var r, s = t.parsers.length, o = true;
    for (r = 0; r < s; r++) {
     if (t.parsers[r].id.toLowerCase() === e.id.toLowerCase()) {
      o = false;
     }
    }
    if (o) {
     t.parsers[t.parsers.length] = e;
    }
   },
   getParserById: function(e) {
    if (e == 'false') {
     return false;
    }
    var r, s = t.parsers.length;
    for (r = 0; r < s; r++) {
     if (t.parsers[r].id.toLowerCase() === e.toString().toLowerCase()) {
      return t.parsers[r];
     }
    }
    return false;
   },
   detectParserForColumn: function(r, s, o, a) {
    var n, i, l, d = t.parsers.length, c = false, f = '', u = t.debug(r, 'core'), g = true;
    while (f === '' && g) {
     o++;
     l = s[o];
     if (l && o < 50) {
      if (l.className.indexOf(t.cssIgnoreRow) < 0) {
       c = s[o].cells[a];
       f = t.getElementText(r, c, a);
       i = e(c);
       if (u) {
        console.log('Checking if value was empty on row ' + o + ', column: ' + a + ': "' + f + '"');
       }
      }
     } else {
      g = false;
     }
    }
    while (--d >= 0) {
     n = t.parsers[d];
     if (n && n.id !== 'text' && n.is && n.is(f, r.table, c, i)) {
      return n;
     }
    }
    return t.getParserById('text');
   },
   getElementText: function(r, s, o) {
    if (!s) {
     return '';
    }
    var a, n = r.textExtraction || '', i = s.jquery ? s : e(s);
    if (typeof n === 'string') {
     if (n === 'basic' && typeof (a = i.attr(r.textAttribute)) !== 'undefined') {
      return e.trim(a);
     }
     return e.trim(s.textContent || i.text());
    } else {
     if (typeof n === 'function') {
      return e.trim(n(i[0], r.table, o));
     } else if (typeof (a = t.getColumnData(r.table, n, o)) === 'function') {
      return e.trim(a(i[0], r.table, o));
     }
    }
    return e.trim(i[0].textContent || i.text());
   },
   getParsedText: function(e, r, s, o) {
    if (typeof o === 'undefined') {
     o = t.getElementText(e, r, s);
    }
    var a = '' + o, n = e.parsers[s], i = e.extractors[s];
    if (n) {
     if (i && typeof i.format === 'function') {
      o = i.format(o, e.table, r, s);
     }
     a = n.id === 'no-parser' ? '' : n.format('' + o, e.table, r, s);
     if (e.ignoreCase && typeof a === 'string') {
      a = a.toLowerCase();
     }
    }
    return a;
   },
   buildCache: function(r, s, o) {
    var a, n, i, l, d, c, f, u, g, p, h, m, b, y, w, x, C, v, $, I, D, R, T = r.table, A = r.parsers, L = t.debug(r, 'core');
    r.$tbodies = r.$table.children('tbody:not(.' + r.cssInfoBlock + ')');
    f = typeof o === 'undefined' ? r.$tbodies : o, r.cache = {};
    r.totalRows = 0;
    if (!A) {
     return L ? console.warn('Warning: *Empty table!* Not building a cache') : '';
    }
    if (L) {
     m = new Date();
    }
    if (r.showProcessing) {
     t.isProcessing(T, true);
    }
    for (c = 0; c < f.length; c++) {
     x = [];
     a = r.cache[c] = {
      normalized: []
     };
     b = f[c] && f[c].rows.length || 0;
     for (l = 0; l < b; ++l) {
      y = {
       child: [],
       raw: []
      };
      u = e(f[c].rows[l]);
      g = [];
      if (u.hasClass(r.selectorRemove.slice(1))) {
       continue;
      }
      if (u.hasClass(r.cssChildRow) && l !== 0) {
       D = a.normalized.length - 1;
       w = a.normalized[D][r.columns];
       w.$row = w.$row.add(u);
       if (!u.prev().hasClass(r.cssChildRow)) {
        u.prev().addClass(t.css.cssHasChild);
       }
       p = u.children('th, td');
       D = w.child.length;
       w.child[D] = [];
       v = 0;
       I = r.columns;
       for (d = 0; d < I; d++) {
        h = p[d];
        if (h) {
         w.child[D][d] = t.getParsedText(r, h, d);
         C = p[d].colSpan - 1;
         if (C > 0) {
          v += C;
          I += C;
         }
        }
        v++;
       }
       continue;
      }
      y.$row = u;
      y.order = l;
      v = 0;
      I = r.columns;
      for (d = 0; d < I; ++d) {
       h = u[0].cells[d];
       if (h && v < r.columns) {
        $ = typeof A[v] !== 'undefined';
        if (!$ && L) {
         console.warn('No parser found for row: ' + l + ', column: ' + d + '; cell containing: "' + e(h).text() + '"; does it have a header?');
        }
        n = t.getElementText(r, h, v);
        y.raw[v] = n;
        i = t.getParsedText(r, h, v, n);
        g[v] = i;
        if ($ && (A[v].type || '').toLowerCase() === 'numeric') {
         x[v] = Math.max(Math.abs(i) || 0, x[v] || 0);
        }
        C = h.colSpan - 1;
        if (C > 0) {
         R = 0;
         while (R <= C) {
          i = r.duplicateSpan || R === 0 ? i : typeof r.textExtraction !== 'string' ? t.getElementText(r, h, v + R) || '' : '';
          y.raw[v + R] = i;
          g[v + R] = i;
          R++;
         }
         v += C;
         I += C;
        }
       }
       v++;
      }
      g[r.columns] = y;
      a.normalized[a.normalized.length] = g;
     }
     a.colMax = x;
     r.totalRows += a.normalized.length;
    }
    if (r.showProcessing) {
     t.isProcessing(T);
    }
    if (L) {
     D = Math.min(5, r.cache[0].normalized.length);
     console[console.group ? 'group' : 'log']('Building cache for ' + r.totalRows + ' rows (showing ' + D + ' rows in log) and ' + r.columns + ' columns' + t.benchmark(m));
     n = {};
     for (d = 0; d < r.columns; d++) {
      for (v = 0; v < D; v++) {
       if (!n['row: ' + v]) {
        n['row: ' + v] = {};
       }
       n['row: ' + v][r.$headerIndexed[d].text()] = r.cache[0].normalized[v][d];
      }
     }
     console[console.table ? 'table' : 'log'](n);
     if (console.groupEnd) {
      console.groupEnd();
     }
    }
    if (e.isFunction(s)) {
     s(T);
    }
   },
   getColumnText: function(r, s, o, a) {
    r = e(r)[0];
    var n, i, l, d, c, f, u, g, p, h, m = typeof o === 'function', b = s === 'all', y = {
     raw: [],
     parsed: [],
     $cell: []
    }, w = r.config;
    if (t.isEmptyObject(w)) {
     if (t.debug(w, 'core')) {
      console.warn('No cache found - aborting getColumnText function!');
     }
    } else {
     c = w.$tbodies.length;
     for (n = 0; n < c; n++) {
      l = w.cache[n].normalized;
      f = l.length;
      for (i = 0; i < f; i++) {
       d = l[i];
       if (a && !d[w.columns].$row.is(a)) {
        continue;
       }
       h = true;
       g = b ? d.slice(0, w.columns) : d[s];
       d = d[w.columns];
       u = b ? d.raw : d.raw[s];
       p = b ? d.$row.children() : d.$row.children().eq(s);
       if (m) {
        h = o({
         tbodyIndex: n,
         rowIndex: i,
         parsed: g,
         raw: u,
         $row: d.$row,
         $cell: p
        });
       }
       if (h !== false) {
        y.parsed[y.parsed.length] = g;
        y.raw[y.raw.length] = u;
        y.$cell[y.$cell.length] = p;
       }
      }
     }
     return y;
    }
   },
   setHeadersCss: function(r) {
    var s, o, a = r.sortList, n = a.length, i = t.css.sortNone + ' ' + r.cssNone, l = [ t.css.sortAsc + ' ' + r.cssAsc, t.css.sortDesc + ' ' + r.cssDesc ], d = [ r.cssIconAsc, r.cssIconDesc, r.cssIconNone ], c = [ 'ascending', 'descending' ], f = function(e, r) {
     e.removeClass(i).addClass(l[r]).attr('aria-sort', c[r]).find('.' + t.css.icon).removeClass(d[2]).addClass(d[r]);
    }, u = r.$table.find('tfoot tr').children('td, th').add(e(r.namespace + '_extra_headers')).removeClass(l.join(' ')), g = r.$headers.add(e('thead ' + r.namespace + '_extra_headers')).removeClass(l.join(' ')).addClass(i).attr('aria-sort', 'none').find('.' + t.css.icon).removeClass(d.join(' ')).end();
    g.not('.sorter-false').find('.' + t.css.icon).addClass(d[2]);
    if (r.cssIconDisabled) {
     g.filter('.sorter-false').find('.' + t.css.icon).addClass(r.cssIconDisabled);
    }
    for (s = 0; s < n; s++) {
     if (a[s][1] !== 2) {
      g = r.$headers.filter(function(e) {
       var s = true, o = r.$headers.eq(e), a = parseInt(o.attr('data-column'), 10), n = a + t.getClosest(o, 'th, td')[0].colSpan;
       for (;a < n; a++) {
        s = s ? s || t.isValueInArray(a, r.sortList) > -1 : false;
       }
       return s;
      });
      g = g.not('.sorter-false').filter('[data-column="' + a[s][0] + '"]' + (n === 1 ? ':last' : ''));
      if (g.length) {
       for (o = 0; o < g.length; o++) {
        if (!g[o].sortDisabled) {
         f(g.eq(o), a[s][1]);
        }
       }
      }
      if (u.length) {
       f(u.filter('[data-column="' + a[s][0] + '"]'), a[s][1]);
      }
     }
    }
    n = r.$headers.length;
    for (s = 0; s < n; s++) {
     t.setColumnAriaLabel(r, r.$headers.eq(s));
    }
   },
   getClosest: function(t, r) {
    if (e.fn.closest) {
     return t.closest(r);
    }
    return t.is(r) ? t : t.parents(r).filter(':first');
   },
   setColumnAriaLabel: function(r, s, o) {
    if (s.length) {
     var a = parseInt(s.attr('data-column'), 10), n = r.sortVars[a], i = s.hasClass(t.css.sortAsc) ? 'sortAsc' : s.hasClass(t.css.sortDesc) ? 'sortDesc' : 'sortNone', l = e.trim(s.text()) + ': ' + t.language[i];
     if (s.hasClass('sorter-false') || o === false) {
      l += t.language.sortDisabled;
     } else {
      i = (n.count + 1) % n.order.length;
      o = n.order[i];
      l += t.language[o === 0 ? 'nextAsc' : o === 1 ? 'nextDesc' : 'nextNone'];
     }
     s.attr('aria-label', l);
     if (n.sortedBy) {
      s.attr('data-sortedBy', n.sortedBy);
     } else {
      s.removeAttr('data-sortedBy');
     }
    }
   },
   updateHeader: function(e) {
    var r, s, o, a, n = e.table, i = e.$headers.length;
    for (r = 0; r < i; r++) {
     o = e.$headers.eq(r);
     a = t.getColumnData(n, e.headers, r, true);
     s = t.getData(o, a, 'sorter') === 'false' || t.getData(o, a, 'parser') === 'false';
     t.setColumnSort(e, o, s);
    }
   },
   setColumnSort: function(e, t, r) {
    var s = e.table.id;
    t[0].sortDisabled = r;
    t[r ? 'addClass' : 'removeClass']('sorter-false').attr('aria-disabled', '' + r);
    if (e.tabIndex) {
     if (r) {
      t.removeAttr('tabindex');
     } else {
      t.attr('tabindex', '0');
     }
    }
    if (s) {
     if (r) {
      t.removeAttr('aria-controls');
     } else {
      t.attr('aria-controls', s);
     }
    }
   },
   updateHeaderSortCount: function(r, s) {
    var o, a, n, i, l, d, c, f, u = s || r.sortList, g = u.length;
    r.sortList = [];
    for (i = 0; i < g; i++) {
     c = u[i];
     o = parseInt(c[0], 10);
     if (o < r.columns) {
      if (!r.sortVars[o].order) {
       if (t.getOrder(r.sortInitialOrder)) {
        f = r.sortReset ? [ 1, 0, 2 ] : [ 1, 0 ];
       } else {
        f = r.sortReset ? [ 0, 1, 2 ] : [ 0, 1 ];
       }
       r.sortVars[o].order = f;
       r.sortVars[o].count = 0;
      }
      f = r.sortVars[o].order;
      a = ('' + c[1]).match(/^(1|d|s|o|n)/);
      a = a ? a[0] : '';
      switch (a) {
      case '1':
      case 'd':
       a = 1;
       
    break;

      case 's':
       a = l || 0;
       
    break;

      case 'o':
       d = f[(l || 0) % f.length];
       a = d === 0 ? 1 : d === 1 ? 0 : 2;
       
    break;

      case 'n':
       a = f[++r.sortVars[o].count % f.length];
       
    break;

      default:
       a = 0;
       
    break;
      }
      l = i === 0 ? a : l;
      n = [ o, parseInt(a, 10) || 0 ];
      r.sortList[r.sortList.length] = n;
      a = e.inArray(n[1], f);
      r.sortVars[o].count = a >= 0 ? a : n[1] % f.length;
     }
    }
   },
   updateAll: function(e, r, s) {
    var o = e.table;
    o.isUpdating = true;
    t.refreshWidgets(o, true, true);
    t.buildHeaders(e);
    t.bindEvents(o, e.$headers, true);
    t.bindMethods(e);
    t.commonUpdate(e, r, s);
   },
   update: function(e, r, s) {
    var o = e.table;
    o.isUpdating = true;
    t.updateHeader(e);
    t.commonUpdate(e, r, s);
   },
   updateHeaders: function(e, r) {
    e.table.isUpdating = true;
    t.buildHeaders(e);
    t.bindEvents(e.table, e.$headers, true);
    t.resortComplete(e, r);
   },
   updateCell: function(r, s, o, a) {
    if (e(s).closest('tr').hasClass(r.cssChildRow)) {
     console.warn('Tablesorter Warning! "updateCell" for child row content has been disabled, use "update" instead');
     return;
    }
    if (t.isEmptyObject(r.cache)) {
     t.updateHeader(r);
     t.commonUpdate(r, o, a);
     return;
    }
    r.table.isUpdating = true;
    r.$table.find(r.selectorRemove).remove();
    var n, i, l, d, c, f, u = r.$tbodies, g = e(s), p = u.index(t.getClosest(g, 'tbody')), h = r.cache[p], m = t.getClosest(g, 'tr');
    s = g[0];
    if (u.length && p >= 0) {
     l = u.eq(p).find('tr').not('.' + r.cssChildRow).index(m);
     c = h.normalized[l];
     f = m[0].cells.length;
     if (f !== r.columns) {
      d = 0;
      n = false;
      for (i = 0; i < f; i++) {
       if (!n && m[0].cells[i] !== s) {
        d += m[0].cells[i].colSpan;
       } else {
        n = true;
       }
      }
     } else {
      d = g.index();
     }
     n = t.getElementText(r, s, d);
     c[r.columns].raw[d] = n;
     n = t.getParsedText(r, s, d, n);
     c[d] = n;
     if ((r.parsers[d].type || '').toLowerCase() === 'numeric') {
      h.colMax[d] = Math.max(Math.abs(n) || 0, h.colMax[d] || 0);
     }
     n = o !== 'undefined' ? o : r.resort;
     if (n !== false) {
      t.checkResort(r, n, a);
     } else {
      t.resortComplete(r, a);
     }
    } else {
     if (t.debug(r, 'core')) {
      console.error('updateCell aborted, tbody missing or not within the indicated table');
     }
     r.table.isUpdating = false;
    }
   },
   addRows: function(r, s, o, a) {
    var n, i, l, d, c, f, u, g, p, h, m, b, y, w = typeof s === 'string' && r.$tbodies.length === 1 && /<tr/.test(s || ''), x = r.table;
    if (w) {
     s = e(s);
     r.$tbodies.append(s);
    } else if (!s || !(s instanceof e) || t.getClosest(s, 'table')[0] !== r.table) {
     if (t.debug(r, 'core')) {
      console.error('addRows method requires (1) a jQuery selector reference to rows that have already ' + 'been added to the table, or (2) row HTML string to be added to a table with only one tbody');
     }
     return false;
    }
    x.isUpdating = true;
    if (t.isEmptyObject(r.cache)) {
     t.updateHeader(r);
     t.commonUpdate(r, o, a);
    } else {
     c = s.filter('tr').attr('role', 'row').length;
     l = r.$tbodies.index(s.parents('tbody').filter(':first'));
     if (!(r.parsers && r.parsers.length)) {
      t.setupParsers(r);
     }
     for (d = 0; d < c; d++) {
      p = 0;
      u = s[d].cells.length;
      g = r.cache[l].normalized.length;
      m = [];
      h = {
       child: [],
       raw: [],
       $row: s.eq(d),
       order: g
      };
      for (f = 0; f < u; f++) {
       b = s[d].cells[f];
       n = t.getElementText(r, b, p);
       h.raw[p] = n;
       i = t.getParsedText(r, b, p, n);
       m[p] = i;
       if ((r.parsers[p].type || '').toLowerCase() === 'numeric') {
        r.cache[l].colMax[p] = Math.max(Math.abs(i) || 0, r.cache[l].colMax[p] || 0);
       }
       y = b.colSpan - 1;
       if (y > 0) {
        p += y;
       }
       p++;
      }
      m[r.columns] = h;
      r.cache[l].normalized[g] = m;
     }
     t.checkResort(r, o, a);
    }
   },
   updateCache: function(e, r, s) {
    if (!(e.parsers && e.parsers.length)) {
     t.setupParsers(e, s);
    }
    t.buildCache(e, r, s);
   },
   appendCache: function(e, r) {
    var s, o, a, n, i, l, d, c = e.table, f = e.$tbodies, u = [], g = e.cache;
    if (t.isEmptyObject(g)) {
     return e.appender ? e.appender(c, u) : c.isUpdating ? e.$table.triggerHandler('updateComplete', c) : '';
    }
    if (t.debug(e, 'core')) {
     d = new Date();
    }
    for (l = 0; l < f.length; l++) {
     a = f.eq(l);
     if (a.length) {
      n = t.processTbody(c, a, true);
      s = g[l].normalized;
      o = s.length;
      for (i = 0; i < o; i++) {
       u[u.length] = s[i][e.columns].$row;
       if (!e.appender || e.pager && !e.pager.removeRows && !e.pager.ajax) {
        n.append(s[i][e.columns].$row);
       }
      }
      t.processTbody(c, n, false);
     }
    }
    if (e.appender) {
     e.appender(c, u);
    }
    if (t.debug(e, 'core')) {
     console.log('Rebuilt table' + t.benchmark(d));
    }
    if (!r && !e.appender) {
     t.applyWidget(c);
    }
    if (c.isUpdating) {
     e.$table.triggerHandler('updateComplete', c);
    }
   },
   commonUpdate: function(e, r, s) {
    e.$table.find(e.selectorRemove).remove();
    t.setupParsers(e);
    t.buildCache(e);
    t.checkResort(e, r, s);
   },
   initSort: function(r, s, o) {
    if (r.table.isUpdating) {
     return setTimeout(function() {
      t.initSort(r, s, o);
     }, 50);
    }
    var a, n, i, l, d, c, f, u = !o[r.sortMultiSortKey], g = r.table, p = r.$headers.length, h = t.getClosest(e(s), 'th, td'), m = parseInt(h.attr('data-column'), 10), b = o.type === 'mouseup' ? 'user' : o.type, y = r.sortVars[m].order;
    h = h[0];
    r.$table.triggerHandler('sortStart', g);
    c = (r.sortVars[m].count + 1) % y.length;
    r.sortVars[m].count = o[r.sortResetKey] ? 2 : c;
    if (r.sortRestart) {
     for (i = 0; i < p; i++) {
      f = r.$headers.eq(i);
      c = parseInt(f.attr('data-column'), 10);
      if (m !== c && (u || f.hasClass(t.css.sortNone))) {
       r.sortVars[c].count = -1;
      }
     }
    }
    if (u) {
     e.each(r.sortVars, function(e) {
      r.sortVars[e].sortedBy = '';
     });
     r.sortList = [];
     r.last.sortList = [];
     if (r.sortForce !== null) {
      a = r.sortForce;
      for (n = 0; n < a.length; n++) {
       if (a[n][0] !== m) {
        r.sortList[r.sortList.length] = a[n];
        r.sortVars[a[n][0]].sortedBy = 'sortForce';
       }
      }
     }
     l = y[r.sortVars[m].count];
     if (l < 2) {
      r.sortList[r.sortList.length] = [ m, l ];
      r.sortVars[m].sortedBy = b;
      if (h.colSpan > 1) {
       for (n = 1; n < h.colSpan; n++) {
        r.sortList[r.sortList.length] = [ m + n, l ];
        r.sortVars[m + n].count = e.inArray(l, y);
        r.sortVars[m + n].sortedBy = b;
       }
      }
     }
    } else {
     r.sortList = e.extend([], r.last.sortList);
     if (t.isValueInArray(m, r.sortList) >= 0) {
      r.sortVars[m].sortedBy = b;
      for (n = 0; n < r.sortList.length; n++) {
       c = r.sortList[n];
       if (c[0] === m) {
        c[1] = y[r.sortVars[m].count];
        if (c[1] === 2) {
         r.sortList.splice(n, 1);
         r.sortVars[m].count = -1;
        }
       }
      }
     } else {
      l = y[r.sortVars[m].count];
      r.sortVars[m].sortedBy = b;
      if (l < 2) {
       r.sortList[r.sortList.length] = [ m, l ];
       if (h.colSpan > 1) {
        for (n = 1; n < h.colSpan; n++) {
         r.sortList[r.sortList.length] = [ m + n, l ];
         r.sortVars[m + n].count = e.inArray(l, y);
         r.sortVars[m + n].sortedBy = b;
        }
       }
      }
     }
    }
    r.last.sortList = e.extend([], r.sortList);
    if (r.sortList.length && r.sortAppend) {
     a = e.isArray(r.sortAppend) ? r.sortAppend : r.sortAppend[r.sortList[0][0]];
     if (!t.isEmptyObject(a)) {
      for (n = 0; n < a.length; n++) {
       if (a[n][0] !== m && t.isValueInArray(a[n][0], r.sortList) < 0) {
        l = a[n][1];
        d = ('' + l).match(/^(a|d|s|o|n)/);
        if (d) {
         c = r.sortList[0][1];
         switch (d[0]) {
         case 'd':
          l = 1;
          
    break;

         case 's':
          l = c;
          
    break;

         case 'o':
          l = c === 0 ? 1 : 0;
          
    break;

         case 'n':
          l = (c + 1) % y.length;
          
    break;

         default:
          l = 0;
          
    break;
         }
        }
        r.sortList[r.sortList.length] = [ a[n][0], l ];
        r.sortVars[a[n][0]].sortedBy = 'sortAppend';
       }
      }
     }
    }
    r.$table.triggerHandler('sortBegin', g);
    setTimeout(function() {
     t.setHeadersCss(r);
     t.multisort(r);
     t.appendCache(r);
     r.$table.triggerHandler('sortBeforeEnd', g);
     r.$table.triggerHandler('sortEnd', g);
    }, 1);
   },
   multisort: function(e) {
    var r, s, o, a, n, i = e.table, l = [], d = 0, c = e.textSorter || '', f = e.sortList, u = f.length, g = e.$tbodies.length;
    if (e.serverSideSorting || t.isEmptyObject(e.cache)) {
     return;
    }
    if (t.debug(e, 'core')) {
     s = new Date();
    }
    if (typeof c === 'object') {
     o = e.columns;
     while (o--) {
      n = t.getColumnData(i, c, o);
      if (typeof n === 'function') {
       l[o] = n;
      }
     }
    }
    for (r = 0; r < g; r++) {
     o = e.cache[r].colMax;
     a = e.cache[r].normalized;
     a.sort(function(r, s) {
      var a, n, g, p, h, m, b;
      for (a = 0; a < u; a++) {
       g = f[a][0];
       p = f[a][1];
       d = p === 0;
       if (e.sortStable && r[g] === s[g] && u === 1) {
        return r[e.columns].order - s[e.columns].order;
       }
       n = /n/i.test(t.getSortType(e.parsers, g));
       if (n && e.strings[g]) {
        if (typeof t.string[e.strings[g]] === 'boolean') {
         n = (d ? 1 : -1) * (t.string[e.strings[g]] ? -1 : 1);
        } else {
         n = e.strings[g] ? t.string[e.strings[g]] || 0 : 0;
        }
        h = e.numberSorter ? e.numberSorter(r[g], s[g], d, o[g], i) : t['sortNumeric' + (d ? 'Asc' : 'Desc')](r[g], s[g], n, o[g], g, e);
       } else {
        m = d ? r : s;
        b = d ? s : r;
        if (typeof c === 'function') {
         h = c(m[g], b[g], d, g, i);
        } else if (typeof l[g] === 'function') {
         h = l[g](m[g], b[g], d, g, i);
        } else {
         h = t['sortNatural' + (d ? 'Asc' : 'Desc')](r[g] || '', s[g] || '', g, e);
        }
       }
       if (h) {
        return h;
       }
      }
      return r[e.columns].order - s[e.columns].order;
     });
    }
    if (t.debug(e, 'core')) {
     console.log('Applying sort ' + f.toString() + t.benchmark(s));
    }
   },
   resortComplete: function(t, r) {
    if (t.table.isUpdating) {
     t.$table.triggerHandler('updateComplete', t.table);
    }
    if (e.isFunction(r)) {
     r(t.table);
    }
   },
   checkResort: function(r, s, o) {
    var a = e.isArray(s) ? s : r.sortList, n = typeof s === 'undefined' ? r.resort : s;
    if (n !== false && !r.serverSideSorting && !r.table.isProcessing) {
     if (a.length) {
      t.sortOn(r, a, function() {
       t.resortComplete(r, o);
      }, true);
     } else {
      t.sortReset(r, function() {
       t.resortComplete(r, o);
       t.applyWidget(r.table, false);
      });
     }
    } else {
     t.resortComplete(r, o);
     t.applyWidget(r.table, false);
    }
   },
   sortOn: function(r, s, o, a) {
    var n, i = r.table;
    r.$table.triggerHandler('sortStart', i);
    for (n = 0; n < r.columns; n++) {
     r.sortVars[n].sortedBy = t.isValueInArray(n, s) > -1 ? 'sorton' : '';
    }
    t.updateHeaderSortCount(r, s);
    t.setHeadersCss(r);
    if (r.delayInit && t.isEmptyObject(r.cache)) {
     t.buildCache(r);
    }
    r.$table.triggerHandler('sortBegin', i);
    t.multisort(r);
    t.appendCache(r, a);
    r.$table.triggerHandler('sortBeforeEnd', i);
    r.$table.triggerHandler('sortEnd', i);
    t.applyWidget(i);
    if (e.isFunction(o)) {
     o(i);
    }
   },
   sortReset: function(r, s) {
    r.sortList = [];
    var o;
    for (o = 0; o < r.columns; o++) {
     r.sortVars[o].count = -1;
     r.sortVars[o].sortedBy = '';
    }
    t.setHeadersCss(r);
    t.multisort(r);
    t.appendCache(r);
    if (e.isFunction(s)) {
     s(r.table);
    }
   },
   getSortType: function(e, t) {
    return e && e[t] ? e[t].type || '' : '';
   },
   getOrder: function(e) {
    return /^d/i.test(e) || e === 1;
   },
   sortNatural: function(e, r) {
    if (e === r) {
     return 0;
    }
    e = (e || '').toString();
    r = (r || '').toString();
    var s, o, a, n, i, l, d = t.regex;
    if (d.hex.test(r)) {
     s = parseInt(e.match(d.hex), 16);
     o = parseInt(r.match(d.hex), 16);
     if (s < o) {
      return -1;
     }
     if (s > o) {
      return 1;
     }
    }
    s = e.replace(d.chunk, '\\0$1\\0').replace(d.chunks, '').split('\\0');
    o = r.replace(d.chunk, '\\0$1\\0').replace(d.chunks, '').split('\\0');
    l = Math.max(s.length, o.length);
    for (i = 0; i < l; i++) {
     a = isNaN(s[i]) ? s[i] || 0 : parseFloat(s[i]) || 0;
     n = isNaN(o[i]) ? o[i] || 0 : parseFloat(o[i]) || 0;
     if (isNaN(a) !== isNaN(n)) {
      return isNaN(a) ? 1 : -1;
     }
     if (typeof a !== typeof n) {
      a += '';
      n += '';
     }
     if (a < n) {
      return -1;
     }
     if (a > n) {
      return 1;
     }
    }
    return 0;
   },
   sortNaturalAsc: function(e, r, s, o) {
    if (e === r) {
     return 0;
    }
    var a = t.string[o.empties[s] || o.emptyTo];
    if (e === '' && a !== 0) {
     return typeof a === 'boolean' ? a ? -1 : 1 : -a || -1;
    }
    if (r === '' && a !== 0) {
     return typeof a === 'boolean' ? a ? 1 : -1 : a || 1;
    }
    return t.sortNatural(e, r);
   },
   sortNaturalDesc: function(e, r, s, o) {
    if (e === r) {
     return 0;
    }
    var a = t.string[o.empties[s] || o.emptyTo];
    if (e === '' && a !== 0) {
     return typeof a === 'boolean' ? a ? -1 : 1 : a || 1;
    }
    if (r === '' && a !== 0) {
     return typeof a === 'boolean' ? a ? 1 : -1 : -a || -1;
    }
    return t.sortNatural(r, e);
   },
   sortText: function(e, t) {
    return e > t ? 1 : e < t ? -1 : 0;
   },
   getTextValue: function(e, t, r) {
    if (r) {
     var s, o = e ? e.length : 0, a = r + t;
     for (s = 0; s < o; s++) {
      a += e.charCodeAt(s);
     }
     return t * a;
    }
    return 0;
   },
   sortNumericAsc: function(e, r, s, o, a, n) {
    if (e === r) {
     return 0;
    }
    var i = t.string[n.empties[a] || n.emptyTo];
    if (e === '' && i !== 0) {
     return typeof i === 'boolean' ? i ? -1 : 1 : -i || -1;
    }
    if (r === '' && i !== 0) {
     return typeof i === 'boolean' ? i ? 1 : -1 : i || 1;
    }
    if (isNaN(e)) {
     e = t.getTextValue(e, s, o);
    }
    if (isNaN(r)) {
     r = t.getTextValue(r, s, o);
    }
    return e - r;
   },
   sortNumericDesc: function(e, r, s, o, a, n) {
    if (e === r) {
     return 0;
    }
    var i = t.string[n.empties[a] || n.emptyTo];
    if (e === '' && i !== 0) {
     return typeof i === 'boolean' ? i ? -1 : 1 : i || 1;
    }
    if (r === '' && i !== 0) {
     return typeof i === 'boolean' ? i ? 1 : -1 : -i || -1;
    }
    if (isNaN(e)) {
     e = t.getTextValue(e, s, o);
    }
    if (isNaN(r)) {
     r = t.getTextValue(r, s, o);
    }
    return r - e;
   },
   sortNumeric: function(e, t) {
    return e - t;
   },
   addWidget: function(e) {
    if (e.id && !t.isEmptyObject(t.getWidgetById(e.id))) {
     console.warn('"' + e.id + '" widget was loaded more than once!');
    }
    t.widgets[t.widgets.length] = e;
   },
   hasWidget: function(t, r) {
    t = e(t);
    return t.length && t[0].config && t[0].config.widgetInit[r] || false;
   },
   getWidgetById: function(e) {
    var r, s, o = t.widgets.length;
    for (r = 0; r < o; r++) {
     s = t.widgets[r];
     if (s && s.id && s.id.toLowerCase() === e.toLowerCase()) {
      return s;
     }
    }
   },
   applyWidgetOptions: function(r) {
    var s, o, a, n = r.config, i = n.widgets.length;
    if (i) {
     for (s = 0; s < i; s++) {
      o = t.getWidgetById(n.widgets[s]);
      if (o && o.options) {
       a = e.extend(true, {}, o.options);
       n.widgetOptions = e.extend(true, a, n.widgetOptions);
       e.extend(true, t.defaults.widgetOptions, o.options);
      }
     }
    }
   },
   addWidgetFromClass: function(e) {
    var r, s, o = e.config, a = '^' + o.widgetClass.replace(t.regex.templateName, '(\\S+)+') + '$', n = new RegExp(a, 'g'), i = (e.className || '').split(t.regex.spaces);
    if (i.length) {
     r = i.length;
     for (s = 0; s < r; s++) {
      if (i[s].match(n)) {
       o.widgets[o.widgets.length] = i[s].replace(n, '$1');
      }
     }
    }
   },
   applyWidgetId: function(r, s, o) {
    r = e(r)[0];
    var a, n, i, l = r.config, d = l.widgetOptions, c = t.debug(l, 'core'), f = t.getWidgetById(s);
    if (f) {
     i = f.id;
     a = false;
     if (e.inArray(i, l.widgets) < 0) {
      l.widgets[l.widgets.length] = i;
     }
     if (c) {
      n = new Date();
     }
     if (o || !l.widgetInit[i]) {
      l.widgetInit[i] = true;
      if (r.hasInitialized) {
       t.applyWidgetOptions(r);
      }
      if (typeof f.init === 'function') {
       a = true;
       if (c) {
        console[console.group ? 'group' : 'log']('Initializing ' + i + ' widget');
       }
       f.init(r, f, l, d);
      }
     }
     if (!o && typeof f.format === 'function') {
      a = true;
      if (c) {
       console[console.group ? 'group' : 'log']('Updating ' + i + ' widget');
      }
      f.format(r, l, d, false);
     }
     if (c) {
      if (a) {
       console.log('Completed ' + (o ? 'initializing ' : 'applying ') + i + ' widget' + t.benchmark(n));
       if (console.groupEnd) {
        console.groupEnd();
       }
      }
     }
    }
   },
   applyWidget: function(r, s, o) {
    r = e(r)[0];
    var a, n, i, l, d, c = r.config, f = t.debug(c, 'core'), u = [];
    if (s !== false && r.hasInitialized && (r.isApplyingWidgets || r.isUpdating)) {
     return;
    }
    if (f) {
     d = new Date();
    }
    t.addWidgetFromClass(r);
    clearTimeout(c.timerReady);
    if (c.widgets.length) {
     r.isApplyingWidgets = true;
     c.widgets = e.grep(c.widgets, function(t, r) {
      return e.inArray(t, c.widgets) === r;
     });
     i = c.widgets || [];
     n = i.length;
     for (a = 0; a < n; a++) {
      l = t.getWidgetById(i[a]);
      if (l && l.id) {
       if (!l.priority) {
        l.priority = 10;
       }
       u[a] = l;
      } else if (f) {
       console.warn('"' + i[a] + '" was enabled, but the widget code has not been loaded!');
      }
     }
     u.sort(function(e, t) {
      return e.priority < t.priority ? -1 : e.priority === t.priority ? 0 : 1;
     });
     n = u.length;
     if (f) {
      console[console.group ? 'group' : 'log']('Start ' + (s ? 'initializing' : 'applying') + ' widgets');
     }
     for (a = 0; a < n; a++) {
      l = u[a];
      if (l && l.id) {
       t.applyWidgetId(r, l.id, s);
      }
     }
     if (f && console.groupEnd) {
      console.groupEnd();
     }
    }
    c.timerReady = setTimeout(function() {
     r.isApplyingWidgets = false;
     e.data(r, 'lastWidgetApplication', new Date());
     c.$table.triggerHandler('tablesorter-ready');
     if (!s && typeof o === 'function') {
      o(r);
     }
     if (f) {
      l = c.widgets.length;
      console.log('Completed ' + (s === true ? 'initializing ' : 'applying ') + l + ' widget' + (l !== 1 ? 's' : '') + t.benchmark(d));
     }
    }, 10);
   },
   removeWidget: function(r, s, o) {
    r = e(r)[0];
    var a, n, i, l, d = r.config;
    if (s === true) {
     s = [];
     l = t.widgets.length;
     for (i = 0; i < l; i++) {
      n = t.widgets[i];
      if (n && n.id) {
       s[s.length] = n.id;
      }
     }
    } else {
     s = (e.isArray(s) ? s.join(',') : s || '').toLowerCase().split(/[\s,]+/);
    }
    l = s.length;
    for (a = 0; a < l; a++) {
     n = t.getWidgetById(s[a]);
     i = e.inArray(s[a], d.widgets);
     if (i >= 0 && o !== true) {
      d.widgets.splice(i, 1);
     }
     if (n && n.remove) {
      if (t.debug(d, 'core')) {
       console.log((o ? 'Refreshing' : 'Removing') + ' "' + s[a] + '" widget');
      }
      n.remove(r, d, d.widgetOptions, o);
      d.widgetInit[s[a]] = false;
     }
    }
    d.$table.triggerHandler('widgetRemoveEnd', r);
   },
   refreshWidgets: function(r, s, o) {
    r = e(r)[0];
    var a, n, i = r.config, l = i.widgets, d = t.widgets, c = d.length, f = [], u = function(t) {
     e(t).triggerHandler('refreshComplete');
    };
    for (a = 0; a < c; a++) {
     n = d[a];
     if (n && n.id && (s || e.inArray(n.id, l) < 0)) {
      f[f.length] = n.id;
     }
    }
    t.removeWidget(r, f.join(','), true);
    if (o !== true) {
     t.applyWidget(r, s || false, u);
     if (s) {
      t.applyWidget(r, false, u);
     }
    } else {
     u(r);
    }
   },
   benchmark: function(e) {
    return ' (' + (new Date().getTime() - e.getTime()) + ' ms)';
   },
   log: function() {
    console.log(arguments);
   },
   debug: function(e, t) {
    return e && (e.debug === true || typeof e.debug === 'string' && e.debug.indexOf(t) > -1);
   },
   isEmptyObject: function(e) {
    for (var t in e) {
     return false;
    }
    return true;
   },
   isValueInArray: function(e, t) {
    var r, s = t && t.length || 0;
    for (r = 0; r < s; r++) {
     if (t[r][0] === e) {
      return r;
     }
    }
    return -1;
   },
   formatFloat: function(r, s) {
    if (typeof r !== 'string' || r === '') {
     return r;
    }
    var o, a = s && s.config ? s.config.usNumberFormat !== false : typeof s !== 'undefined' ? s : true;
    if (a) {
     r = r.replace(t.regex.comma, '');
    } else {
     r = r.replace(t.regex.digitNonUS, '').replace(t.regex.comma, '.');
    }
    if (t.regex.digitNegativeTest.test(r)) {
     r = r.replace(t.regex.digitNegativeReplace, '-$1');
    }
    o = parseFloat(r);
    return isNaN(o) ? e.trim(r) : o;
   },
   isDigit: function(e) {
    return isNaN(e) ? t.regex.digitTest.test(e.toString().replace(t.regex.digitReplace, '')) : e !== '';
   },
   computeColumnIndex: function(r, s) {
    var o, a, n, i, l, d, c, f, u, g, p = s && s.columns || 0, h = [], m = new Array(p);
    for (o = 0; o < r.length; o++) {
     d = r[o].cells;
     for (a = 0; a < d.length; a++) {
      l = d[a];
      c = o;
      f = l.rowSpan || 1;
      u = l.colSpan || 1;
      if (typeof h[c] === 'undefined') {
       h[c] = [];
      }
      for (n = 0; n < h[c].length + 1; n++) {
       if (typeof h[c][n] === 'undefined') {
        g = n;
        
    break;
       }
      }
      if (p && l.cellIndex === g) {} else if (l.setAttribute) {
       l.setAttribute('data-column', g);
      } else {
       e(l).attr('data-column', g);
      }
      for (n = c; n < c + f; n++) {
       if (typeof h[n] === 'undefined') {
        h[n] = [];
       }
       m = h[n];
       for (i = g; i < g + u; i++) {
        m[i] = 'x';
       }
      }
     }
    }
    t.checkColumnCount(r, h, m.length);
    return m.length;
   },
   checkColumnCount: function(e, t, r) {
    var s, o, a = true, n = [];
    for (s = 0; s < t.length; s++) {
     if (t[s]) {
      o = t[s].length;
      if (t[s].length !== r) {
       a = false;
       
    break;
      }
     }
    }
    if (!a) {
     e.each(function(e, t) {
      var r = t.parentElement.nodeName;
      if (n.indexOf(r) < 0) {
       n.push(r);
      }
     });
     console.error('Invalid or incorrect number of columns in the ' + n.join(' or ') + '; expected ' + r + ', but found ' + o + ' columns');
    }
   },
   fixColumnWidth: function(r) {
    r = e(r)[0];
    var s, o, a, n, i, l = r.config, d = l.$table.children('colgroup');
    if (d.length && d.hasClass(t.css.colgroup)) {
     d.remove();
    }
    if (l.widthFixed && l.$table.children('colgroup').length === 0) {
     d = e('<colgroup class="' + t.css.colgroup + '">');
     s = l.$table.width();
     a = l.$tbodies.find('tr:first').children(':visible');
     n = a.length;
     for (i = 0; i < n; i++) {
      o = parseInt(a.eq(i).width() / s * 1e3, 10) / 10 + '%';
      d.append(e('<col>').css('width', o));
     }
     l.$table.prepend(d);
    }
   },
   getData: function(t, r, s) {
    var o, a, n = '', i = e(t);
    if (!i.length) {
     return '';
    }
    o = e.metadata ? i.metadata() : false;
    a = ' ' + (i.attr('class') || '');
    if (typeof i.data(s) !== 'undefined' || typeof i.data(s.toLowerCase()) !== 'undefined') {
     n += i.data(s) || i.data(s.toLowerCase());
    } else if (o && typeof o[s] !== 'undefined') {
     n += o[s];
    } else if (r && typeof r[s] !== 'undefined') {
     n += r[s];
    } else if (a !== ' ' && a.match(' ' + s + '-')) {
     n = a.match(new RegExp('\\s' + s + '-([\\w-]+)'))[1] || '';
    }
    return e.trim(n);
   },
   getColumnData: function(t, r, s, o, a) {
    if (typeof r !== 'object' || r === null) {
     return r;
    }
    t = e(t)[0];
    var n, i, l = t.config, d = a || l.$headers, c = l.$headerIndexed && l.$headerIndexed[s] || d.find('[data-column="' + s + '"]:last');
    if (typeof r[s] !== 'undefined') {
     return o ? r[s] : r[d.index(c)];
    }
    for (i in r) {
     if (typeof i === 'string') {
      n = c.filter(i).add(c.find(i));
      if (n.length) {
       return r[i];
      }
     }
    }
    return;
   },
   isProcessing: function(r, s, o) {
    r = e(r);
    var a = r[0].config, n = o || r.find('.' + t.css.header);
    if (s) {
     if (typeof o !== 'undefined' && a.sortList.length > 0) {
      n = n.filter(function() {
       return this.sortDisabled ? false : t.isValueInArray(parseFloat(e(this).attr('data-column')), a.sortList) >= 0;
      });
     }
     r.add(n).addClass(t.css.processing + ' ' + a.cssProcessing);
    } else {
     r.add(n).removeClass(t.css.processing + ' ' + a.cssProcessing);
    }
   },
   processTbody: function(t, r, s) {
    t = e(t)[0];
    if (s) {
     t.isProcessing = true;
     r.before('<colgroup class="tablesorter-savemyplace"/>');
     return e.fn.detach ? r.detach() : r.remove();
    }
    var o = e(t).find('colgroup.tablesorter-savemyplace');
    r.insertAfter(o);
    o.remove();
    t.isProcessing = false;
   },
   clearTableBody: function(t) {
    e(t)[0].config.$tbodies.children().detach();
   },
   characterEquivalents: {
    a: 'áàâãäąå',
    A: 'ÁÀÂÃÄĄÅ',
    c: 'çćč',
    C: 'ÇĆČ',
    e: 'éèêëěę',
    E: 'ÉÈÊËĚĘ',
    i: 'íìİîïı',
    I: 'ÍÌİÎÏ',
    o: 'óòôõöō',
    O: 'ÓÒÔÕÖŌ',
    ss: 'ß',
    SS: 'ẞ',
    u: 'úùûüů',
    U: 'ÚÙÛÜŮ'
   },
   replaceAccents: function(e) {
    var r, s = '[', o = t.characterEquivalents;
    if (!t.characterRegex) {
     t.characterRegexArray = {};
     for (r in o) {
      if (typeof r === 'string') {
       s += o[r];
       t.characterRegexArray[r] = new RegExp('[' + o[r] + ']', 'g');
      }
     }
     t.characterRegex = new RegExp(s + ']');
    }
    if (t.characterRegex.test(e)) {
     for (r in o) {
      if (typeof r === 'string') {
       e = e.replace(t.characterRegexArray[r], r);
      }
     }
    }
    return e;
   },
   validateOptions: function(r) {
    var s, o, a, n, i = 'headers sortForce sortList sortAppend widgets'.split(' '), l = r.originalSettings;
    if (l) {
     if (t.debug(r, 'core')) {
      n = new Date();
     }
     for (s in l) {
      a = typeof t.defaults[s];
      if (a === 'undefined') {
       console.warn('Tablesorter Warning! "table.config.' + s + '" option not recognized');
      } else if (a === 'object') {
       for (o in l[s]) {
        a = t.defaults[s] && typeof t.defaults[s][o];
        if (e.inArray(s, i) < 0 && a === 'undefined') {
         console.warn('Tablesorter Warning! "table.config.' + s + '.' + o + '" option not recognized');
        }
       }
      }
     }
     if (t.debug(r, 'core')) {
      console.log('validate options time:' + t.benchmark(n));
     }
    }
   },
   restoreHeaders: function(r) {
    var s, o, a = e(r)[0].config, n = a.$table.find(a.selectorHeaders), i = n.length;
    for (s = 0; s < i; s++) {
     o = n.eq(s);
     if (o.find('.' + t.css.headerIn).length) {
      o.html(a.headerContent[s]);
     }
    }
   },
   destroy: function(r, s, o) {
    r = e(r)[0];
    if (!r.hasInitialized) {
     return;
    }
    t.removeWidget(r, true, false);
    var a, n = e(r), i = r.config, l = n.find('thead:first'), d = l.find('tr.' + t.css.headerRow).removeClass(t.css.headerRow + ' ' + i.cssHeaderRow), c = n.find('tfoot:first > tr').children('th, td');
    if (s === false && e.inArray('uitheme', i.widgets) >= 0) {
     n.triggerHandler('applyWidgetId', [ 'uitheme' ]);
     n.triggerHandler('applyWidgetId', [ 'zebra' ]);
    }
    l.find('tr').not(d).remove();
    a = 'sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton ' + 'appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave ' + 'keypress sortBegin sortEnd resetToLoadState '.split(' ').join(i.namespace + ' ');
    n.removeData('tablesorter').unbind(a.replace(t.regex.spaces, ' '));
    i.$headers.add(c).removeClass([ t.css.header, i.cssHeader, i.cssAsc, i.cssDesc, t.css.sortAsc, t.css.sortDesc, t.css.sortNone ].join(' ')).removeAttr('data-column').removeAttr('aria-label').attr('aria-disabled', 'true');
    d.find(i.selectorSort).unbind('mousedown mouseup keypress '.split(' ').join(i.namespace + ' ').replace(t.regex.spaces, ' '));
    t.restoreHeaders(r);
    n.toggleClass(t.css.table + ' ' + i.tableClass + ' tablesorter-' + i.theme, s === false);
    n.removeClass(i.namespace.slice(1));
    r.hasInitialized = false;
    delete r.config.cache;
    if (typeof o === 'function') {
     o(r);
    }
    if (t.debug(i, 'core')) {
     console.log('tablesorter has been removed');
    }
   }
  };
  e.fn.tablesorter = function(r) {
   return this.each(function() {
    var s = this, o = e.extend(true, {}, t.defaults, r, t.instanceMethods);
    o.originalSettings = r;
    if (!s.hasInitialized && t.buildTable && this.nodeName !== 'TABLE') {
     t.buildTable(s, o);
    } else {
     t.setup(s, o);
    }
   });
  };
  if (!(window.console && window.console.log)) {
   t.logs = [];
   console = {};
   console.log = console.warn = console.error = console.table = function() {
    var e = arguments.length > 1 ? arguments : arguments[0];
    t.logs[t.logs.length] = {
     date: Date.now(),
     log: e
    };
   };
  }
  t.addParser({
   id: 'no-parser',
   is: function() {
    return false;
   },
   format: function() {
    return '';
   },
   type: 'text'
  });
  t.addParser({
   id: 'text',
   is: function() {
    return true;
   },
   format: function(r, s) {
    var o = s.config;
    if (r) {
     r = e.trim(o.ignoreCase ? r.toLocaleLowerCase() : r);
     r = o.sortLocaleCompare ? t.replaceAccents(r) : r;
    }
    return r;
   },
   type: 'text'
  });
  t.regex.nondigit = /[^\w,. \-()]/g;
  t.addParser({
   id: 'digit',
   is: function(e) {
    return t.isDigit(e);
   },
   format: function(r, s) {
    var o = t.formatFloat((r || '').replace(t.regex.nondigit, ''), s);
    return r && typeof o === 'number' ? o : r ? e.trim(r && s.config.ignoreCase ? r.toLocaleLowerCase() : r) : r;
   },
   type: 'numeric'
  });
  t.regex.currencyReplace = /[+\-,. ]/g;
  t.regex.currencyTest = /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/;
  t.addParser({
   id: 'currency',
   is: function(e) {
    e = (e || '').replace(t.regex.currencyReplace, '');
    return t.regex.currencyTest.test(e);
   },
   format: function(r, s) {
    var o = t.formatFloat((r || '').replace(t.regex.nondigit, ''), s);
    return r && typeof o === 'number' ? o : r ? e.trim(r && s.config.ignoreCase ? r.toLocaleLowerCase() : r) : r;
   },
   type: 'numeric'
  });
  t.regex.urlProtocolTest = /^(https?|ftp|file):\/\//;
  t.regex.urlProtocolReplace = /(https?|ftp|file):\/\/(www\.)?/;
  t.addParser({
   id: 'url',
   is: function(e) {
    return t.regex.urlProtocolTest.test(e);
   },
   format: function(r) {
    return r ? e.trim(r.replace(t.regex.urlProtocolReplace, '')) : r;
   },
   type: 'text'
  });
  t.regex.dash = /-/g;
  t.regex.isoDate = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/;
  t.addParser({
   id: 'isoDate',
   is: function(e) {
    return t.regex.isoDate.test(e);
   },
   format: function(e) {
    var r = e ? new Date(e.replace(t.regex.dash, '/')) : e;
    return r instanceof Date && isFinite(r) ? r.getTime() : e;
   },
   type: 'numeric'
  });
  t.regex.percent = /%/g;
  t.regex.percentTest = /(\d\s*?%|%\s*?\d)/;
  t.addParser({
   id: 'percent',
   is: function(e) {
    return t.regex.percentTest.test(e) && e.length < 15;
   },
   format: function(e, r) {
    return e ? t.formatFloat(e.replace(t.regex.percent, ''), r) : e;
   },
   type: 'numeric'
  });
  t.addParser({
   id: 'image',
   is: function(e, t, r, s) {
    return s.find('img').length > 0;
   },
   format: function(t, r, s) {
    return e(s).find('img').attr(r.config.imgAttr || 'alt') || t;
   },
   parsed: true,
   type: 'text'
  });
  t.regex.dateReplace = /(\S)([AP]M)$/i;
  t.regex.usLongDateTest1 = /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i;
  t.regex.usLongDateTest2 = /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i;
  t.addParser({
   id: 'usLongDate',
   is: function(e) {
    return t.regex.usLongDateTest1.test(e) || t.regex.usLongDateTest2.test(e);
   },
   format: function(e) {
    var r = e ? new Date(e.replace(t.regex.dateReplace, '$1 $2')) : e;
    return r instanceof Date && isFinite(r) ? r.getTime() : e;
   },
   type: 'numeric'
  });
  t.regex.shortDateTest = /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/;
  t.regex.shortDateReplace = /[\-.,]/g;
  t.regex.shortDateXXY = /(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/;
  t.regex.shortDateYMD = /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/;
  t.convertFormat = function(e, r) {
   e = (e || '').replace(t.regex.spaces, ' ').replace(t.regex.shortDateReplace, '/');
   if (r === 'mmddyyyy') {
    e = e.replace(t.regex.shortDateXXY, '$3/$1/$2');
   } else if (r === 'ddmmyyyy') {
    e = e.replace(t.regex.shortDateXXY, '$3/$2/$1');
   } else if (r === 'yyyymmdd') {
    e = e.replace(t.regex.shortDateYMD, '$1/$2/$3');
   }
   var s = new Date(e);
   return s instanceof Date && isFinite(s) ? s.getTime() : '';
  };
  t.addParser({
   id: 'shortDate',
   is: function(e) {
    e = (e || '').replace(t.regex.spaces, ' ').replace(t.regex.shortDateReplace, '/');
    return t.regex.shortDateTest.test(e);
   },
   format: function(e, r, s, o) {
    if (e) {
     var a = r.config, n = a.$headerIndexed[o], i = n.length && n.data('dateFormat') || t.getData(n, t.getColumnData(r, a.headers, o), 'dateFormat') || a.dateFormat;
     if (n.length) {
      n.data('dateFormat', i);
     }
     return t.convertFormat(e, i) || e;
    }
    return e;
   },
   type: 'numeric'
  });
  t.regex.timeTest = /^(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i;
  t.regex.timeMatch = /(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i;
  t.addParser({
   id: 'time',
   is: function(e) {
    return t.regex.timeTest.test(e);
   },
   format: function(e) {
    var r, s = (e || '').match(t.regex.timeMatch), o = new Date(e), a = e && (s !== null ? s[0] : '00:00 AM'), n = a ? new Date('2000/01/01 ' + a.replace(t.regex.dateReplace, '$1 $2')) : a;
    if (n instanceof Date && isFinite(n)) {
     r = o instanceof Date && isFinite(o) ? o.getTime() : 0;
     return r ? parseFloat(n.getTime() + '.' + o.getTime()) : n.getTime();
    }
    return e;
   },
   type: 'numeric'
  });
  t.addParser({
   id: 'metadata',
   is: function() {
    return false;
   },
   format: function(t, r, s) {
    var o = r.config, a = !o.parserMetadataName ? 'sortValue' : o.parserMetadataName;
    return e(s).metadata()[a];
   },
   type: 'numeric'
  });
  t.addWidget({
   id: 'zebra',
   priority: 90,
   format: function(t, r, s) {
    var o, a, n, i, l, d, c, f = new RegExp(r.cssChildRow, 'i'), u = r.$tbodies.add(e(r.namespace + '_extra_table').children('tbody:not(.' + r.cssInfoBlock + ')'));
    for (l = 0; l < u.length; l++) {
     n = 0;
     o = u.eq(l).children('tr:visible').not(r.selectorRemove);
     c = o.length;
     for (d = 0; d < c; d++) {
      a = o.eq(d);
      if (!f.test(a[0].className)) {
       n++;
      }
      i = n % 2 === 0;
      a.removeClass(s.zebra[i ? 1 : 0]).addClass(s.zebra[i ? 0 : 1]);
     }
    }
   },
   remove: function(e, r, s, o) {
    if (o) {
     return;
    }
    var a, n, i = r.$tbodies, l = (s.zebra || [ 'even', 'odd' ]).join(' ');
    for (a = 0; a < i.length; a++) {
     n = t.processTbody(e, i.eq(a), true);
     n.children().removeClass(l);
     t.processTbody(e, n, false);
    }
   }
  });
 })(e);
 return e.tablesorter;
});
;// jquery.treeview.js
(function(a) {
 a.extend(a.fn, {
  swapClass: function(a, e) {
   var l = this.filter('.' + a);
   this.filter('.' + e).removeClass(e).addClass(a);
   l.removeClass(a).addClass(e);
   return this;
  },
  replaceClass: function(a, e) {
   return this.filter('.' + a).removeClass(a).addClass(e).end();
  },
  hoverClass: function(e) {
   e = e || "hover";
   function l() {
    a(this).addClass(e);
   }
   function s() {
    a(this).removeClass(e);
   }
   return this.on('mouseenter', l).on('mouseleave', s);
  },
  heightToggle: function(a, e) {
   a ? this.animate({
    height: "toggle"
   }, a, e) : this.each(function() {
    jQuery(this)[jQuery(this).css('display') != "block" ? "show" : "hide"]();
    if (e) e.apply(this, arguments);
   });
  },
  heightHide: function(a, e) {
   if (a) {
    this.animate({
     height: "hide"
    }, a, e);
   } else {
    this.hide();
    if (e) this.each(e);
   }
  },
  prepareBranches: function(a) {
   if (!a.prerendered) {
    this.filter(":last-child:not(ul)").addClass(e.last);
    this.filter((a.collapsed ? "" : "." + e.closed) + ":not(." + e.open + ")").find(">ul").hide();
   }
   return this.filter(":has(>ul)");
  },
  applyClasses: function(l, s) {
   this.filter(":has(>ul):not(:has(>a))").find(">span").off("click.treeview").on("click.treeview", function(e) {
    s.apply(a(this).next());
   }).add(a("a", this)).hoverClass();
   if (!l.prerendered) {
    this.filter(":has(>ul:hidden)").addClass(e.expandable).replaceClass(e.last, e.lastExpandable);
    this.not(":has(>ul:hidden)").addClass(e.collapsable).replaceClass(e.last, e.lastCollapsable);
    var t = this.find("div." + e.hitarea);
    if (!t.length) t = this.prepend("<div class=\"" + e.hitarea + "\"/>").find("div." + e.hitarea);
    t.removeClass().addClass(e.hitarea).each(function() {
     var e = "";
     a.each(a(this).parent().attr("class").split(" "), function() {
      e += this + "-hitarea ";
     });
     a(this).addClass(e);
    });
   }
   this.find("div." + e.hitarea).on('click', s);
  },
  treeview: function(l) {
   l = a.extend({
    cookieId: "treeview"
   }, l);
   if (l.toggle) {
    var s = l.toggle;
    l.toggle = function() {
     return s.apply(a(this).parent()[0], arguments);
    };
   }
   function t(l, s) {
    function t(s) {
     return function() {
      i.apply(a("div." + e.hitarea, l).filter(function() {
       return s ? a(this).parent("." + s).length : true;
      }));
      return false;
     };
    }
    a("a:eq(0)", s).on('click', t(e.collapsable));
    a("a:eq(1)", s).on('click', t(e.expandable));
    a("a:eq(2)", s).on('click', t());
   }
   function i() {
    a(this).parent().find(">.hitarea").swapClass(e.collapsableHitarea, e.expandableHitarea).swapClass(e.lastCollapsableHitarea, e.lastExpandableHitarea).end().swapClass(e.collapsable, e.expandable).swapClass(e.lastCollapsable, e.lastExpandable).find(">ul").heightToggle(l.animated, l.toggle);
    if (l.unique) {
     a(this).parent().siblings().find(">.hitarea").replaceClass(e.collapsableHitarea, e.expandableHitarea).replaceClass(e.lastCollapsableHitarea, e.lastExpandableHitarea).end().replaceClass(e.collapsable, e.expandable).replaceClass(e.lastCollapsable, e.lastExpandable).find(">ul").heightHide(l.animated, l.toggle);
    }
   }
   this.data("toggler", i);
   function n() {
    function e(a) {
     return a ? 1 : 0;
    }
    var s = [];
    o.each(function(e, l) {
     s[e] = a(l).is(":has(>ul:visible)") ? 1 : 0;
    });
    a.cookie(l.cookieId, s.join(""), l.cookieOptions);
   }
   function r() {
    var e = a.cookie(l.cookieId);
    if (e) {
     var s = e.split("");
     o.each(function(e, l) {
      a(l).find(">ul")[parseInt(s[e]) ? "show" : "hide"]();
     });
    }
   }
   this.addClass("treeview");
   var o = this.find("li").prepareBranches(l);
   switch (l.persist) {
   case "cookie":
    var h = l.toggle;
    l.toggle = function() {
     n();
     if (h) {
      h.apply(this, arguments);
     }
    };
    r();
    
    break;

   case "location":
    var d = this.find("a").filter(function() {
     return this.href.toLowerCase() == location.href.toLowerCase();
    });
    if (d.length) {
     var p = d.addClass("selected").parents("ul, li").add(d.next()).show();
     if (l.prerendered) {
      p.filter("li").swapClass(e.collapsable, e.expandable).swapClass(e.lastCollapsable, e.lastExpandable).find(">.hitarea").swapClass(e.collapsableHitarea, e.expandableHitarea).swapClass(e.lastCollapsableHitarea, e.lastExpandableHitarea);
     }
    }
    
    break;
   }
   o.applyClasses(l, i);
   if (l.control) {
    t(this, l.control);
    a(l.control).show();
   }
   return this;
  }
 });
 a.treeview = {};
 var e = a.treeview.classes = {
  open: "open",
  closed: "closed",
  expandable: "expandable",
  expandableHitarea: "expandable-hitarea",
  lastExpandableHitarea: "lastExpandable-hitarea",
  collapsable: "collapsable",
  collapsableHitarea: "collapsable-hitarea",
  lastCollapsableHitarea: "lastCollapsable-hitarea",
  lastCollapsable: "lastCollapsable",
  lastExpandable: "lastExpandable",
  last: "last",
  hitarea: "hitarea"
 };
})(jQuery);
;// php_js.js
(function() {
 if (typeof r == "undefined") {
  var r = function() {
   if (window == this || !this.init) {
    return new r();
   } else {
    return this.init();
   }
  };
 }
 r.prototype = {
  init: function() {},
  md5: function(r) {
   var n = function(r, n) {
    return r << n | r >>> 32 - n;
   };
   var t = function(r, n) {
    var t, e, i, a, o;
    i = r & 2147483648;
    a = n & 2147483648;
    t = r & 1073741824;
    e = n & 1073741824;
    o = (r & 1073741823) + (n & 1073741823);
    if (t & e) {
     return o ^ 2147483648 ^ i ^ a;
    }
    if (t | e) {
     if (o & 1073741824) {
      return o ^ 3221225472 ^ i ^ a;
     } else {
      return o ^ 1073741824 ^ i ^ a;
     }
    } else {
     return o ^ i ^ a;
    }
   };
   var e = function(r, n, t) {
    return r & n | ~r & t;
   };
   var i = function(r, n, t) {
    return r & t | n & ~t;
   };
   var a = function(r, n, t) {
    return r ^ n ^ t;
   };
   var o = function(r, n, t) {
    return n ^ (r | ~t);
   };
   var u = function(r, i, a, o, u, f, v) {
    r = t(r, t(t(e(i, a, o), u), v));
    return t(n(r, f), i);
   };
   var f = function(r, e, a, o, u, f, v) {
    r = t(r, t(t(i(e, a, o), u), v));
    return t(n(r, f), e);
   };
   var v = function(r, e, i, o, u, f, v) {
    r = t(r, t(t(a(e, i, o), u), v));
    return t(n(r, f), e);
   };
   var c = function(r, e, i, a, u, f, v) {
    r = t(r, t(t(o(e, i, a), u), v));
    return t(n(r, f), e);
   };
   var h = function(r) {
    var n;
    var t = r.length;
    var e = t + 8;
    var i = (e - e % 64) / 64;
    var a = (i + 1) * 16;
    var o = Array(a - 1);
    var u = 0;
    var f = 0;
    while (f < t) {
     n = (f - f % 4) / 4;
     u = f % 4 * 8;
     o[n] = o[n] | r.charCodeAt(f) << u;
     f++;
    }
    n = (f - f % 4) / 4;
    u = f % 4 * 8;
    o[n] = o[n] | 128 << u;
    o[a - 2] = t << 3;
    o[a - 1] = t >>> 29;
    return o;
   };
   var d = function(r) {
    var n = "", t = "", e, i;
    for (i = 0; i <= 3; i++) {
     e = r >>> i * 8 & 255;
     t = "0" + e.toString(16);
     n = n + t.substr(t.length - 2, 2);
    }
    return n;
   };
   var C = Array();
   var g, s, l, m, w, S, p, y, A;
   var _ = 7, b = 12, j = 17, L = 22;
   var P = 5, $ = 9, k = 14, q = 20;
   var x = 4, z = 11, B = 16, D = 23;
   var E = 6, F = 10, G = 15, H = 21;
   r = this.utf8_encode(r);
   C = h(r);
   S = 1732584193;
   p = 4023233417;
   y = 2562383102;
   A = 271733878;
   for (g = 0; g < C.length; g += 16) {
    s = S;
    l = p;
    m = y;
    w = A;
    S = u(S, p, y, A, C[g + 0], _, 3614090360);
    A = u(A, S, p, y, C[g + 1], b, 3905402710);
    y = u(y, A, S, p, C[g + 2], j, 606105819);
    p = u(p, y, A, S, C[g + 3], L, 3250441966);
    S = u(S, p, y, A, C[g + 4], _, 4118548399);
    A = u(A, S, p, y, C[g + 5], b, 1200080426);
    y = u(y, A, S, p, C[g + 6], j, 2821735955);
    p = u(p, y, A, S, C[g + 7], L, 4249261313);
    S = u(S, p, y, A, C[g + 8], _, 1770035416);
    A = u(A, S, p, y, C[g + 9], b, 2336552879);
    y = u(y, A, S, p, C[g + 10], j, 4294925233);
    p = u(p, y, A, S, C[g + 11], L, 2304563134);
    S = u(S, p, y, A, C[g + 12], _, 1804603682);
    A = u(A, S, p, y, C[g + 13], b, 4254626195);
    y = u(y, A, S, p, C[g + 14], j, 2792965006);
    p = u(p, y, A, S, C[g + 15], L, 1236535329);
    S = f(S, p, y, A, C[g + 1], P, 4129170786);
    A = f(A, S, p, y, C[g + 6], $, 3225465664);
    y = f(y, A, S, p, C[g + 11], k, 643717713);
    p = f(p, y, A, S, C[g + 0], q, 3921069994);
    S = f(S, p, y, A, C[g + 5], P, 3593408605);
    A = f(A, S, p, y, C[g + 10], $, 38016083);
    y = f(y, A, S, p, C[g + 15], k, 3634488961);
    p = f(p, y, A, S, C[g + 4], q, 3889429448);
    S = f(S, p, y, A, C[g + 9], P, 568446438);
    A = f(A, S, p, y, C[g + 14], $, 3275163606);
    y = f(y, A, S, p, C[g + 3], k, 4107603335);
    p = f(p, y, A, S, C[g + 8], q, 1163531501);
    S = f(S, p, y, A, C[g + 13], P, 2850285829);
    A = f(A, S, p, y, C[g + 2], $, 4243563512);
    y = f(y, A, S, p, C[g + 7], k, 1735328473);
    p = f(p, y, A, S, C[g + 12], q, 2368359562);
    S = v(S, p, y, A, C[g + 5], x, 4294588738);
    A = v(A, S, p, y, C[g + 8], z, 2272392833);
    y = v(y, A, S, p, C[g + 11], B, 1839030562);
    p = v(p, y, A, S, C[g + 14], D, 4259657740);
    S = v(S, p, y, A, C[g + 1], x, 2763975236);
    A = v(A, S, p, y, C[g + 4], z, 1272893353);
    y = v(y, A, S, p, C[g + 7], B, 4139469664);
    p = v(p, y, A, S, C[g + 10], D, 3200236656);
    S = v(S, p, y, A, C[g + 13], x, 681279174);
    A = v(A, S, p, y, C[g + 0], z, 3936430074);
    y = v(y, A, S, p, C[g + 3], B, 3572445317);
    p = v(p, y, A, S, C[g + 6], D, 76029189);
    S = v(S, p, y, A, C[g + 9], x, 3654602809);
    A = v(A, S, p, y, C[g + 12], z, 3873151461);
    y = v(y, A, S, p, C[g + 15], B, 530742520);
    p = v(p, y, A, S, C[g + 2], D, 3299628645);
    S = c(S, p, y, A, C[g + 0], E, 4096336452);
    A = c(A, S, p, y, C[g + 7], F, 1126891415);
    y = c(y, A, S, p, C[g + 14], G, 2878612391);
    p = c(p, y, A, S, C[g + 5], H, 4237533241);
    S = c(S, p, y, A, C[g + 12], E, 1700485571);
    A = c(A, S, p, y, C[g + 3], F, 2399980690);
    y = c(y, A, S, p, C[g + 10], G, 4293915773);
    p = c(p, y, A, S, C[g + 1], H, 2240044497);
    S = c(S, p, y, A, C[g + 8], E, 1873313359);
    A = c(A, S, p, y, C[g + 15], F, 4264355552);
    y = c(y, A, S, p, C[g + 6], G, 2734768916);
    p = c(p, y, A, S, C[g + 13], H, 1309151649);
    S = c(S, p, y, A, C[g + 4], E, 4149444226);
    A = c(A, S, p, y, C[g + 11], F, 3174756917);
    y = c(y, A, S, p, C[g + 2], G, 718787259);
    p = c(p, y, A, S, C[g + 9], H, 3951481745);
    S = t(S, s);
    p = t(p, l);
    y = t(y, m);
    A = t(A, w);
   }
   var I = d(S) + d(p) + d(y) + d(A);
   return I.toLowerCase();
  },
  utf8_encode: function(r) {
   r = r.replace(/\r\n/g, "\n");
   var n = [], t = 0;
   for (var e = 0; e < r.length; e++) {
    var i = r.charCodeAt(e);
    if (i < 128) {
     n[t++] = String.fromCharCode(i);
    } else if (i > 127 && i < 2048) {
     n[t++] = String.fromCharCode(i >> 6 | 192);
     n[t++] = String.fromCharCode(i & 63 | 128);
    } else {
     n[t++] = String.fromCharCode(i >> 12 | 224);
     n[t++] = String.fromCharCode(i >> 6 & 63 | 128);
     n[t++] = String.fromCharCode(i & 63 | 128);
    }
   }
   return n.join('');
  }
 };
 window.$P = r();
})();
;// sprintf.js
(function(e) {
 var n = {
  not_string: /[^s]/,
  number: /[dief]/,
  text: /^[^\x25]+/,
  modulo: /^\x25{2}/,
  placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fiosuxX])/,
  key: /^([a-z_][a-z_\d]*)/i,
  key_access: /^\.([a-z_][a-z_\d]*)/i,
  index_access: /^\[(\d+)\]/,
  sign: /^[\+\-]/
 };
 function r() {
  var e = arguments[0], n = r.cache;
  if (!(n[e] && n.hasOwnProperty(e))) {
   n[e] = r.parse(e);
  }
  return r.format.call(null, n[e], arguments);
 }
 r.format = function(e, t) {
  var a = 1, o = e.length, l = "", f, c = [], p, u, d, g, h, x, b = true, w = "";
  for (p = 0; p < o; p++) {
   l = i(e[p]);
   if (l === "string") {
    c[c.length] = e[p];
   } else if (l === "array") {
    d = e[p];
    if (d[2]) {
     f = t[a];
     for (u = 0; u < d[2].length; u++) {
      if (!f.hasOwnProperty(d[2][u])) {
       throw new Error(r("[sprintf] property '%s' does not exist", d[2][u]));
      }
      f = f[d[2][u]];
     }
    } else if (d[1]) {
     f = t[d[1]];
    } else {
     f = t[a++];
    }
    if (i(f) == "function") {
     f = f();
    }
    if (n.not_string.test(d[8]) && (i(f) != "number" && isNaN(f))) {
     throw new TypeError(r("[sprintf] expecting number but found %s", i(f)));
    }
    if (n.number.test(d[8])) {
     b = f >= 0;
    }
    switch (d[8]) {
    case "b":
     f = f.toString(2);
     
    break;

    case "c":
     f = String.fromCharCode(f);
     
    break;

    case "d":
    case "i":
     f = parseInt(f, 10);
     
    break;

    case "e":
     f = d[7] ? f.toExponential(d[7]) : f.toExponential();
     
    break;

    case "f":
     f = d[7] ? parseFloat(f).toFixed(d[7]) : parseFloat(f);
     
    break;

    case "o":
     f = f.toString(8);
     
    break;

    case "s":
     f = (f = String(f)) && d[7] ? f.substring(0, d[7]) : f;
     
    break;

    case "u":
     f = f >>> 0;
     
    break;

    case "x":
     f = f.toString(16);
     
    break;

    case "X":
     f = f.toString(16).toUpperCase();
     
    break;
    }
    if (n.number.test(d[8]) && (!b || d[3])) {
     w = b ? "+" : "-";
     f = f.toString().replace(n.sign, "");
    } else {
     w = "";
    }
    h = d[4] ? d[4] === "0" ? "0" : d[4].charAt(1) : " ";
    x = d[6] - (w + f).length;
    g = d[6] ? x > 0 ? s(h, x) : "" : "";
    c[c.length] = d[5] ? w + f + g : h === "0" ? w + g + f : g + w + f;
   }
  }
  return c.join("");
 };
 r.cache = {};
 r.parse = function(e) {
  var r = e, t = [], i = [], s = 0;
  while (r) {
   if ((t = n.text.exec(r)) !== null) {
    i[i.length] = t[0];
   } else if ((t = n.modulo.exec(r)) !== null) {
    i[i.length] = "%";
   } else if ((t = n.placeholder.exec(r)) !== null) {
    if (t[2]) {
     s |= 1;
     var a = [], o = t[2], l = [];
     if ((l = n.key.exec(o)) !== null) {
      a[a.length] = l[1];
      while ((o = o.substring(l[0].length)) !== "") {
       if ((l = n.key_access.exec(o)) !== null) {
        a[a.length] = l[1];
       } else if ((l = n.index_access.exec(o)) !== null) {
        a[a.length] = l[1];
       } else {
        throw new SyntaxError("[sprintf] failed to parse named argument key");
       }
      }
     } else {
      throw new SyntaxError("[sprintf] failed to parse named argument key");
     }
     t[2] = a;
    } else {
     s |= 2;
    }
    if (s === 3) {
     throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
    }
    i[i.length] = t;
   } else {
    throw new SyntaxError("[sprintf] unexpected placeholder");
   }
   r = r.substring(t[0].length);
  }
  return i;
 };
 var t = function(e, n, t) {
  t = (n || []).slice(0);
  t.splice(0, 0, e);
  return r.apply(null, t);
 };
 function i(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
 }
 function s(e, n) {
  return Array(n + 1).join(e);
 }
 if (typeof exports !== "undefined") {
  exports.sprintf = r;
  exports.vsprintf = t;
 } else {
  e.sprintf = r;
  e.vsprintf = t;
  if (typeof define === "function" && define.amd) {
   define(function() {
    return {
     sprintf: r,
     vsprintf: t
    };
   });
  }
 }
})(typeof window === "undefined" ? this : window);
;// js.cookie.js
(function(e) {
 if (typeof define === 'function' && define.amd) {
  define(e);
 } else if (typeof exports === 'object') {
  module.exports = e();
 } else {
  var n = window.Cookies;
  var o = window.Cookies = e(window.jQuery);
  o.noConflict = function() {
   window.Cookies = n;
   return o;
  };
 }
})(function() {
 function e() {
  var e = 0;
  var n = {};
  for (;e < arguments.length; e++) {
   var o = arguments[e];
   for (var t in o) {
    n[t] = o[t];
   }
  }
  return n;
 }
 function n(o) {
  function t(n, r, i) {
   var c;
   if (arguments.length > 1) {
    i = e({
     path: '/'
    }, t.defaults, i);
    if (typeof i.expires === 'number') {
     var a = new Date();
     a.setMilliseconds(a.getMilliseconds() + i.expires * 864e5);
     i.expires = a;
    }
    try {
     c = JSON.stringify(r);
     if (/^[\{\[]/.test(c)) {
      r = c;
     }
    } catch (e) {}
    r = encodeURIComponent(String(r));
    r = r.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
    n = encodeURIComponent(String(n));
    n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
    n = n.replace(/[\(\)]/g, escape);
    return document.cookie = [ n, '=', r, i.expires && '; expires=' + i.expires.toUTCString(), i.path && '; path=' + i.path, i.domain && '; domain=' + i.domain, i.secure ? '; secure' : '' ].join('');
   }
   if (!n) {
    c = {};
   }
   var s = document.cookie ? document.cookie.split('; ') : [];
   var p = /(%[0-9A-Z]{2})+/g;
   var f = 0;
   for (;f < s.length; f++) {
    var d = s[f].split('=');
    var u = d[0].replace(p, decodeURIComponent);
    var l = d.slice(1).join('=');
    if (l.charAt(0) === '"') {
     l = l.slice(1, -1);
    }
    try {
     l = o && o(l, u) || l.replace(p, decodeURIComponent);
     if (this.json) {
      try {
       l = JSON.parse(l);
      } catch (e) {}
     }
     if (n === u) {
      c = l;
      
    break;
     }
     if (!n) {
      c[u] = l;
     }
    } catch (e) {}
   }
   return c;
  }
  t.get = t.set = t;
  t.getJSON = function() {
   return t.apply({
    json: true
   }, [].slice.call(arguments));
  };
  t.defaults = {};
  t.remove = function(n, o) {
   t(n, '', e(o, {
    expires: -1
   }));
  };
  t.withConverter = n;
  return t;
 }
 return n();
});
;// bb.cookie.js
BB.Cookies = function() {
 Cookies.defaults = $.extend(Cookies.defaults, BB.cookie_defaults);
 return {
  get: function(e) {
   return Cookies.get(e);
  },
  set: function(e, t, r, i) {
   var o = [ e, t ];
   var s = i || {};
   if (!$.isPlainObject(s)) {
    throw new TypeError('attributes is not an object');
   }
   if ('expires' in s) {
    throw new Error('unexpected attributes.expires');
   }
   r = r || 'PERSISTENT';
   if (r === 'PERSISTENT') {
    s.expires = 365 * 10;
   } else if (typeof r === 'number') {
    s.expires = r;
   } else if (r !== 'SESSION') {
    throw new Error('wrong value for expires: ' + r);
   }
   if (!$.isEmptyObject(s)) {
    o.push(s);
   }
   return Cookies.set.apply(null, o);
  },
  delete: function(e, t) {
   Cookies.remove.apply(null, [].slice.call(arguments));
  }
 };
}();
;// foundation.core.min.js
!function(t){"use strict";
function n(t){
        if(void 0===Function.prototype.name){
        var n=/function\s([^(]{1,})\(/,i=n.exec(t.toString());
        return i&&i.length>1?i[1].trim():""}
        return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name}
function i(t){
        return"true"===t||"false"!==t&&(isNaN(1*t)?t:parseFloat(t))}
function e(t){
        return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}
        var o="6.3.1",r={version:o,_plugins:{},_uuids:[],
rtl:function(){
        return"rtl"===t("html").attr("dir")},plugin:function(t,i){
        var o=i||n(t),r=e(o);this._plugins[r]=this[o]=t},registerPlugin:function(t,i){
        var o=i?e(i):n(t.constructor).toLowerCase();t.uuid=this.GetYoDigits(6,o),t.$element.attr("data-"+o)||t.$element.attr("data-"+o,t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t),t.$element.trigger("init.zf."+o),this._uuids.push(t.uuid)},unregisterPlugin:function(t){
        var i=e(n(t.$element.data("zfPlugin").constructor));this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-"+i).removeData("zfPlugin").trigger("destroyed.zf."+i);for(var o in t)t[o]=null},reInit:function(n){
        var i=n instanceof t;try{
        if(i)n.each(function(){t(this).data("zfPlugin")._init()});
    else{
        var o=typeof n,r=this,a={object:function(n){n.forEach(function(n){n=e(n),t("[data-"+n+"]").foundation("_init")})},string:function(){n=e(n),t("[data-"+n+"]").foundation("_init")},undefined:function(){this.object(Object.keys(r._plugins))}};a[o](n)}}
        catch(t){console.error(t)}finally{
        return n}},GetYoDigits:function(t,n){
        return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(n?"-"+n:"")},reflow:function(n,e){"undefined"==typeof e?e=Object.keys(this._plugins):"string"==typeof e&&(e=[e]);
        var o=this;t.each(e,function(e,r){
        var a=o._plugins[r],u=t(n).find("[data-"+r+"]").addBack("[data-"+r+"]");
u.each(function(){
        var n=t(this),e={};
        if(n.data("zfPlugin"))
        return void console.warn("Tried to initialize "+r+" on an element that already has a Foundation plugin.");
        if(n.attr("data-options")){n.attr("data-options").split(";").forEach(function(t,n){
        var o=t.split(":").map(function(t){
        return t.trim()});o[0]&&(e[o[0]]=i(o[1]))})}try{n.data("zfPlugin",new a(t(this),e))}
        catch(t){console.error(t)}finally{
        return}})})},getFnName:n,transitionend:function(t){
        var n,i={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},e=document.createElement("div");for(var o in i)"undefined"!=typeof e.style[o]&&(n=i[o]);
        return n?n:(n=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}};r.util={throttle:function(t,n){
        var i=null;
        return function(){
        var e=this,o=arguments;null===i&&(i=setTimeout(function(){t.apply(e,o),i=null},n))}}};
        var a=function(i){
        var e=typeof i,o=t("meta.foundation-mq"),a=t(".no-js");
        if(o.length||t('<meta class="foundation-mq">').appendTo(document.head),a.length&&a.removeClass("no-js"),"undefined"===e)r.MediaQuery._init(),r.reflow(this);
    else{
        if("string"!==e)throw new TypeError("We're sorry, "+e+" is not a valid parameter. You must use a string representing the method you wish to invoke.");
        var u=Array.prototype.slice.call(arguments,1),s=this.data("zfPlugin");
        if(void 0===s||void 0===s[i])throw new ReferenceError("We're sorry, '"+i+"' is not an available method for "+(s?n(s):"this element")+".");1===this.length?s[i].apply(s,u):this.each(function(n,e){s[i].apply(t(e).data("zfPlugin"),u)})}
        return this};window.Foundation=r,t.fn.foundation=a,
function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){
        return(new Date).getTime()});for(var t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n){
        var i=t[n];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){
        var e=0;window.requestAnimationFrame=function(t){
        var n=Date.now(),i=Math.max(e+16,n);
        return setTimeout(function(){t(e=i)},i-n)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){
        return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){
        if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var n=Array.prototype.slice.call(arguments,1),i=this,e=function(){},o=function(){
        return i.apply(this instanceof e?this:t,n.concat(Array.prototype.slice.call(arguments)))};
        return this.prototype&&(e.prototype=this.prototype),o.prototype=new e,o})}(jQuery);
;// foundation.util.box.min.js
"use strict";!function(t){function e(t,e,o,i){
        var s,h,n,w,d=f(t);
        if(e){
        var r=f(e);h=d.offset.top+d.height<=r.height+r.offset.top,s=d.offset.top>=r.offset.top,n=d.offset.left>=r.offset.left,w=d.offset.left+d.width<=r.width+r.offset.left}else h=d.offset.top+d.height<=d.windowDims.height+d.windowDims.offset.top,s=d.offset.top>=d.windowDims.offset.top,n=d.offset.left>=d.windowDims.offset.left,w=d.offset.left+d.width<=d.windowDims.width;
        var l=[h,s,n,w];
        return o?n===w==!0:i?s===h==!0:l.indexOf(!1)===-1}
function f(t,e){
        if(t=t.length?t[0]:t,t===window||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var f=t.getBoundingClientRect(),o=t.parentNode.getBoundingClientRect(),i=document.body.getBoundingClientRect(),s=window.pageYOffset,h=window.pageXOffset;
        return{width:f.width,height:f.height,offset:{top:f.top+s,left:f.left+h},parentDims:{width:o.width,height:o.height,offset:{top:o.top+s,left:o.left+h}},windowDims:{width:i.width,height:i.height,offset:{top:s,left:h}}}}
function o(t,e,o,i,s,h){
        var n=f(t),w=e?f(e):null;switch(o){case"top":return{left:Foundation.rtl()?w.offset.left-n.width+w.width:w.offset.left,top:w.offset.top-(n.height+i)};case"left":return{left:w.offset.left-(n.width+s),top:w.offset.top};case"right":return{left:w.offset.left+w.width+s,top:w.offset.top};case"center top":return{left:w.offset.left+w.width/2-n.width/2,top:w.offset.top-(n.height+i)};case"center bottom":return{left:h?s:w.offset.left+w.width/2-n.width/2,top:w.offset.top+w.height+i};case"center left":return{left:w.offset.left-(n.width+s),top:w.offset.top+w.height/2-n.height/2};case"center right":return{left:w.offset.left+w.width+s+1,top:w.offset.top+w.height/2-n.height/2};case"center":return{left:n.windowDims.offset.left+n.windowDims.width/2-n.width/2,top:n.windowDims.offset.top+n.windowDims.height/2-n.height/2};case"reveal":return{left:(n.windowDims.width-n.width)/2,top:n.windowDims.offset.top+i};case"reveal full":return{left:n.windowDims.offset.left,top:n.windowDims.offset.top};case"left bottom":return{left:w.offset.left,top:w.offset.top+w.height+i};case"right bottom":return{left:w.offset.left+w.width+s-n.width,top:w.offset.top+w.height+i};default:return{left:Foundation.rtl()?w.offset.left-n.width+w.width:w.offset.left+s,top:w.offset.top+w.height+i}}}Foundation.Box={ImNotTouchingYou:e,GetDimensions:f,GetOffsets:o}}(jQuery);
;// foundation.util.keyboard.min.js
"use strict";!function(e){function n(e){
        var n={};for(var t in e)n[e[t]]=e[t];
        return n}
        var t={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},o={},r={keys:n(t),parseKey:function(e){
        var n=t[e.which||e.keyCode]||String.fromCharCode(e.which).toUpperCase();
        return n=n.replace(/\W+/,""),e.shiftKey&&(n="SHIFT_"+n),e.ctrlKey&&(n="CTRL_"+n),e.altKey&&(n="ALT_"+n),n=n.replace(/_$/,"")},handleKey:function(n,t,r){
        var a,i,d,f=o[t],u=this.parseKey(n);
        if(!f)
        return console.warn("Component not defined!");
        if(a="undefined"==typeof f.ltr?f:Foundation.rtl()?e.extend({},f.ltr,f.rtl):e.extend({},f.rtl,f.ltr),i=a[u],d=r[i],d&&"function"==typeof d){
        var l=d.apply();(r.handled||"function"==typeof r.handled)&&r.handled(l)}else(r.unhandled||"function"==typeof r.unhandled)&&r.unhandled()},findFocusable:function(n){
        return!!n&&n.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){
        return!(!e(this).is(":visible")||e(this).attr("tabindex")<0)})},register:function(e,n){o[e]=n},trapFocus:function(e){
        var n=Foundation.Keyboard.findFocusable(e),t=n.eq(0),o=n.eq(-1);e.on("keydown.zf.trapfocus",function(e){e.target===o[0]&&"TAB"===Foundation.Keyboard.parseKey(e)?(e.preventDefault(),t.focus()):e.target===t[0]&&"SHIFT_TAB"===Foundation.Keyboard.parseKey(e)&&(e.preventDefault(),o.focus())})},releaseFocus:function(e){e.off("keydown.zf.trapfocus")}};Foundation.Keyboard=r}(jQuery);
;// foundation.util.mediaQuery.min.js
"use strict";!function(e){function t(e){
        var t={};
        return"string"!=typeof e?t:(e=e.trim().slice(1,-1))?t=e.split("&").reduce(function(e,t){
        var n=t.replace(/\+/g," ").split("="),r=n[0],i=n[1];
        return r=decodeURIComponent(r),i=void 0===i?null:decodeURIComponent(i),e.hasOwnProperty(r)?Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i,e},{}):t}
        var n={queries:[],current:"",_init:function(){
        var n,r=this,i=e(".foundation-mq").css("font-family");n=t(i);for(var a in n)n.hasOwnProperty(a)&&r.queries.push({name:a,value:"only screen and (min-width: "+n[a]+")"});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(e){
        var t=this.get(e);
        return!!t&&window.matchMedia(t).matches},is:function(e){
        return e=e.trim().split(" "),e.length>1&&"only"===e[1]?e[0]===this._getCurrentSize():this.atLeast(e[0])},get:function(e){for(var t in this.queries)
        if(this.queries.hasOwnProperty(t)){
        var n=this.queries[t];
        if(e===n.name)
        return n.value}
        return null},_getCurrentSize:function(){for(var e,t=0;t<this.queries.length;t++){
        var n=this.queries[t];window.matchMedia(n.value).matches&&(e=n)}
        return"object"==typeof e?e.name:e},_watcher:function(){
        var t=this;e(window).on("resize.zf.mediaquery",function(){
        var n=t._getCurrentSize(),r=t.current;n!==r&&(t.current=n,e(window).trigger("changed.zf.mediaquery",[n,r]))})}};Foundation.MediaQuery=n,window.matchMedia||(window.matchMedia=function(){
        var e=window.styleMedia||window.media;
        if(!e){
        var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n&&n.parentNode&&n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){
        var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";
        return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===r.width}}}
        return function(t){
        return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),Foundation.MediaQuery=n}(jQuery);
;// foundation.util.motion.min.js
"use strict";!function(n){function i(n,i,e){function t(s){r||(r=s),o=s-r,e.apply(i),o<n?a=window.requestAnimationFrame(t,i):(window.cancelAnimationFrame(a),i.trigger("finished.zf.animate",[i]).triggerHandler("finished.zf.animate",[i]))}
        var a,o,r=null;
        return 0===n?(e.apply(i),void i.trigger("finished.zf.animate",[i]).triggerHandler("finished.zf.animate",[i])):void(a=window.requestAnimationFrame(t))}
function e(i,e,o,r){function s(){i||e.hide(),u(),r&&r.apply(e)}
function u(){e[0].style.transitionDuration=0,e.removeClass(d+" "+f+" "+o)}if(e=n(e).eq(0),e.length){
        var d=i?t[0]:t[1],f=i?a[0]:a[1];u(),e.addClass(o).css("transition","none"),requestAnimationFrame(function(){e.addClass(d),i&&e.show()}),requestAnimationFrame(function(){e[0].offsetWidth,e.css("transition","").addClass(f)}),e.one(Foundation.transitionend(e),s)}}
        var t=["mui-enter","mui-leave"],a=["mui-enter-active","mui-leave-active"],o={animateIn:function(n,i,t){e(!0,n,i,t)},animateOut:function(n,i,t){e(!1,n,i,t)}};Foundation.Move=i,Foundation.Motion=o}(jQuery);
;// foundation.util.nest.min.js
"use strict";!function(e){
        var a={Feather:function(a){
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zf";a.attr("role","menubar");
        var n=a.find("li").attr({role:"menuitem"}),i="is-"+t+"-submenu",u=i+"-item",s="is-"+t+"-submenu-parent";n.each(function(){
        var a=e(this),n=a.children("ul");n.length&&(a.addClass(s).attr({"aria-haspopup":!0,"aria-label":a.children("a:first").text()}),"drilldown"===t&&a.attr({"aria-expanded":!1}),n.addClass("submenu "+i).attr({"data-submenu":"",role:"menu"}),"drilldown"===t&&n.attr({"aria-hidden":!0})),a.parent("[data-submenu]").length&&a.addClass("is-submenu-item "+u)})},Burn:function(e,a){
        var t="is-"+a+"-submenu",n=t+"-item",i="is-"+a+"-submenu-parent";e.find(">li, .menu, .menu > li").removeClass(t+" "+n+" "+i+" is-submenu-item submenu is-active").removeAttr("data-submenu").css("display","")}};Foundation.Nest=a}(jQuery);
;// foundation.util.timerAndImageLoader.min.js
"use strict";!function(t){function e(t,e,i){
        var a,s,n=this,r=e.duration,o=Object.keys(t.data())[0]||"timer",u=-1;this.isPaused=!1,this.restart=function(){u=-1,clearTimeout(s),this.start()},this.start=function(){this.isPaused=!1,clearTimeout(s),u=u<=0?r:u,t.data("paused",!1),a=Date.now(),s=setTimeout(function(){e.infinite&&n.restart(),i&&"function"==typeof i&&i()},u),t.trigger("timerstart.zf."+o)},this.pause=function(){this.isPaused=!0,clearTimeout(s),t.data("paused",!0);
        var e=Date.now();u-=e-a,t.trigger("timerpaused.zf."+o)}}
function i(e,i){function a(){s--,0===s&&i()}
        var s=e.length;0===s&&i(),e.each(function(){
        if(this.complete||4===this.readyState||"complete"===this.readyState)a();
    else{
        var e=t(this).attr("src");t(this).attr("src",e+(e.indexOf("?")>=0?"&":"?")+(new Date).getTime()),t(this).one("load",function(){a()})}})}Foundation.Timer=e,Foundation.onImagesLoaded=i}(jQuery);
;// foundation.util.triggers.min.js
"use strict";!function(t){function e(){o(),a(),i(),n(),r()}
function r(e){
        var r=t("[data-yeti-box]"),a=["dropdown","tooltip","reveal"];
        if(e&&("string"==typeof e?a.push(e):"object"==typeof e&&"string"==typeof e[0]?a.concat(e):console.error("Plugin names must be strings")),r.length){
        var i=a.map(function(t){
        return"closeme.zf."+t}).join(" ");t(window).off(i).on(i,function(e,r){
        var a=e.namespace.split(".")[0],i=t("[data-"+a+"]").not('[data-yeti-box="'+r+'"]');i.each(function(){
        var e=t(this);e.triggerHandler("close.zf.trigger",[e])})})}}
function a(e){
        var r=void 0,a=t("[data-resize]");a.length&&t(window).off("resize.zf.trigger").on("resize.zf.trigger",function(i){r&&clearTimeout(r),r=setTimeout(function(){g||a.each(function(){t(this).triggerHandler("resizeme.zf.trigger")}),a.attr("data-events","resize")},e||10)})}
function i(e){
        var r=void 0,a=t("[data-scroll]");a.length&&t(window).off("scroll.zf.trigger").on("scroll.zf.trigger",function(i){r&&clearTimeout(r),r=setTimeout(function(){g||a.each(function(){t(this).triggerHandler("scrollme.zf.trigger")}),a.attr("data-events","scroll")},e||10)})}
function n(e){
        var r=t("[data-mutate]");r.length&&g&&r.each(function(){t(this).triggerHandler("mutateme.zf.trigger")})}
function o(){
        if(!g)
        return!1;
        var e=document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
r=function(e){
        var r=t(e[0].target);switch(e[0].type){case"attributes":"scroll"===r.attr("data-events")&&"data-events"===e[0].attributeName&&r.triggerHandler("scrollme.zf.trigger",[r,window.pageYOffset]),"resize"===r.attr("data-events")&&"data-events"===e[0].attributeName&&r.triggerHandler("resizeme.zf.trigger",[r]),"style"===e[0].attributeName&&(r.closest("[data-mutate]").attr("data-events","mutate"),r.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[r.closest("[data-mutate]")]));
    break;case"childList":r.closest("[data-mutate]").attr("data-events","mutate"),r.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[r.closest("[data-mutate]")]);
    break;default:return!1}};
        if(e.length)for(var a=0;a<=e.length-1;a++){
        var i=new g(r);i.observe(e[a],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}}
        var g=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)
        if(t[e]+"MutationObserver"in window)
        return window[t[e]+"MutationObserver"];
        return!1}(),s=function(e,r){e.data(r).split(" ").forEach(function(a){t("#"+a)["close"===r?"trigger":"triggerHandler"](r+".zf.trigger",[e])})};t(document).on("click.zf.trigger","[data-open]",function(){s(t(this),"open")}),t(document).on("click.zf.trigger","[data-close]",function(){
        var e=t(this).data("close");e?s(t(this),"close"):t(this).trigger("close.zf.trigger")}),t(document).on("click.zf.trigger","[data-toggle]",function(){
        var e=t(this).data("toggle");e?s(t(this),"toggle"):t(this).trigger("toggle.zf.trigger")}),t(document).on("close.zf.trigger","[data-closable]",function(e){e.stopPropagation();
        var r=t(this).data("closable");""!==r?Foundation.Motion.animateOut(t(this),r,function(){t(this).trigger("closed.zf")}):t(this).fadeOut().trigger("closed.zf")}),t(document).on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",function(){
        var e=t(this).data("toggle-focus");t("#"+e).triggerHandler("toggle.zf.trigger",[t(this)])}),t(window).on("load",function(){e()}),Foundation.IHearYou=e}(jQuery);
;// foundation.dropdown.min.js
"use strict";
function _classCallCheck(t,e){
        if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
        var _createClass=function(){function t(t,e){for(var o=0;o<e.length;o++){
        var s=e[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}
        return function(e,o,s){
        return o&&t(e.prototype,o),s&&t(e,s),e}}();
!function(t){
        var e=function(){function e(o,s){_classCallCheck(this,e),this.$element=o,this.options=t.extend({},e.defaults,this.$element.data(),s),this._init(),Foundation.registerPlugin(this,"Dropdown"),Foundation.Keyboard.register("Dropdown",{ENTER:"open",SPACE:"open",ESCAPE:"close"})}
        return _createClass(e,[{key:"_init",value:function(){
        var e=this.$element.attr("id");this.$anchor=t(t('[data-toggle="'+e+'"]').length?'[data-toggle="'+e+'"]':'[data-open="'+e+'"]'),this.$anchor.attr({"aria-controls":e,"data-is-focus":!1,"data-yeti-box":e,"aria-haspopup":!0,"aria-expanded":!1}),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,this.options.positionClass=this.getPositionClass(),this.counter=4,this.usedPositions=[],this.$element.attr({"aria-hidden":"true","data-yeti-box":e,"data-resize":e,"aria-labelledby":this.$anchor[0].id||Foundation.GetYoDigits(6,"dd-anchor")}),this._events()}},{key:"getPositionClass",value:function(){
        var t=this.$element[0].className.match(/(top|left|right|bottom)/g);t=t?t[0]:"";
        var e=/float-(\S+)/.exec(this.$anchor[0].className);e=e?e[1]:"";
        var o=e?e+" "+t:t;
        return o}},{key:"_reposition",value:function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.$element.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.$element.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.$element.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):this.$element.removeClass(t),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){
    if("false"===this.$anchor.attr("aria-expanded"))
        return!1;
        var t=this.getPositionClass(),e=Foundation.Box.GetDimensions(this.$element),o=(Foundation.Box.GetDimensions(this.$anchor),"left"===t?"left":"right"===t?"left":"top"),s="top"===o?"height":"width";"height"===s?this.options.vOffset:this.options.hOffset;
        if(e.width>=e.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.$element,this.$parent)){
        var i=e.windowDims.width,n=0;
        if(this.$parent){
        var a=Foundation.Box.GetDimensions(this.$parent),n=a.offset.left;a.width<i&&(i=a.width)}
        return this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,"center bottom",this.options.vOffset,this.options.hOffset+n,!0)).css({width:i-2*this.options.hOffset,height:"auto"}),this.classChanged=!0,!1}for(this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,t,this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.$element,this.$parent,!0)&&this.counter;)this._reposition(t),this._setPosition()}},{key:"_events",value:function(){
        var e=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.options.hover&&(this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){
        var o=t("body").data();"undefined"!=typeof o.whatinput&&"mouse"!==o.whatinput||(clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.open(),e.$anchor.data("hover",!0)},e.options.hoverDelay))}).on("mouseleave.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.close(),e.$anchor.data("hover",!1)},e.options.hoverDelay)}),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(e.timeout)}).on("mouseleave.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.close(),e.$anchor.data("hover",!1)},e.options.hoverDelay)})),this.$anchor.add(this.$element).on("keydown.zf.dropdown",function(o){
        var s=t(this);Foundation.Keyboard.findFocusable(e.$element);Foundation.Keyboard.handleKey(o,"Dropdown",{open:function(){s.is(e.$anchor)&&(e.open(),e.$element.attr("tabindex",-1).focus(),o.preventDefault())},close:function(){e.close(),e.$anchor.focus()}})})}},{key:"_addBodyHandler",value:function(){
        var e=t(document.body).not(this.$element),o=this;e.off("click.zf.dropdown").on("click.zf.dropdown",function(t){o.$anchor.is(t.target)||o.$anchor.find(t.target).length||o.$element.find(t.target).length||(o.close(),e.off("click.zf.dropdown"))})}},{key:"open",value:function(){
        if(this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchor.addClass("hover").attr({"aria-expanded":!0}),this._setPosition(),this.$element.addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){
        var t=Foundation.Keyboard.findFocusable(this.$element);t.length&&t.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&Foundation.Keyboard.trapFocus(this.$element),this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function(){
        if(!this.$element.hasClass("is-open"))
        return!1;
        if(this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchor.removeClass("hover").attr("aria-expanded",!1),this.classChanged){
        var t=this.getPositionClass();t&&this.$element.removeClass(t),this.$element.addClass(this.options.positionClass).css({height:"",width:""}),this.classChanged=!1,this.counter=4,this.usedPositions.length=0}this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&Foundation.Keyboard.releaseFocus(this.$element)}},{key:"toggle",value:function(){
        if(this.$element.hasClass("is-open")){
        if(this.$anchor.data("hover"))
        return;this.close()}else this.open()}},{key:"destroy",value:function(){this.$element.off(".zf.trigger").hide(),this.$anchor.off(".zf.dropdown"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={parentClass:null,hoverDelay:250,hover:!1,hoverPane:!1,vOffset:1,hOffset:1,positionClass:"",trapFocus:!1,autoFocus:!1,closeOnClick:!1},Foundation.plugin(e,"Dropdown")}(jQuery);
;// foundation.dropdownMenu.min.js
"use strict";
function _classCallCheck(e,n){
        if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}
        var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){
        var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}
        return function(n,t,i){
        return t&&e(n.prototype,t),i&&e(n,i),n}}();!function(e){
        var n=function(){function n(t,i){_classCallCheck(this,n),this.$element=t,this.options=e.extend({},n.defaults,this.$element.data(),i),Foundation.Nest.Feather(this.$element,"dropdown"),this._init(),Foundation.registerPlugin(this,"DropdownMenu"),Foundation.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}
        return _createClass(n,[{key:"_init",value:function(){
        var e=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),this.$element.hasClass(this.options.rightClass)||"right"===this.options.alignment||Foundation.rtl()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",e.addClass("opens-left")):e.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function(){
        return"block"===this.$tabs.css("display")}},{key:"_events",value:function(){
    var n=this,t="ontouchstart"in window||"undefined"!=typeof window.ontouchstart,i="is-dropdown-submenu-parent",o=function(o){
        var s=e(o.target).parentsUntil("ul","."+i),a=s.hasClass(i),r="true"===s.attr("data-is-click"),d=s.children(".is-dropdown-submenu");
        if(a)
        if(r){
        if(!n.options.closeOnClick||!n.options.clickOpen&&!t||n.options.forceFollow&&t)
        return;o.stopImmediatePropagation(),o.preventDefault(),n._hide(s)}else o.preventDefault(),o.stopImmediatePropagation(),n._show(d),s.add(s.parentsUntil(n.$element,"."+i)).attr("data-is-click",!0)};(this.options.clickOpen||t)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",o),n.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownmenu",function(t){
        var o=e(this),s=o.hasClass(i);s||n._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(t){
        var o=e(this),s=o.hasClass(i);s&&(clearTimeout(o.data("_delay")),o.data("_delay",setTimeout(function(){n._show(o.children(".is-dropdown-submenu"))},n.options.hoverDelay)))}).on("mouseleave.zf.dropdownmenu",function(t){
        var o=e(this),s=o.hasClass(i);
        if(s&&n.options.autoclose){
        if("true"===o.attr("data-is-click")&&n.options.clickOpen)
        return!1;clearTimeout(o.data("_delay")),o.data("_delay",setTimeout(function(){n._hide(o)},n.options.closingTime))}}),this.$menuItems.on("keydown.zf.dropdownmenu",function(t){
        var i,o,s=e(t.target).parentsUntil("ul",'[role="menuitem"]'),a=n.$tabs.index(s)>-1,r=a?n.$tabs:s.siblings("li").add(s);r.each(function(n){
        if(e(this).is(s))
        return i=r.eq(n-1),void(o=r.eq(n+1))});
        var d=function(){s.is(":last-child")||(o.children("a:first").focus(),t.preventDefault())},l=function(){i.children("a:first").focus(),t.preventDefault()},u=function(){
        var e=s.children("ul.is-dropdown-submenu");e.length&&(n._show(e),s.find("li > a:first").focus(),t.preventDefault())},p=function(){
        var e=s.parent("ul").parent("li");e.children("a:first").focus(),n._hide(e),t.preventDefault()},c={open:u,close:function(){n._hide(n.$element),n.$menuItems.find("a:first").focus(),t.preventDefault()},handled:function(){t.stopImmediatePropagation()}};a?n._isVertical()?Foundation.rtl()?e.extend(c,{down:d,up:l,next:p,previous:u}):e.extend(c,{down:d,up:l,next:u,previous:p}):Foundation.rtl()?e.extend(c,{next:l,previous:d,down:u,up:p}):e.extend(c,{next:d,previous:l,down:u,up:p}):Foundation.rtl()?e.extend(c,{next:p,previous:u,down:d,up:l}):e.extend(c,{next:u,previous:p,down:d,up:l}),Foundation.Keyboard.handleKey(t,"DropdownMenu",c)})}},{key:"_addBodyHandler",value:function(){
        var n=e(document.body),t=this;n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(e){
        var i=t.$element.find(e.target);i.length||(t._hide(),n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}},{key:"_show",value:function(n){
        var t=this.$tabs.index(this.$tabs.filter(function(t,i){
            return e(i).find(n).length>0})),i=n.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(i,t),n.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
        var o=Foundation.Box.ImNotTouchingYou(n,null,!0);
        if(!o){
        var s="left"===this.options.alignment?"-right":"-left",a=n.parent(".is-dropdown-submenu-parent");a.removeClass("opens"+s).addClass("opens-"+this.options.alignment),o=Foundation.Box.ImNotTouchingYou(n,null,!0),o||a.removeClass("opens-"+this.options.alignment).addClass("opens-inner"),this.changed=!0}n.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdownmenu",[n])}},{key:"_hide",value:function(e,n){
        var t;t=e&&e.length?e:void 0!==n?this.$tabs.not(function(e,t){
        return e===n}):this.$element;
        var i=t.hasClass("is-active")||t.find(".is-active").length>0;
        if(i){
        if(t.find("li.is-active").add(t).attr({"data-is-click":!1}).removeClass("is-active"),t.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||t.find("opens-inner").length){
        var o="left"===this.options.alignment?"right":"left";t.find("li.is-dropdown-submenu-parent").add(t).removeClass("opens-inner opens-"+this.options.alignment).addClass("opens-"+o),this.changed=!1}this.$element.trigger("hide.zf.dropdownmenu",[t])}}},{key:"destroy",value:function(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),e(document.body).off(".zf.dropdownmenu"),Foundation.Nest.Burn(this.$element,"dropdown"),Foundation.unregisterPlugin(this)}}]),n}();n.defaults={disableHover:!1,autoclose:!0,hoverDelay:50,clickOpen:!1,closingTime:500,alignment:"left",closeOnClick:!0,closeOnClickInside:!0,verticalClass:"vertical",rightClass:"align-right",forceFollow:!0},Foundation.plugin(n,"DropdownMenu")}(jQuery);
