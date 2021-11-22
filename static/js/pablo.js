/*!
    Pablo <http://pablojs.com>

    by Premasagar Rose <http://premasagar.com>,
       Dharmafly <http://dharmafly.com>

    Repo: <https://github.com/premasagar/pablo>
    MIT license

*/
/*jshint newcap:false */

(function(window, Object, Array, Element, SVGElement, HTMLElement, NodeList, Document, HTMLDocument, document, navigator, XMLHttpRequest, DOMParser, XMLSerializer, atob, btoa, escape, unescape, setTimeout, clearTimeout){
    'use strict';
    
    var /* SETTINGS */
        pabloVersion = '0.5.1',
        svgVersion = 1.1,
        svgns = 'http://www.w3.org/2000/svg',

        head, testElement, arrayProto, matchesProp, userAgent, camelCase;

    
    function make(elementName){
        return typeof elementName === 'string' &&
            document.createElementNS(svgns, elementName) ||
            null;
    }

    // Browser detection - based on jquery-migrate-1.2.1.js & http://stackoverflow.com/questions/17907445/how-to-detect-ie11
    userAgent = (function(){
        var ua = navigator.userAgent.toLowerCase(),
            match = /((webkit))[ \/]([\w.]+)/.exec(ua) ||
                    /((o)pera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
                    /((trident))(?:.*? rv:([\w.]+)|)/.exec(ua) ||
                    /((ms)ie) ([\w.]+)/.exec(ua) ||
                    ua.indexOf("compatible") < 0 &&
                        /((moz)illa)(?:.*? rv:([\w.]+)|)/.exec(ua),
            name, prefix, version;

        if (match){
            name = match[1];
            prefix = match[2];
            version = match[3];

            // IE 10+
            if (name === 'trident'){
                name = 'msie';
                prefix = 'ms';
            }
        }

        return {
            name: name || '',
            version: version || '0',
            prefix: prefix || '',
            cssPrefix: prefix ? '-' + prefix + '-' : ''
        };
    }());

    // e.g. 'font-color' -> 'fontColor'
    // if `upperFirst === true` -> 'FontColor'
    camelCase = (function(){
        var uppercaseAfterHyphens = /^-|(?!^)-([a-z])/g,
            uppercaseFirstAndHyphens = /(?:^|-)([a-z])/g;

        return function (str, upperFirst){
            var pattern = upperFirst ?
                uppercaseFirstAndHyphens : uppercaseAfterHyphens;

            return str.replace(pattern, function(match, letter){
                return letter && letter.toUpperCase() || '';
            });
        };
    }());

    function findPrefixedProperty(prop, context){
        var prefixed;

        if (prop in context){
            return prop;
        }

        if (userAgent.prefix){
            prefixed = userAgent.prefix + camelCase(prop, true);
            if (prefixed in context){
                return prefixed;
            }
        }
    }

    /////


    // TEST ENVIRONMENT CAPABILITY

    if (document){
        testElement = 'createElementNS' in document && make('svg');
        head = document.head || document.getElementsByTagName('head')[0];
        arrayProto = Array && Array.prototype;
        matchesProp = findPrefixedProperty('matches', testElement) ||
            findPrefixedProperty('matchesSelector', testElement);
    }

    if (!(
        testElement && head && arrayProto && matchesProp &&
        Element && SVGElement && HTMLElement && NodeList && Document && 
        'createSVGRect' in testElement &&
        'attributes' in testElement &&
        'querySelectorAll' in testElement &&
        'previousElementSibling' in testElement &&
        'childNodes'    in testElement && // see note on svgElement.children, below
        'create'        in Object &&
        'keys'          in Object &&
        'isArray'       in Array &&
        'forEach'       in arrayProto &&
        'map'           in arrayProto &&
        'some'          in arrayProto &&
        'every'         in arrayProto &&
        'filter'        in arrayProto &&
        'DOMParser'     in window &&
        'XMLSerializer' in window
    )){
        // Incompatible environment
        // Set `Pablo` to be a simple reference object
        window.Pablo = {
            version: pabloVersion,
            isSupported: false,
            userAgent: userAgent
        };

        // Exit the script
        return;
    }

    // Pablo not supported in this environment. Exit.


    ////////////////////////////////////////////////////


(function(){
    var svgElementNames = 'a altGlyph altGlyphDef altGlyphItem animate animateColor animateMotion animateTransform circle clipPath color-profile cursor defs desc ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignObject g glyph glyphRef hkern image line linearGradient marker mask metadata missing-glyph mpath path pattern polygon polyline radialGradient rect script set stop style svg switch symbol text textPath title tref tspan use view vkern',
        xmlns = 'http://www.w3.org/2000/xmlns/',
        htmlns = 'http://www.w3.org/1999/xhtml',
        xlinkns = 'http://www.w3.org/1999/xlink',
        svgMimeType = 'image/svg+xml',
        svgDataUrlPrefix = 'data:' + svgMimeType + ';base64,',
        cacheExpando = 'pablo-data',
        eventsNamespace = '__events__',
        support, hyphenate, resolveCssProperty, markupToSvgElement, dataUrlToSvgMarkup,
        cache, cacheNextId, Events, isNumeric, cssClassApi, classlistMethod,
        pabloCollectionApi;

    support = (function(){
        function supportsMarkup(){
            var el = make('a');
            el.setAttributeNS(xlinkns, 'xlink:href', '#');
            return (new XMLSerializer())
                        .serializeToString(el)
                        .indexOf('xlink') !== -1;
        }

        var createCanvas = 'getContext' in document.createElement('canvas'),
            dataUrl = !!(atob && btoa),
            canvas = dataUrl && createCanvas,
            imageTypes = ['png', 'jpeg'],
            support = {
                basic: true,
                classList: 'classList' in testElement,
                dataUrl: dataUrl,
                image: {
                    svg: dataUrl
                },
                canvas: canvas,
                download: dataUrl && 'createEvent' in document && 'download' in document.createElement('a'),
                markup: supportsMarkup()
            };

        function callbackTrue(callback){
            callback(true);
        }
        function callbackFalse(callback){
            callback(false);
        }

        imageTypes.forEach(function(type){
            if (!canvas){
                support.image[type] = callbackFalse;
            }
            else {
                support.image[type] = function(callback){
                    Pablo.line({x2:1}).dataUrl(type, function(dataUrl){
                        support.image[type] = dataUrl ? callbackTrue : callbackFalse;
                        callback(!!dataUrl);
                    });
                };
            }
        });

        return support;
    }());

    
    /////
    
    
    // UTILITIES
    
    function extend(target/*, any number of source objects*/){
        var len = arguments.length,
            withPrototype = arguments[len-1] === true,
            i, obj, prop;

        if (!target){
            target = {};
        }

        for (i = 1; i < len; i++){
            obj = arguments[i];
            if (typeof obj === 'object'){
                for (prop in obj){
                    if (withPrototype || obj.hasOwnProperty(prop)){
                        target[prop] = obj[prop];
                    }
                }
            }
        }
        return target;
    }

    // Modified from http://code.jquery.com/jquery-2.0.3.js
    function isPlainObject(obj){
        // Not plain objects:
        // - Any object or value whose internal [[Class]] property is not "[object Object]"
        // - DOM nodes
        // - window
        if (obj === null || typeof obj !== 'object' || 'nodeType' in obj || obj === window || obj === null){
            return false;
        }

        // Support: Firefox <20
        // The try/catch suppresses exceptions thrown when attempting to access
        // the "constructor" property of certain host objects, ie. |window.location|
        // https://bugzilla.mozilla.org/show_bug.cgi?id=814622
        try {
            if (!('constructor' in obj) ||
                !('prototype' in obj.constructor) ||
                !obj.constructor.prototype.hasOwnProperty('isPrototypeOf')){
                return false;
            }
        }
        catch(e){
            return false;
        }

        // If the function hasn't returned already, we're confident that
        // |obj| is a plain object, created by {} or constructed with new Object
        return true;
    }
    
    function toArray(obj){
        return arrayProto.slice.call(obj);
    }

    function isArray(obj){
        return Array.isArray(obj);
    }

    function isArrayLike(obj){
        return obj &&
            (typeof obj === 'object' || typeof obj === 'function') &&
            typeof obj.length === 'number';
    }
    
    function isElement(obj){
        return obj instanceof Element;
    }

    function isElementOrDocument(el){
        return isElement(el) || isDocument(el);
    }
    
    function isNodeList(obj){
        return obj instanceof NodeList;
    }
    
    function isDocument(obj){
        // Check constructors rather than `obj instanceof Document` for Opera 12.16
        return obj && (obj.constructor === Document || obj.constructor === HTMLDocument);
    }
    
    function isSVGElement(obj){
        return obj instanceof SVGElement;
    }
    
    function isHTMLElement(obj){
        return obj instanceof HTMLElement;
    }

    // Check if obj is an element from this or another document
    function hasSvgNamespace(obj){
        return !!(obj && obj.namespaceURI === svgns);
    }

    function hasHtmlNamespace(obj){
        return !!(obj && obj.namespaceURI === htmlns);
    }
    
    function canBeWrapped(obj){
        return typeof obj === 'string' ||
            isPablo(obj) ||
            isElement(obj) ||
            isNodeList(obj) ||
            isDocument(obj) ||
            Array.isArray(obj) ||
            isArrayLike(obj) ||
            hasSvgNamespace(obj);

            // || isPlainObject(obj); to support Events.on() use plain objects
    }
    
    // Return node (with attributes) if a Pablo collection, otherwise create one.
    function toPablo(node, attr){
        if (isPablo(node)){
            return attr ? node.attr(attr) : node;
        }
        return Pablo(node, attr);
    }
    
    function getAttributes(el){
        var ret = {},
            attr, len, i;
            
        if (el){
            attr = el.attributes;
            for (i = 0, len = attr.length; i<len; i++){
                ret[attr[i].name] = attr[i].value;
            }
        }
        return ret;
    }

    function attributeNS(el, attr){
        var colonIndex, ns, name, uri;

        // The `xmlns` attribute
        if (attr === 'xmlns'){
            ns = name = 'xmlns';
        }

        if (!ns){
            // HTML attribute, e.g. `src`
            // And for browsers that incorrectly don't output prefixes with markup(), 
            // e.g. Safari 6.05
            if (!hasSvgNamespace(el)){
                return false;
            }

            // Find a colon separating the namespace prefix from the attribute name
            colonIndex = attr.indexOf(':');

            // A non-prefixed, namespaced attribute, e.g. `fill`
            if (colonIndex === -1){
                return true;
            }

            // A prefixed, namespaced attribute, e.g. `xlink:href`
            // e.g. ns === 'xlink'
            ns = attr.slice(0, colonIndex);

            // The un-prefixed name of the attribute, e.g. `href`
            name = attr.slice(colonIndex + 1);
        }

        // Lookup URI in Pablo's `ns` object
        uri = Pablo.ns[ns] || null;

        return {uri:uri, name:name};
    }

    function setAttribute(el, attr, value){
        var attrNS = attributeNS(el, attr);

        // Namespace attributes, e.g. `xmlns` and `xmlns:xlink`
        // and namespace prefixed attributes, e.g. `xlink:href`
        if (typeof attrNS === 'object'){
            // attrNS = {uri, name}
            // `uri` is the URI for the namespace of the prefix
            // `name` is the un-prefixed attribute name, e.g. 'href'
            return el.setAttributeNS(attrNS.uri, attr, value);
        }

        switch(attrNS){
            // A pre-namespaced, prefixed attribute, e.g. `xmlns:xlink`
            case false:
            return el.setAttribute(attr, value);

            // A non-prefixed, namespaced attribute, e.g. `fill`
            case true:
            return el.setAttributeNS(null, attr, value);
        }
    }

    function getAttribute(el, attr){
        var attrNS = attributeNS(el, attr);

        switch(attrNS){
            case false:
            return el.getAttribute(attr);

            case true:
            return el.getAttributeNS(null, attr);

            default:
            return el.getAttributeNS(attrNS[0], attrNS[1]);
        }
    }

    function removeAttribute(el, attr){
        var attrNS = attributeNS(el, attr);

        switch(attrNS){
            case false:
            return el.removeAttribute(attr);

            case true:
            return el.removeAttributeNS(null, attr);

            default:
            return el.removeAttributeNS(attrNS[0], attrNS[1]);
        }
    }

    isNumeric = (function(){
        var numberOrSpace = /^-?\d[\.\d\s]*$/;

        return function(str){
            if (typeof str === 'number'){
                return true;
            }
            return typeof str === 'string' && numberOrSpace.test(str);
        };
    }());

    function numericToNumber(values){
        if (typeof values === 'number'){
            return values;
        }
        if (typeof values === 'string'){
            return isNumeric(values) ? Number(values) : values;
        }
        if (Array.isArray(values)){
            return values.map(function(value){
                return numericToNumber(value);
            });
        }
        return values;
    }
    
    // e.g. 'fontColor' -> 'font-color'
    // NOTE: does not check for blank spaces within multiple words, e.g. 'font Color'.
    // To achieve that, use `capitalLetters = /\s*[A-Z]/g` and `letter.trim().toLowerCase()`
    hyphenate = (function(){
        var capitalLetters = /(^|.)([A-Z])/g;

        function convertCapitalLetter(match, preceding, letter){
            return (preceding ? preceding + '-' : '') +
                letter.toLowerCase();
        }

        return function(str, leadingHyphen){
            return (leadingHyphen ? '-' : '') +
                str.replace(capitalLetters, convertCapitalLetter);
        };
    }());

    resolveCssProperty = (function(){
        var styleDictionary = {},
            hyphenatedDictionary = {},
            elements = [make('svg'), document.createElement('a')];
        
            elements.forEach(function(el){
                var style = el.style,
                    prop;

                for (prop in style){
                    if (!(prop in styleDictionary) && typeof style[prop] !== 'function'){
                        styleDictionary[prop] = prop;
                    }
                }
            });

        // e.g. convert 'transition' => 'webkitTransition'
        // e.g. if `hyphenateResult === true` => '-webkit-transition'
        return function(prop, hyphenateResult){
            var resolvedProp = hyphenateResult ?
                    hyphenatedDictionary[prop] : styleDictionary[prop],
                testProp, isPrefixed;

            if (resolvedProp){
                return resolvedProp;
            }

            if (hyphenateResult){
                resolvedProp = styleDictionary[prop];
            }

            if (!resolvedProp){
                testProp = camelCase(prop);
                resolvedProp = styleDictionary[testProp];
            }

            if (!resolvedProp && userAgent.prefix){
                testProp = userAgent.prefix + camelCase(testProp, true);
                resolvedProp = styleDictionary[testProp];

                if (!resolvedProp){
                    testProp = camelCase(testProp, true);
                    resolvedProp = styleDictionary[testProp];
                }
            }

            if (resolvedProp){
                styleDictionary[prop] = resolvedProp;

                if (hyphenateResult){
                    isPrefixed = resolvedProp.toLowerCase().indexOf(userAgent.prefix) === 0;
                    resolvedProp = hyphenate(resolvedProp, isPrefixed);
                    hyphenatedDictionary[prop] = resolvedProp;
                }
            }
            return resolvedProp;
        };
    }());

    markupToSvgElement = (function(){
        var parser, prefix, suffix;

        return function markupToSvgElement(markup){
            var svgdoc, target;

            if (!parser){
                parser = new DOMParser();
                suffix = '</svg>';
                // Add a <g> to a <svg> to ensure the <svg> is not self-closing
                prefix = Pablo.svg().append(Pablo.g()).markup().replace(/<g.*/, '');
            }
            markup = prefix + markup + suffix;

            // not supported in IE9: mime type 'image/svg+xml'
            svgdoc = parser.parseFromString(markup, 'application/xml');
            target = Pablo(svgdoc.documentElement.childNodes);
            return target.detach();
        };
    }());

    dataUrlToSvgMarkup = support.dataUrl ?
        function(dataUrl){
            var data = dataUrl.slice(svgDataUrlPrefix.length);
            // See https://developer.mozilla.org/en-US/docs/Web/API/window.btoa#Unicode_Strings for use of decodeURIComponent and escape
            return decodeURIComponent(escape(atob(data)));
        } :

        function(){
            return '';
        };
    

    // Data cache
    cache = {};
    cacheNextId = 1;
    
    
    /////
    
    
    // PABLO COLLECTIONS
    
    function PabloCollection(node, attr){
        if (node){
            // Create a named element, e.g. Pablo('circle', {})
            // Check that this isn't Pablo('<circle/>', {})
            if (typeof node === 'string' && attr && node.indexOf('<') === -1){
                node = make(node);
            }

            // Add the results to the collection
            this.add(node);

            // Apply attributes
            if (attr){
                this.attr(attr);
            }
        }
    }

    pabloCollectionApi = PabloCollection.prototype = Object.create(arrayProto);

    extend(pabloCollectionApi, {
        pablo: pabloVersion,
        collection: null,

        /////

        // ARRAY-LIKE BEHAVIOUR

        toArray: function(){
            return toArray(this);
        },
        
        size: function(){
            return this.length;
        },
        
        get: function(index){
            return this[index];
        },
        
        eq: function(index){
            return index !== -1 ?
                // Return zero-indexed node
                Pablo(this[index]) :
                // Return node, counting backwards from end of elements array
                (index < -1 ? this.slice(index, index + 1) : this.slice(index));
        },

        first: function(){
            return this.eq(0);
        },

        last: function(){
            return this.eq(this.length-1);
        },

        add: (function(){
            // Detect `<` as the first non-whitespace character
            var openTag = /^\s*</;

            return function (/*node, node,..., prepend*/){
                var nodes = arguments,
                    numNodes = nodes.length,
                    prepend = false,
                    node, toAdd, nodeInArray, i;

                // `prepend` 
                if (numNodes > 1 && typeof nodes[numNodes-1] === 'boolean'){
                    prepend = nodes[numNodes-1];
                    numNodes -= 1;

                    if (prepend){
                        nodes = arrayProto.slice.call(nodes, 0, numNodes).reverse();
                    }
                }

                for (i=0; i<numNodes; i++){
                    node = nodes[i];

                    // An SVG or HTML element, or document
                    if (isElement(node) || isDocument(node) || hasSvgNamespace(node)){
                        // Add element, if it is not already in the collection
                        if (arrayProto.indexOf.call(this, node) === -1){
                            arrayProto[prepend ? 'unshift' : 'push'].call(this, node);
                        }
                    }

                    // A Pablo collection
                    else if (isPablo(node)){
                        // See extensions/functional.js for example usage of node.collection
                        // TODO: remove support for functional.js?
                        node = toArray(node.collection || node);
                        toAdd = node.collection || node;
                    }

                    // A string outside of an array - either CSS selector,
                    // SVG markup or dataUrl
                    else if (typeof node === 'string'){
                        // SVG markup
                        // Detect `<` as the first non-whitespace character
                        // Check indexOf() first, for performance
                        if (node.indexOf('<') !== -1 && openTag.test(node)){
                            toAdd = markupToSvgElement(node);
                        }

                        // Data URL
                        else if (node.indexOf(svgDataUrlPrefix) === 0){
                            toAdd = markupToSvgElement(dataUrlToSvgMarkup(node));
                        }

                        // CSS selector
                        else {
                            toAdd = document.querySelectorAll(node);
                        }
                    }

                    // A nodeList (e.g. result of a selector query, or childNodes)
                    // or is an object like an array, e.g. a jQuery collection
                    else if (isNodeList(node) || isArrayLike(node)){
                        toAdd = node;
                    }

                    // `node` is an array or collection
                    if (toAdd || Array.isArray(node)){
                        // Convert to an array of nodes
                        if (toAdd){
                            node = toArray(toAdd);
                        }

                        while (node.length){
                            // Whether prepending or appending, always process arrays and
                            // array-like collections in forwards order
                            nodeInArray = prepend ? node.pop() : node.shift();

                            // A string inside an array is converted to an element
                            if (typeof nodeInArray === 'string'){
                                nodeInArray = make(nodeInArray);
                            }

                            // Add to collection
                            this.add(nodeInArray, prepend);
                        }

                        toAdd = null;
                    }
                }
                return this;
            };
        }()),

        concat: function(){
            return this.add.apply(Pablo(this), arguments);
        },
        
        // Add new node(s) to the collection; accepts arrays or nodeLists
        unshift: function(){
            var args = toArray(arguments);
            args.push(true);
            return this.add.apply(this, args);
        },
        
        // Remove node from end of the collection
        pop: function(){
            return Pablo(arrayProto.pop.call(this));
        },
        
        shift: function(){
            return Pablo(arrayProto.shift.call(this));
        },
        
        slice: function(begin, end){
            return Pablo(arrayProto.slice.call(this, begin, end));
        },

        splice: function(){
            arrayProto.splice.apply(this, arguments);
            return this;
        },

        join: function(separator){
            return this.toArray().map(function(el){
                return Pablo(el).toString();
            }).join(separator);
        },

        reverse: function(){
            arrayProto.reverse.call(this);
            return this;
        },

        sort: function(fn){
            arrayProto.sort.call(this, fn);
            return this;
        },
        
        each: function(fn, context){
            if (this.length){
                if (this.length === 1){
                    fn.call(context || this, this[0], 0);
                }
                else {
                    arrayProto.forEach.call(this, fn, context || this);
                }
            }
            return this;
        },
        
        map: function(fn, context){
            return Pablo(arrayProto.map.call(this, fn, context || this));
        },


        /////


        // TRAVERSAL

        // See below for traversal shortcuts that use `traverse()` e.g. `parents()`
        traverse: function(prop, doWhile, selectors){
            var collection = Pablo(),
                isFn = typeof doWhile === 'function';

            this.each(function(el, i){
                el = el[prop];
                while (el && (isFn ? doWhile.call(this, el, i) : true)){
                    collection.add(el);
                    el = doWhile ? el[prop] : false;
                }
            });
            return selectors ? collection.select(selectors) : collection;
        },


        /////


        // MANIPULATION
        
        detach: function(){
            return this.each(function(el){
                var parentNode = el.parentNode;
                if (parentNode){
                    parentNode.removeChild(el);
                }
            });
        },

        remove: function(){
            // If the cache has any contents
            if (Object.keys(cache).length){
                // Remove data for all elements and their descendents
                this.off().removeData();
                this.find('*').off().removeData();
            }

            // Remove from the DOM
            return this.detach();
        },
        
        empty: function(){
            // If the cache has any contents
            if (Object.keys(cache).length){
                // Remove data for each descendent of elements in the collection
                this.find('*').off().removeData();
            }

            // Remove elements, text and other nodes
            // This uses native DOM methods, rather than `detach()`, to ensure that
            // non-element nodes are also removed.
            return this.each(function(el){
                while (el.firstChild){
                    el.removeChild(el.firstChild);
                }
            });
        },
        
        /* Arguments:
        `deepDom`: clones descendent DOM elements and DOM event listeners (default true)
        `withData` clones data associated with the element (default false)
        `deepData` clones data associated with descendents of the element (defaults to same as `withData`)
        */
        clone: function(deepDom, withData, deepData){
            var isSingle = this.length === 1;

            if (typeof deepDom !== 'boolean'){
                deepDom = true;
            }
            if (typeof withData !== 'boolean'){
                withData = false;
            }
            if (typeof deepData !== 'boolean'){
                deepData = withData;
            }

            return this.map(function(el){
                var cloned = el.cloneNode(deepDom),
                    data, node, clonedNode, dataset;

                // Clone data associated with the element
                if (withData){
                    // Avoid unnecessary Pablo collection creation
                    node = isSingle ? this : Pablo(el);
                    data = node.cloneData();

                    if (data){
                        // Set data on the cloned element
                        clonedNode = Pablo(cloned).data(data);
                    }
                }

                // Clone descendents' data
                if (deepDom && deepData){
                    if (!clonedNode){
                        clonedNode = Pablo(cloned);
                    }
                    dataset = node.pluck('data');
                    clonedNode.find('*').data(dataset);
                }
                return cloned;
            });
        },
        
        // `deep` is whether to duplicate child nodes
        // `deepData` is whether to duplicate data on self and children
        // TODO: should there be a way of duplicating without adding to the DOM
        //     i.e. to remove the call to `after()` or to return a new collection
        duplicate: function(repeats, withData, deepData){
            var duplicates;

            if (repeats !== 0){
                if (typeof repeats !== 'number' || repeats < 0){
                    repeats = 1;
                }

                // For performance, before cloning data, ensure that the elements 
                // or their descendents have data associated with them
                if (withData){
                    withData = this.hasData();
                }
                if (deepData){
                    deepData = this.find('*').hasData();
                }

                duplicates = Pablo();
                
                // Clone the collection
                while (repeats --){
                    duplicates.add(this.clone(true, withData, deepData));
                }

                // Insert in the DOM after the collection
                this.after(duplicates)
                    // Add new elements the collection
                    .add(duplicates);
            }
            return this;
        },

        getValue: function(value, i){
            if (Array.isArray(value)){
                // If array is shorter than collection, then cycle back to start
                // of array
                i = i % value.length;
                value = value[i];
            }
            else if (typeof value === 'function'){
                value = value.call(this, this[i], i);
            }
            return value;
        },
        
        attr: function(attr, value){
            var el, attributes;

            // Return an object of all attributes on the first element in
            // the collection
            if (typeof attr === 'undefined'){
                return getAttributes(this[0]);
            }

            // Handle a named attribute
            if (typeof attr === 'string'){
                // Get the attribute from the first element in the collection
                if (typeof value === 'undefined'){
                    el = this[0];
                    return el && getAttribute(el, attr);
                }

                // Set the attribute

                // Return, if no elements
                if (!this.length){
                    return this;
                }

                // Set the attribute, if the collection only has one element
                if (this.length === 1){
                    if (value === null){
                        this.removeAttr(attr);
                    }
                    else {
                        setAttribute(this[0], attr, this.getValue(value, 0));
                    }
                    return this;
                }

                attributes = {};
                attributes[attr] = value;
            }

            else {
                attributes = attr;
            }

            return this.each(function(el, i){
                var attr, value;

                for (attr in attributes){
                    if (attributes.hasOwnProperty(attr)){
                        value = attributes[attr];

                        if (value === null){
                            this.removeAttr(attr);
                        }
                        else {
                            setAttribute(el, attr, this.getValue(value, i));
                        }
                    }
                }
            });
        },

        // Return an array of values from each element in the collection
        pluck: function(type, property){
            return toArray(this).map(function(el){
                // Element property
                if (type === 'prop'){
                    return el[property];
                }
                
                // Call method of name `type` and pass property
                // e.g. 'attr', 'data', 'css', 'transform', 'transformCss', 'transition'
                else {
                    return Pablo(el)[type](property);
                }
            });
        },
        
        removeAttr: function(attr) {
            if (this.length === 1){
                removeAttribute(this[0], attr);
            }
            else if (this.length > 1){
                this.each(function(el){
                    removeAttribute(el, attr);
                });
            }
            return this;
        },
        
        content: function(text){
            var el;

            // Get first element's textContent
            if (typeof text === 'undefined'){
                el = this[0];
                return el && el.textContent || '';
            }

            // Set every element's textContent
            return this.each(function(el, i){
                el.textContent = this.getValue(text, i);
            }, this);
        },

        cssPrefix: function(){
            throw 'cssPrefix() deprecated. Use css() instead.';
        },

        css: (function(){
            var resolvedTransition = resolveCssProperty('transition'),
                resolvedTransitionProperty = resolveCssProperty('transition-property'),
                // Regex matches 'opacity' & 'transform' in, e.g.
                // 'opacity, transform 1s ease-in'
                propertiesRegex = /(^\s*|\s*,\s*)(-?[a-z][a-z0-9_\-]*)+/ig,
                transitionKeywords = ['all', 'none', 'initial'];

            function prefixTransitionProperties(transitionValue){
                var ret = '',
                    lastIndex = 0,
                    matches = propertiesRegex.exec(transitionValue),
                    prop, resolvedProp, separator;

                while(matches){
                    separator = matches[1];
                    prop = matches[2];
                    resolvedProp = null;

                    // Transition property keyword used
                    if (transitionKeywords.indexOf(prop) !== -1){
                        resolvedProp = prop;
                    }
                    else {
                        resolvedProp = resolveCssProperty(prop, true);
                    }
                    ret += transitionValue.slice(lastIndex, matches.index);

                    if (resolvedProp){
                        ret += separator + resolvedProp;
                    }

                    lastIndex = propertiesRegex.lastIndex;
                    matches = propertiesRegex.exec(transitionValue);
                }
                ret += transitionValue.slice(lastIndex);
                return ret;
            }

            // Adapt properties for vendor-prefixed variations
            // Remove invalid properties
            // TODO: Should each type of element have its own style dictionary?
            function verifyStyles(styles){
                var prop, resolvedProp;

                for (prop in styles){
                    if (styles.hasOwnProperty(prop)){
                        resolvedProp = resolveCssProperty(prop);

                        if (prop !== resolvedProp){
                            if (resolvedProp){
                                styles[resolvedProp] = styles[prop];
                            }
                            delete styles[prop];
                        }
                    }
                }
            }

            return function(styles, value){
                var el, styleObj, styleProperty, resolvedProp;

                if (typeof styles !== 'object'){
                    if (typeof value === 'undefined'){
                        el = this[0];
                        styleObj = el && el.style;

                        // No parameters; get all styles
                        if (!styles){
                            return styleObj || {};
                        }

                        // Get named style
                        resolvedProp = styleObj && resolveCssProperty(styles);
                        return resolvedProp && styleObj[resolvedProp];
                        // or document.defaultView.getComputedStyle(el, null).getPropertyValue(styles);
                    }

                    // Set named value
                    // Create styles object
                    styleProperty = styles;
                    styles = {};
                    styles[styleProperty] = value;
                }

                verifyStyles(styles);

                // No styles left after invalid properties removed, exit
                if (!Object.keys(styles).length){
                    return this;
                }

                return this.each(function(el, i){
                    var styleObj = el.style,
                        prop, value;
                    
                    for (prop in styles){
                        if (styles.hasOwnProperty(prop)){
                            value = this.getValue(styles[prop], i);

                            if (prop === resolvedTransition || prop === resolvedTransitionProperty){
                                value = prefixTransitionProperties(value);
                            }
                            styleObj[prop] = value;
                        }
                    }
                }, this);
            };
        }()),


        // ANIMATION
        stagger: (function(){
            function Options(options){
                extend(this, options);
            }
            extend(Options.prototype, {
                t: 1000,
                defer: false,
                repeat: 1, // TODO: also rename duplicate() arg to `repeat`?
                autostart: true,
                autodestroy: true,
                order: 'asc',
                bounce: false
            });

            function Controller(collection, iterator, options){
                this.collection = collection;
                this.iterator = iterator;
                this.event = Pablo();
                this.options = new Options(options);
                this.reset();

                if (this.options.autostart){
                    this.start();
                }
            }

            extend(Controller.prototype, {
                constructor: Controller,
                active: false,
                lastIndex: -1,

                resetLoop: function(){
                    var order = this.options.order;

                    if (order === 'asc'){
                        this.i = 0;
                    }
                    else if (order === 'desc'){
                        this.i = this.collection.length-1;
                    }
                    this.trigger('loopreset');
                    return this;
                },

                reset: function(){
                    this.remaining = this.options.repeat;
                    this.resetLoop();
                    this.trigger('reset');
                    return this;
                },

                setTimeout: function(t){
                    var ctrl = this;

                    if (typeof t !== 'number'){
                        t = this.collection.getValue(this.options.t, this.i);
                    }

                    this.ref = setTimeout(function(){
                        ctrl.next();
                    }, t);

                    return this;
                },

                next: function(){
                    var order, isComplete;

                    this.iteration();

                    order = this.options.order;
                    this.lastIndex = this.i;

                    if (order === 'asc'){
                        this.i ++;
                        isComplete = this.i === this.collection.length;
                    }
                    else if (order === 'desc'){
                        this.i --;
                        isComplete = this.i < 0;
                    }

                    if (isComplete){
                        this.end();
                        this.remaining --;

                        if (this.remaining){
                            this.begin(true);
                        }
                        else {
                            if (this.options.autodestroy){
                                this.destroy();
                            }
                            else {
                                this.complete();
                            }
                        }
                    }
                    else {
                        this.setTimeout();
                    }
                    return this;
                },

                iteration: function(){
                    var collection = this.collection,
                        i = this.i,
                        current  = collection[i],
                        previous = collection[this.lastIndex];

                    this.iterator.call(collection, current, previous, i, this.lastIndex);
                    this.trigger('iteration', collection, current, previous, i, this.lastIndex);
                    return this;
                },

                // Start (or unpause) the animation
                start: function(){
                    var ctrl;

                    if (!this.active && this.collection.length){
                        ctrl = this;
                        this.active = true;

                        this.ref = setTimeout(function(){
                            // Make 'start' asynchronous, to allow binding to 
                            // 'start' event and chaining of methods before start
                            ctrl.trigger('start');
                            ctrl.begin(ctrl.options.defer);
                        }, 4);
                    }
                    return this;
                },

                // Stop (or pause) the animation
                stop: function(){
                    if (this.active){
                        this.active = false;
                        clearTimeout(this.ref);
                        this.trigger('stop');
                    }
                    return this;
                },

                toggle: function(){
                    return this.active ?
                        this.stop() : this.start();
                },

                // Begin the loop
                begin: function(defer){
                    this.trigger('begin');
                    if (defer){
                        // TODO: should 'begin' event fire just before step, after the timeout?
                        this.setTimeout();
                    }
                    else {
                        this.next();
                    }
                    return this;
                },

                end: function(){
                    this.trigger('end');

                    if (this.options.bounce){
                        if (this.options.order === 'asc'){
                            this.options.order = 'desc';
                        }
                        else if (this.options.order === 'desc'){
                            this.options.order = 'asc';
                        }
                    }
                    this.resetLoop();
                    return this;
                },

                // Complete the loop
                complete: function(){
                    if (this.active){
                        this.trigger('complete');
                        this.stop();
                        this.reset();
                    }
                    return this;
                },

                destroy: function(){
                    var prop,
                        options = this.options;

                    // if not already destroyed
                    if (this.event){
                        this.trigger('destroy');
                        this.stop();
                        this.off();

                        for (prop in options){
                            if (options.hasOwnProperty(prop)){
                                delete options[prop];
                            }
                        }

                        for (prop in this){
                            if (this.hasOwnProperty(prop)){
                                delete this[prop];
                            }
                        }
                    }

                    return this;
                }
            });

            // TEMP: will not be needed when a plain object can be 
            // extended with Pablo.Event
            ['on', 'one', 'oneEach', 'off', 'trigger'].forEach(function(method){
                Controller.prototype[method] = function(){
                    this.event[method].apply(this.event, arguments);
                    return this;
                };
            });

            return extend(
                function(iterator, options){
                    return new Controller(this, iterator, options);
                },
                {
                    fn: Controller.prototype
                }
            );
        }()),


        // AJAX
        // Load SVG or HTML via Ajax and replace collection contents with it
        load: function(url, callback, replace){
            var collection = this;

            if (this.length){
                Pablo.load(url, function(xhr){
                    if (this.length){
                        if (replace){
                            collection.empty();
                        }
                        collection.append(this);
                    }

                    if (callback){
                        callback.call(collection, this, xhr);
                    }
                });
            }
            return this;
        },

        withViewport: function(){
            var svg;

            // If this is already a single <svg> element
            if (this.length === 1 && this[0].nodeName === 'svg'){
                svg = this;
            }
            else {
                // Append to a new <svg> element
                svg = Pablo.svg().append(this).crop();
            }

            return svg;
        },

        // Get bounding box of all elements in collection
        bbox: function(){
            var allInDocument = this.isInDocument(),
                total, svg;

            if (!this.length){
                return {x:0, y:0, width:0, height:0};
            }

            // All elements in the collection are in the DOM
            if (allInDocument){
                if (this.length === 1){
                    total = this[0].getBBox();
                }

                else {
                    total = this.reduce(function(bbox, el){
                        var elBbox = el.getBBox();

                        if (elBbox.x < bbox.x){
                            bbox.x = elBbox.x;
                        }
                        if (elBbox.y < bbox.y){
                            bbox.y = elBbox.y;
                        }
                        if (elBbox.x + elBbox.width > bbox.width){
                            bbox.width = elBbox.x + elBbox.width;
                        }
                        if (elBbox.y + elBbox.height > bbox.height){
                            bbox.height = elBbox.y + elBbox.height;
                        }
                        return bbox;
                    }, {x:Infinity, y:Infinity, width:0, height:0});
                }
            }

            // Not all in the DOM
            else {
                if (this.length === 1 && this[0].nodeName === 'svg'){
                    this.appendTo(document.body);
                    total = this.bbox();
                    this.detach();
                }
                else {
                    svg = Pablo.svg()
                            .append(this.clone())
                            .appendTo(document.body);

                    total = svg.children().bbox();
                    svg.detach();
                }
            }
            return total;
        },

        viewbox: function(values){
            var viewbox;

            if (values){
                this.attr('viewBox', values.join(' '));
                return this;
            }

            viewbox = this.attr('viewBox');

            if (viewbox){
                values = viewbox.split(' ').map(function(value){
                    return Number(value);
                });
                return values;
            }
            return [0, 0, 0, 0];
        },

        crop: function(to){
            if (to && canBeWrapped(to)){
                to = toPablo(to);
            }

            return this.each(function(el){
                var node, bbox;

                // This is an <svg> element
                if (el.nodeName === 'svg'){
                    node = Pablo(el);

                    // optional `to` passed
                    if (to){
                        // e.g. crop(circles)
                        if (isPablo(to)){
                            // get bbox of the collection
                            bbox = Pablo.svg()
                                        .append(to.clone())
                                        .bbox();
                        }
                        // e.g. crop({x:-10,y:50,width:100, height:100})
                        else {
                            // a bbox object
                            bbox = to;
                        }
                    }

                    // e.g. crop()
                    else {
                        // get bbox of the <svg> element
                        bbox = node.bbox();
                    }

                    // HACK for Safari 6.0.5
                    // If <svg> element is already in the DOM, the width &
                    // height change is not correctly rendered
                    node.removeAttr('width').removeAttr('height');
                    // end HACK for Safari 6.0.5

                    // Apply dimension attributes to the <svg> element
                    node.attr({
                        width:   bbox.width,
                        height:  bbox.height,
                        viewBox: bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height
                    });
                }
            });
        },

        markup: (function(){
            var xmlSerializer;

            return function(asCompleteFile){
                var collection = this,
                    markup;

                if (!xmlSerializer){
                    xmlSerializer = new XMLSerializer();
                }

                if (asCompleteFile){
                    collection = this.clone().withViewport();
                }

                markup = '';
                collection.each(function(el){
                    markup += xmlSerializer.serializeToString(el);
                });
                return markup;
            };
        }()),

        toString: function(){
            return this.markup();
        }
    });


    /////


    // TRANSFORMS & TRANSITIONS

    (function(){
        var noop = function(){return this;};

        support.css = extend(support.css, {
            transform:  typeof resolveCssProperty('transform')  !== 'undefined',
            transition: typeof resolveCssProperty('transition') !== 'undefined'
        });


        /////


        (function(){
            var commaOrSpace = /(?:\s*,|\s)\s*/;

            function getItems(list, itemRegex, valueSeparator){
                var matches = itemRegex.exec(list),
                    ret = {},
                    name, value;

                while (matches && matches[1]){
                    name = matches[1];
                    value = matches[2];
                    ret[name] = numericToNumber(value.split(valueSeparator));
                    matches = itemRegex.exec(list);
                }
                itemRegex.lastIndex = 0;
                return ret;
            }

            function getOrderedItems(list, itemRegex, valueSeparator){
                var matches = itemRegex.exec(list),
                    ret = [],
                    name, value, item;

                while (matches && matches[1]){
                    name = matches[1];
                    value = matches[2];
                    item = {};
                    item[name] = numericToNumber(value.split(valueSeparator));
                    ret.push(item);
                    matches = itemRegex.exec(list);
                }
                itemRegex.lastIndex = 0;
                return ret;
            }

            function getItemValue(list, itemName, regexGenerator){
                var match = regexGenerator(itemName).exec(list),
                    value;

                if (match && match[2]){
                    value = numericToNumber(match[2].split(commaOrSpace));
                }
                return value;
            }

            function mergeItemsWithList(collection, i, list, items, regexGenerator, stringifyValues, suffix, suffixRegex, preProcess){
                var prop, item, value, isEmpty, itemRegex;

                if (!suffix){
                    suffix = '';
                }

                if (Array.isArray(items)){
                    items.forEach(function(item){
                        list = mergeItemsWithList(collection, i, list, item, regexGenerator, stringifyValues, suffix, suffixRegex);
                    });
                    return list;
                }

                if (preProcess){
                    items = preProcess(items);
                }

                for (prop in items){
                    if (items.hasOwnProperty(prop)){
                        value = items[prop];

                        // Get per-element value
                        if (typeof value === 'function' || (Array.isArray(value) && value.some(Array.isArray))){
                            value = collection.getValue(value, i);
                        }

                        isEmpty = value === null || value === '';
                        item = isEmpty ? '' : prop + stringifyValues(value) + suffix;

                        if (!list){
                            list = item;
                        }
                        else {
                            if (list.indexOf(prop) === -1){
                                if (suffixRegex){
                                    if (list && suffix && suffixRegex.test(list)){
                                        list += suffix;
                                    }
                                }
                                list += item;
                            }
                            else {
                                itemRegex = regexGenerator(prop);
                                list = list.replace(itemRegex, item);
                            }
                        }
                    }
                }
                // Remove trailing slash
                if (list && suffix){
                    if (list.lastIndexOf(',') === list.length-1){
                        list = list.slice(0,-1);
                    }
                }
                return list;
            }


            /////


            // TRANSFORMS

            (function(){
                var itemRegex;

                // e.g. regexGenerator('rotate');
                function regexGenerator(name){
                    return new RegExp('\\b(' + name + ')\\(([^)]*)\\)', 'g');
                }
                itemRegex = regexGenerator('[\\w-]*');

                function stringifyValues(value){
                    return '(' + (Array.isArray(value) ?
                                value.join(',') : value) + ')';
                }

                function merge(collection, i, list, transforms){
                    return mergeItemsWithList(collection, i, list, transforms, regexGenerator, stringifyValues, '', null, null);
                }

                function createTransformFunction(domMethod){
                    var getList = function(collection, settings){
                            return collection[domMethod]('transform', settings);
                        },
                        setList = getList;

                    return function(transforms, value, values){
                        var list, name, isSingle;

                        // For an empty collection, return an empty object if no arguments
                        // were passed, otherwise return the collection
                        if (!this.length){
                            return typeof transforms === 'undefined' ?
                                {} : this;
                        }

                        isSingle = this.length === 1;

                        // An array of transforms creates a new transform list in sequence
                        if (Array.isArray(transforms)){
                            return this.each(function(el, i){
                                var node = isSingle ? this : Pablo(el),
                                    list = merge(node, i, '', transforms);

                                // Set 'transform' css property or attribute
                                setList(this, list);
                            });
                        }

                        // `null` removes all transforms
                        else if (transforms === null){
                            // Set 'transform' css property or attribute
                            return setList(this, null);
                        }

                        // If `true` passed, return an ordered array of existing transforms
                        else if (typeof transforms === 'undefined' || transforms === true){
                            // Get 'transform' css property or attribute
                            list = getList(this);

                            // If `true` passed, return an ordered array of existing transforms
                            if (transforms){
                                return getOrderedItems(list, itemRegex, commaOrSpace);
                            }

                            // If no arguments passed, return an object of existing transforms
                            return getItems(list, itemRegex, commaOrSpace);
                        }

                        // Named transform passed
                        if (typeof transforms === 'string'){
                            // First argument is the full string value for the transform
                            if (arguments.length === 1 && transforms.indexOf(')') !== -1){
                                return setList(this, transforms);
                            }

                            // First argument is the transform name
                            name = transforms;

                            // No value passed, so return a specific transform's value
                            if (typeof value === 'undefined'){
                                list = getList(this);
                                return getItemValue(list, name, regexGenerator);
                            }

                            // Multiple values passed
                            if (arguments.length > 2){
                                value = toArray(arguments).slice(1);
                            }

                            // Set a specific transform
                            transforms = {};
                            transforms[name] = value;
                        }

                        // Transform object
                        if (typeof transforms === 'object'){
                            isSingle = this.length === 1;

                            this.each(function(el, i){
                                var node = isSingle ? this : Pablo(el),
                                    list = getList(node);

                                // Update existing transforms, or add new ones
                                list = merge(node, i, list, transforms);

                                // Set 'transform' css property or attribute
                                setList(node, list);
                            });
                        }

                        return this;
                    };
                }

                /////

                // Create collection.transform()

                // e.g. transform({rotate:45, translate:null}, true);
                // e.g. transform([{rotate:45}, {translate:'10px'}], true);
                pabloCollectionApi.transform = createTransformFunction('attr');

                // Create collection.transformCss()
                pabloCollectionApi.transformCss = support.css.transform ?
                    createTransformFunction('css') : noop;
            }());


            /////


            // TRANSITIONS

            if (support.css.transition){
                pabloCollectionApi.transition = (function(){
                    var itemRegex, transitionSuffixRegex,
                        TRANSITION_PROPERTY = resolveCssProperty('transition'),
                        // Inspired by Modernizr
                        TRANSITION_END = {
                            transition:       'transitionend',
                            otransition:      'oTransitionEnd',
                            moztransition:    'transitionend',
                            webkittransition: 'webkitTransitionEnd'
                        }[TRANSITION_PROPERTY.toLowerCase()],

                        getList = function(collection, settings){
                            return collection.css('transition', settings);
                        },
                        setList = getList,
                        hasValueRegex = /\w\s+\w/;


                    // e.g. regexGenerator('opacity');
                    function regexGenerator(name){
                        return new RegExp(
                            // A preceding comma and/or whitespace
                            '(?=,?)\\s*' +
                            // The CSS property name, followed by whitespace
                            '(' + name + ')\\s*' +
                            // A simple value or with brackets, e.g. '1s cubic-bezier()'
                            '(([^,(]*(?:\\([^)]*)?[^,(]*))' +
                            // A trailing comma or the end of the string
                            '(?:,\\s*|$)', 'g');
                    }

                    itemRegex = regexGenerator('[\\w-]*');

                    // Convert `value` string, number or array to 'value value value'
                    function stringifyValues(value){
                        // `dur` and `delay`
                        if (typeof value === 'number'){
                            value = value + 'ms';
                        }
                        else if (Array.isArray(value)){
                            value = value.map(function(value){
                                return stringifyValues(value);
                            }).join('');
                        }
                        return value ? ' ' + value : '';
                    }

                    function updateStyle(collection, name, value){
                        if (name === 'transform'){
                            // Pass the string value or object or array of objects to `transformCss()`
                            collection.transformCss(value);
                        }
                        else {
                            collection.css(name, value);
                        }
                    }

                    function resolveNames(transitions){
                        var ret = {},
                            resolvedName,
                            name;

                        for (name in transitions){
                            if (transitions.hasOwnProperty(name)){
                                resolvedName = resolveCssProperty(name, true);
                                ret[resolvedName] = transitions[name];
                            }
                        }
                        return ret;
                    }

                    transitionSuffixRegex = new RegExp('\\w[^,]*$');
                    function merge(collection, i, list, transitions){
                        return mergeItemsWithList(collection, i, list, transitions, regexGenerator, stringifyValues, ',', transitionSuffixRegex, resolveNames);
                    }

                    function getTransformValue(collection, value, i){
                        if (Array.isArray(value) && !Array.isArray(value[0])){
                            return value;
                        }
                        return collection.getValue(value, i);
                    }

                    function processFromOption(collection, i, name, options){
                        // Cache the current transition value
                        var cachedTransition = collection.transition(name),
                            from = name === 'transform' ?
                                getTransformValue(collection, options.from, i) :
                                collection.getValue(options.from, i),
                            transition, asyncOptions;

                        // Remove the current transition value
                        collection.transition(name, null);

                        // Set the CSS value of the property
                        updateStyle(collection, name, from);

                        // Create a 'remove' transition object, to remove the property from
                        // the transition list
                        transition = {};
                        transition[name] = null;

                        // Duplicate the options object (in case the original is re-used by the calling function)
                        asyncOptions = extend({}, options);
                        // Remove the `from` option
                        delete asyncOptions.from;
                        // Indicate that `to` does not need to create a `setTimeout`
                        asyncOptions.sync = true;

                        // Continue processing asynchronously, after a delay
                        window.setTimeout(function(){
                            // Reinstate previous transition value
                            if (cachedTransition){
                                collection.transition(name, cachedTransition);
                            }
                            // Merge options into the transition value
                            collection.transition(asyncOptions);
                        }, 4);

                        return transition;
                    }

                    function processOtherOptions(collection, i, name, options){
                        var transition, callback, values, to;

                        if ('to' in options){
                            to = name === 'transform' ?
                                getTransformValue(collection, options.to, i) :
                                collection.getValue(options.to, i);

                            // The CSS property is known to exist, so the transition will
                            // render
                            if (options.sync){
                                updateStyle(collection, name, to);
                            }

                            // It is unknown if the CSS property already exists on every
                            // element (and it would be expensive to determine this), so 
                            // set a timeout after the transition is applied to ensure it
                            // renders 
                            else {
                                window.setTimeout(function(){
                                    updateStyle(collection, name, to);
                                }, 4);
                            }
                        }

                        if ('end' in options){
                            callback = options.end;
                            collection.on(TRANSITION_END, function end(event){
                                name = resolveCssProperty(name, true);

                                if (event.propertyName === name){
                                    if (options.autoremove !== false){
                                        collection.off(TRANSITION_END, end);
                                    }
                                    callback.call(collection, event);
                                }
                            });
                        }

                        // Values to be added to the element's 'transition' CSS style
                        values = [];

                        if ('dur' in options){
                            values.push(collection.getValue(options.dur, i));
                        }
                        if ('timing' in options){
                            values.push(collection.getValue(options.timing, i));
                        }
                        if ('delay' in options){
                            values.push(collection.getValue(options.delay, i));
                        }

                        transition = {};
                        transition[name] = values;
                        return transition;
                    }

                    function processOptions(collection, i, list, options){
                        var transition, name;

                        if ('name' in options){
                            name = options.name;

                            // Options that aren't added to the element's 'transition' CSS style
                            if ('from' in options){
                                transition = processFromOption(collection, i, name, options);
                            }
                            else {
                                transition = processOtherOptions(collection, i, name, options);
                            }
                        }

                        else {
                            transition = options;
                        }

                        return merge(collection, i, list, transition);
                    }


                    //////////////////////


                    return function(transitions, value, values){
                        var list, name, match, isSingle;
                        
                        // For an empty collection, return an empty object if no arguments
                        // were passed, otherwise return the collection
                        if (!this.length){
                            return typeof transitions === 'undefined' ?
                                {} : this;
                        }

                        isSingle = this.length === 1;

                        // An array of transitions creates a new transition list in sequence
                        if (Array.isArray(transitions)){
                            return this.each(function(el, i){
                                var node = isSingle ? this : Pablo(el),
                                    list = transitions.map(function(options, i){
                                        return processOptions(node, i, list, options);
                                    }).join(',');

                                // Set 'transition' css property or attribute
                                setList(this, list);
                            });
                        }

                        // `null` removes all transitions
                        else if (transitions === null){
                            // Set 'transition' css property or attribute
                            return setList(this, '');
                        }

                        // If `true` passed, return an ordered array of existing transitions
                        else if (typeof transitions === 'undefined' || transitions === true){
                            // Get 'transition' css property
                            list = getList(this);

                            // If `true` passed, return an ordered array of existing transitions
                            if (transitions){
                                return getOrderedItems(list, itemRegex, commaOrSpace);
                            }

                            // If no arguments passed, return an object of existing transitions
                            return getItems(list, itemRegex, commaOrSpace);
                        }

                        // Named transition passed
                        if (typeof transitions === 'string'){
                            // First argument is the full string value for the transition
                            if (arguments.length === 1 && hasValueRegex.test(transitions)){
                                return setList(this, transitions);
                            }

                            // First argument is the transition name
                            name = transitions;

                            // No value passed, so return a specific transition's value
                            if (typeof value === 'undefined'){
                                list = getList(this);
                                return getItemValue(list, name, regexGenerator);
                            }

                            // Multiple values passed
                            else if (arguments.length > 2){
                                value = toArray(arguments).slice(1);
                            }

                            // An object of options
                            // Add the name to the options
                            if (isPlainObject(value)){
                                transitions = extend({name:name}, value);
                            }

                            else {
                                // Set a specific transition
                                transitions = {};
                                transitions[name] = value;
                            }
                        }

                        // Transition object
                        if (typeof transitions === 'object'){
                            this.each(function(el, i){
                                var node = isSingle ? this : Pablo(el),
                                    list = getList(node);

                                // Update existing transitions, or add new ones
                                list = processOptions(node, i, list, transitions);

                                // Set 'transform' css property
                                setList(node, list);
                            });
                        }

                        return this;
                    };
                }());   
            }

            else {
                pabloCollectionApi.transition = noop;
            }
        }());
    }());


    /////


    // CONVERSION

    (function(){
        function errorObj(){
            return {error:true};
        }

        extend(pabloCollectionApi, {
            dataUrl: support.dataUrl ?
                function(type, callback, asFragment){
                    var collection = this,
                        asCompleteFile, markup, data, dataUrl;

                    if (!callback && typeof type === 'function'){
                        asFragment = callback;
                        callback = type;
                        type = null;
                    }

                    if (!type || type === 'svg'){
                        asCompleteFile = !asFragment;
                        markup = this.markup(asCompleteFile);

                        // See https://developer.mozilla.org/en-US/docs/Web/API/window.btoa#Unicode_Strings for use of encodeURIComponent and unescape
                        data = btoa(unescape(encodeURIComponent(markup)));
                        dataUrl = svgDataUrlPrefix + data;

                        if (callback){
                            callback.call(collection, dataUrl);
                        }

                        return dataUrl;

                        // Alternative approach:
                        //var blob = new window.Blob([markup], {type:'image/svg+xml'});
                        //return window.URL.createObjectURL(blob);
                    }

                    else {
                        this.toCanvas(function(canvas){
                            var dataUrl;

                            if (!('error' in canvas)){
                                try {
                                    // Access canvas element's native toDataURL() method
                                    dataUrl = canvas[0].toDataURL('image/' + type);
                                }
                                catch(e){}
                            }

                            if (callback){
                                callback.call(collection, dataUrl || null);
                            }
                        });
                    }
                } :

                // Can't generate dataUrl (use a polyfill to enable the dataUrl method in an unsupported browser)
                function(type, callback){
                    if (callback){
                        callback(this, null);
                    }
                    return null;
                },

            // type: 'svg' (default), 'png' or 'jpeg'
            // callback (optional): When the image has loaded, the callback will 
            // be passed a collection containing the image. If the image fails, to load,
            // the callback is passed `null`
            toImage: support.image.svg ?
                function(type, callback){
                    var collection = this,
                        el = document.createElement('img'),
                        img = Pablo(el),
                        bbox = this.bbox();

                    if (!callback && typeof type === 'function'){
                        callback = type;
                        type = null;
                    }

                    this.dataUrl(type, function(dataUrl){
                        if (dataUrl){
                            // If no dimensions, then give the image zero
                            // dimensions.
                            // The bbox() check is made to prevent empty <svg> 
                            // elements creating an image with the browser's
                            // default dimenstions for an empty <svg> element
                            // (seen in Chrome 32, Firefox 24 & Opera 12.16
                            if (bbox.width <= 0 || bbox.height <= 0){
                                // TODO: Currently, the bbox() call is made for 
                                // all types of elements, not just <svg> elements,
                                // as a precaution. If no other elements need this
                                // check, then only call bbox() when the collection
                                // is a <svg> element
                                el.width = el.height = 0;
                            }

                            if (callback){
                                img.one('load', function(){
                                    callback.call(collection, img);
                                });
                            }
                            el.src = dataUrl;
                        }

                        // Error: couldn't create dataUrl
                        else if (callback){
                            callback.call(collection, errorObj());
                        }
                    });

                    return img;
                } :

                function(type, callback){
                    var error = errorObj();

                    if (callback){
                        callback.call(this, error);
                    }
                    return error;
                },

            toCanvas: support.canvas ?
                function(callback, canvas){
                    var collection = this,
                        svgImage, doCanvasResize;

                    if (!canvas && typeof callback === 'object'){
                        canvas = callback;
                        callback = null;
                    }

                    doCanvasResize = !canvas;
                    canvas = toPablo(canvas || document.createElement('canvas'));

                    svgImage = this.toImage('svg', function(img){
                        var width = img[0].width,
                            height = img[0].height,
                            ctx;

                        if (doCanvasResize){
                            canvas.attr({
                                width:  width,
                                height: height
                            });
                        }

                        if (width && height){
                            ctx = canvas[0].getContext('2d');
                            ctx.drawImage(img[0], 0, 0, width, height);
                        }

                        // HACK for Safari 6.0.5 & Opera 12.16
                        svgImage.detach();
                        // end HACK

                        if (callback){
                            callback.call(collection, canvas);
                        }
                    });

                    if (!svgImage[0].complete){
                        // HACK for Safari 6.0.5 & Opera 12.16
                        svgImage.css({
                                visibility: 'hidden',
                                position: 'absolute',
                                top: '-99999px'
                            })
                            .appendTo(document.body);
                        // end HACK
                    }

                    return canvas;
                } :

                function(canvas, callback){
                    var error = errorObj();

                    if (callback){
                        callback.call(this, error);
                    }
                    return error;
                },

            // See http://hackworthy.blogspot.pt/2012/05/savedownload-data-generated-in.html
            // Polyfills:
            // https://github.com/eligrey/Blob.js
            // https://github.com/eligrey/FileSaver.js
            // https://github.com/eligrey/canvas-toBlob.js
            // http://www.nihilogic.dk/labs/canvas2image/
            download: support.download ?
                function(type, filename, callback, asFragment){
                    var collection = this,
                        link = Pablo(document.createElement('a'));

                    if (!type){
                        type = 'svg';
                    }
                    if (!filename){
                        filename = 'pablo.' + (type === 'jpeg' ? 'jpg' : type);
                    }

                    function outerCallback(dataUrl){
                        var event;

                        if (dataUrl){
                            link.attr({
                                href: dataUrl,
                                download: filename
                            });

                            event = document.createEvent('MouseEvents');
                            event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                            link[0].dispatchEvent(event);
                        }

                        if (callback){
                            callback.call(collection, dataUrl ? link : errorObj());
                        }
                    }

                    // An alternative approach to using dataUrl is to create a Blob
                    // blob = new window.Blob([markup], {type:'image/svg+xml'}),
                    // url = window.URL.createObjectURL(blob),
                    this.dataUrl(type, outerCallback, asFragment);
                    return link;
                } :

                function(type, filename, callback){
                    var error = errorObj();

                    if (callback){
                        callback.call(this, error);
                    }
                    return error;
                }
        });
    }());


    /////

    // DATA

    (function(){
        function removeData(el, key){
            var id = el[cacheExpando],
                data;

            // Delete all keys
            if (!key){
                delete cache[id];
            }

            else {
                // Delete a specific key
                data = cache[id];
                if (data){
                    // Delete the key
                    if (Object.keys(data).length > 1){
                        delete cache[id][key];
                    }
                    // The data container is empty, so delete it
                    else {
                        delete cache[id];
                        // Delete the element's data reference
                        // This removal is used by hasData to quickly determine
                        // if the element has associated data
                        delete el[cacheExpando];
                        // TODO: this may make the counter increment faster, where
                        // an element is continually having events added and removed.
                        // It is assumed that JavaScript's integer limit will not
                        // be reached in the lifetime of a program. Is that OK?
                    }
                }
            }
        }

        extend(pabloCollectionApi, {
            data: function(key, value){
                var id, data;

                // First argument is an object of key-value pairs
                if (typeof key === 'object'){
                    data = key;
                }

                // Get value - e.g. collection.data('foo') or collection.data()
                else {
                    if (typeof value === 'undefined'){
                        if (this.length){
                            // Use the id of the first element in the collection
                            id = this[0][cacheExpando];

                            if (id && id in cache){
                                return typeof key === 'undefined' ?
                                    cache[id] : cache[id][key];
                            }
                        }
                        return;
                    }

                    // Set value via (key, value); prepare data object
                    data = {};
                    data[key] = value;
                }

                // If there are no elements in the collection, so the collection
                // is empty, then store a plain object to carry the collection's
                // state. Used, for example, to allow an empty collection to 
                // have events bound and triggered to it.
                //      `var e = Pablo().on('foo', fn); e.trigger('foo');`
                if (!this.length){
                    arrayProto.push.call(this, {});
                }
                
                // Set data for each element
                return this.each(function(el){
                    var id = el[cacheExpando];

                    if (!id){
                        id = el[cacheExpando] = cacheNextId ++;
                    }

                    if (!cache[id]){
                        cache[id] = {};
                    }

                    extend(cache[id], data);
                });
            },

            removeData: function(key){
                return this.each(function(el){
                    // Remove a key from the element's data object
                    if (key){
                        removeData(el, key);
                    }
                    // Remove all data on the element
                    else {
                        removeData(el);
                    }
                });
            },

            hasData: function(deepData, includeSelf){
                return Object.keys(cache).length > 0 &&
                    this.some(function(el){
                        var onThis, onChildren;

                        if (includeSelf !== false){
                            onThis = !!el[cacheExpando];
                        }
                        if (deepData && !onThis){
                            onChildren = Pablo(el).find('*').hasData();
                        }
                        return onThis || onChildren;
                    });
            },

            cloneData: function(){
                var data = this.data(),
                    events, clonedEvents, type;

                if (data){
                    // Copy events object
                    events = data[eventsNamespace];
                    if (events){
                        // Duplicate data object and events object on it, to
                        // de-reference the cloned element's stored events
                        data = extend({}, data);
                        clonedEvents = data[eventsNamespace] = extend({}, events);
                        // For each event type, e.g. `mousedown`, copy the array
                        // of event listeners
                        for (type in events){
                            if (events.hasOwnProperty(type)){
                                // Create new array
                                clonedEvents[type] = events[type].slice();
                            }
                        }
                    }
                }
                return data;
            },

            matches: function(methodName, comparison, context){
                var index, filtered;

                // function
                if (typeof comparison === 'function'){
                    if (!context){
                        context = this;
                    }

                    switch (methodName){
                        case 'indexOf':
                        index = -1;
                        arrayProto.some.call(this, function(el, i){
                            if (comparison.call(context, el, i, this)){
                                index = i;
                                return true;
                            }
                        }, context);
                        return index;

                        case 'select':
                        filtered = Pablo();
                        arrayProto.filter.call(this, function(el, i){
                            if (comparison.call(context, el, i, this)){
                                filtered.add(el);
                            }
                        }, context);
                        return filtered;

                        // 'some' & 'every'
                        default:
                        return arrayProto[methodName].call(this, comparison, context);
                    }
                }

                // CSS selector
                if (typeof comparison === 'string'){
                    return this.matches(methodName, function(el){
                        return el[matchesProp](comparison);
                    });
                }

                else {
                    comparison = toPablo(comparison);
                }

                // `every`, `some` & `indexOf`
                return this.matches(methodName, function(el){
                    return comparison.some(function(compareEl){
                        return el === compareEl;
                    });
                });
            }
        });
    }());


    // EVENTS
    // TODO: refactor on(), etc to allow non-Pablo collections
    Events = {
        on: function(type, selectors, listener, useCapture, context){
            var isSingle, wrapper, eventData;

            // `selectors` argument not given
            if (typeof listener !== 'function' && typeof selectors === 'function'){
                context = useCapture;
                useCapture = listener;
                listener = selectors;
                selectors = null;
            }
            if (typeof useCapture === 'undefined'){
                useCapture = false;
            }

            // Allow binding and triggering events on empty collections
            // Create a container object to store state
            if (!this.length){
                arrayProto.push.call(this, {});
            }

            // `listener` is the original callback function
            // `wrapper` is the function actually applied to the DOM element, and 
            // may modify the original listener, e.g. by changing the `this` object

            // If a `this` object is given, then bind the listener to the required 
            // `this` context
            // TODO: change default context to collection instead of DOM element?
            if (context){
                wrapper = function(){
                    listener.apply(context, arguments);
                };
            }
            else {
                wrapper = listener;
            }

            isSingle = this.length === 1;

            // If there are multiple, space-delimited event types, then cycle 
            // through each one
            return this.processList(type, function(type){
                // Cycle through each element in the collection
                this.each(function(el, i){
                    var node = isSingle ? this : Pablo(el),
                        eventsCache = node.data(eventsNamespace),
                        cache;

                    if (!eventsCache){
                        eventsCache = {};
                        node.data(eventsNamespace, eventsCache);
                    }
                
                    cache = eventsCache[type];
                    if (!cache){
                        cache = eventsCache[type] = [];
                    }

                    // `selectors` have been supplied, to set a delegate event
                    if (selectors){
                        // Overwrite the wrapper to make it check that the event
                        // originated on an element matching the selectors
                        wrapper = function(event){
                            // Call listener if the target matches the selector
                            if (
                                event &&
                                // `event.pablo` is set in trigger() for manual
                                // event triggering. Delegate events do not currently
                                // support manual triggering - e.g. 
                                // delegate = Pablo('g.foo');
                                // targets = delegate.find('circle.bar');
                                // parent.on('click', targets, listener);
                                // targets.trigger('click');
                                !event.pablo &&
                                // TODO: should `context` be passed to `some()`
                                // to be used for selectors functions or is that
                                // mixing up concerns?
                                Pablo(event.target).some(selectors, context)
                            ){
                                listener.apply(context || el, arguments);
                            }
                        };
                    }

                    // Prepare data to cache about the event
                    // With `selectors`, a new eventData object is needed for each element
                    if (selectors || !i){
                        eventData = {
                            selectors:  selectors,
                            listener:   listener,
                            wrapper:    wrapper || listener,
                            useCapture: useCapture
                        };
                    }

                    // Add to cache
                    cache.push(eventData);

                    // Add DOM listener
                    if ('addEventListener' in el){
                        el.addEventListener(type, wrapper || listener, useCapture);
                    }
                });
            });
        },

        off: function(type, selectors, listener, useCapture){
            var isSingle = this.length === 1;

            // `selectors` argument not given
            if (typeof selectors === 'function'){
                useCapture = listener;
                listener = selectors;
                selectors = null;
            }
            if (typeof useCapture === 'undefined'){
                useCapture = false;
            }
            
            // If there are multiple, space-delimited event types, then cycle 
            // through each one
            return this.processList(type, function(type){
                this.each(function(el){
                    var node = isSingle ? this : Pablo(el),
                        eventsCache = node.data(eventsNamespace),
                        cache, cachedType;

                    if (!eventsCache){
                        return;
                    }

                    // Remove all event listeners
                    if (!type){
                        for (cachedType in eventsCache){
                            if (eventsCache.hasOwnProperty(cachedType)){
                                node.off(cachedType);
                            }
                        }
                        return;
                    }

                    cache = eventsCache[type];
                    if (!cache || !cache.length){
                        return;
                    }

                    // Remove DOM listeners and delete from cache. This uses a `some`
                    // loop rather than `forEach` to allow breaking. And it uses
                    // `some` rather than a `for` loop as the cache is a sparse array.
                    cache.some(function(eventData, i){
                        if (
                            // If a listener has been passed, is this it?
                            (listener  === eventData.listener &&
                            useCapture === eventData.useCapture &&
                            selectors  === eventData.selectors) ||

                            // Or if no listener was passed...
                            (!listener && (
                                !selectors || selectors === eventData.selectors
                            )
                        )){
                            // Remove DOM listener
                            if ('removeEventListener' in el){
                                el.removeEventListener(type, eventData.wrapper, eventData.useCapture);
                            }

                            // If looking for a specific listener, remove from cache
                            // and break the loop. NOTE: if the listener was set 
                            // multiple times, it will need removal multiple times.
                            if (listener){
                                delete cache[i];
                                return true;
                            }
                        }
                    });

                    // Delete the cache container for this event type, if empty
                    if (!listener || !Object.keys(eventsCache[type]).length){
                        delete eventsCache[type];
                    }
                    // Delete the events container for this element, if empty
                    if (!Object.keys(eventsCache).length){
                        node.removeData(eventsNamespace); 
                    }
                });
            });
        },

        // Trigger listener once per collection
        one: function(type, selectors, listener, useCapture, context){
            var collection = this;

            // `selectors` argument not given
            if (typeof selectors === 'function'){
                context = useCapture;
                useCapture = listener;
                listener = selectors;
                selectors = null;
            }

            function removeListener(){
                // Remove listener and additional listener
                collection.off(type, selectors, listener,       useCapture, context)
                          .off(type, selectors, removeListener, useCapture, context);
            }

            // Add the original listener, and an additional listener that removes
            // the first, and itself. The reason a single wrapper is not used
            // instead of two separate listeners is to allow manual removal of
            // the original listener (with `.off()`) before it ever triggers.
            return this.on(type, selectors, listener,       useCapture, context)
                       .on(type, selectors, removeListener, useCapture, context);
        },

        // Trigger listener once per element in the collection
        oneEach: function(){
            var args = arguments,
                isSingle = this.length === 1;

            return this.each(function(el){
                // Avoid unnecessary Pablo collection creation
                var node = isSingle ? this : Pablo(el);
                node.one.apply(node, args);
            });
        },

        // TODO: optional `context` as second argument?
        trigger: (function(){
            function processTrigger(node, type, args){
                // Use Pablo.fn.data.call to support non-Pablo collections
                var eventsCache = Pablo.fn.data.call(node, eventsNamespace),
                    el = node[0] || node;

                if (eventsCache){
                    // If there are multiple, space-delimited event types, then cycle 
                    // through each one
                    node.processList(type, function(type){
                        var cache = eventsCache[type];

                        if (cache){
                            args[0] = {
                                // `pablo` flag is used by `on()` wrapper
                                pablo: true,
                                type: type,
                                target: el
                            };
                            cache.forEach(function(eventData){
                                eventData.wrapper.apply(el, args);
                            });
                        }
                    });
                }
            }

            return function(type /*, arbitrary args to pass to listener*/){
                var args = toArray(arguments);

                return this.processList(type, function(type){
                    if (typeof this.length === 'undefined' || this.length === 1){
                        processTrigger(this, type, args);
                    }
                    else if (this.length > 1) {
                        // Use forEach instead of each, to also support arrays
                        this.forEach(function(el){
                            processTrigger(Pablo(el), type, args);
                        });
                    }
                });
            };
        }()),
        
        processList: function(item, fn){
            var collection = this;

            // Multiple items
            if (item && item.indexOf(' ') > 0){
                item.split(' ').forEach(function(item){
                    collection.processList(item, fn);
                });
            }
            // Single item
            else {
                fn.call(this, item);
            }
            return this;
        }
    };

    extend(pabloCollectionApi, Events);


    /////


    // API SHORTCUTS
        
    // iterator e.g. `function(el, insertEl){el.appendChild(insertEl);}`
    // `insertIntoThis` is boolean flag (default true) - if true, will insert 
    // subject elements into the collection
    function insert(iterator, insertIntoThis, returnThis){
        return function(node, attr, withData, deepData){
            var insertInto, toInsert, createdHere;

            if (this.length){
                if (insertIntoThis === false){
                    insertInto = toPablo(node, attr);
                    toInsert = this;
                }
                else {
                    insertInto = this;
                    toInsert = toPablo(node, attr);
                }

                insertInto.each(function(el, i){
                    // If there are multiple elements being inserted into, e.g.
                    //     Pablo(['g','a']).append(Pablo.g());
                    // then clone the elements to be inserted. If the elements
                    // were created by this function, via `toPablo` then clone shallow
                    if (i){
                        createdHere = typeof node === 'string' && !canBeWrapped(attr);
                        toInsert = createdHere ?
                            toInsert.clone(false) :
                            toInsert.clone(true, withData, deepData);
                    }

                    toInsert.each(function(insertEl){
                        iterator.call(insertInto, el, insertEl);
                    });
                });
            }
            return returnThis === false ? toInsert : this;
        };
    }

    function append(el, insertEl){
        el.appendChild(insertEl);
    }

    function prepend(el, insertEl){
        el.insertBefore(insertEl, el.firstChild);
    }

    function before(el, toInsert){
        if (el.parentNode){
            el.parentNode.insertBefore(toInsert, el);
        }
    }

    function after(el, toInsert){
        if (el.parentNode){
            el.parentNode.insertBefore(toInsert, el.nextSibling);
        }
    }

    function traverse(prop, doWhile){
        return function(selectors){
            return this.traverse(prop, doWhile, selectors);
        };
    }

    function matches(methodName){
        return function(comparison, context){
            return this.matches(methodName, comparison, context);
        };
    }

    extend(pabloCollectionApi, {
        // ARRAY-LIKE QUERY
        indexOf: matches('indexOf'),
        some: matches('some'),
        every: matches('every'),
        select: matches('select'),
        // Note: `select()` is analogous to Array.filter but is called `select`
        // here (as in Underscore.js) because Pablo's filter() method is used to
        // create a `<filter>` SVG element.


        // INSERTION
        child:        insert(append, true, false),
        append:       insert(append),
        appendTo:     insert(append, false),
        prepend:      insert(prepend),
        prependTo:    insert(prepend, false),
        before:       insert(before),
        insertBefore: insert(before, false),
        after:        insert(after),
        insertAfter:  insert(after, false),


        // TRAVERSAL
        // NOTE on svgElement.children: ideally, we'd use the 'children'
        // collection, instead of 'childNodes'. Even if a browser implements 
        // 'children' on HTML elements, it isn't always implemented on SVG elements
        // See https://hacks.mozilla.org/2009/06/dom-traversal/
        // Bug report in WebKit: https://bugs.webkit.org/show_bug.cgi?id=112698
        children:     traverse('childNodes'),
        firstChild:   traverse('firstElementChild'),
        lastChild:    traverse('lastElementChild'),
        prev:         traverse('previousElementSibling'),
        prevSiblings: traverse('previousElementSibling', true),
        next:         traverse('nextElementSibling'),
        nextSiblings: traverse('nextElementSibling', true),
        parent:       traverse('parentNode'),
        parents:      traverse('parentNode', isElement),
        parentsSvg:   traverse('parentNode', isSVGElement),
        viewport:     traverse('viewportElement'),
        viewports:    traverse('viewportElement', true),

        owner: function(selectors){
            // Use try/catch as Firefox 23 throws error on attempting to access the 
            // `ownerSVGElement` of an element out of the DOM
            // https://bugzilla.mozilla.org/show_bug.cgi?id=912311
            try {
                return this.traverse('ownerSVGElement', false, selectors);
            }
            catch(e){
                return Pablo();
            }
        },

        owners: function(selectors){
            // Use try/catch as Firefox 23 throws error on attempting to access the 
            // `ownerSVGElement` of an element out of the DOM
            // https://bugzilla.mozilla.org/show_bug.cgi?id=912311
            try {
                return this.traverse('ownerSVGElement', true, selectors);
            }
            catch(e){
                return Pablo();
            }
        },

        ancestor: function(){
            return this.traverse('parentNode', isElementOrDocument).last();
        },

        // Find each element's SVG root element
        root: function(selectors){
            return this.map(function(el){
                var node = this.length === 1 ?
                    this : Pablo(el);
                return node.owners(selectors).last();
            });
        },

        siblings: function(selectors){
            return this.prevSiblings(selectors)
                       .add(this.nextSiblings(selectors));
        },

        find: function(selectors){
            return this.map(function(el){
                return el.querySelectorAll(selectors);
            });
        }
    });


    /////


    // CHECK CONDITION

    function checkCondition(fn, passCollection){
        return function(any){
            if (this.length === 1){
                return fn(passCollection ? this : this[0]);
            }
            else {
                return any ? this.some(fn) : this.every(fn);
            }
        };
    }

    extend(pabloCollectionApi, {
        isInDocument: checkCondition(function(node){
            return toPablo(node).parents(document.body).length === 1;
        }, true),

        isRoot: checkCondition(function isRoot(el){
            return el.nodeName === 'svg' && !el.ownerSVGElement;
        }),

        hasSvgNamespace: checkCondition(function(el){
            return hasSvgNamespace(el);
        })
    });


    /////


    // ALIASES

    extend(pabloCollectionApi, {
        elements: pabloCollectionApi.toArray,
        push:     pabloCollectionApi.add,
        forEach:  pabloCollectionApi.each,
        is: pabloCollectionApi.some,
        lastIndexOf: pabloCollectionApi.indexOf
    });


    /////

    
    // CSS CLASSES

    // Supports space-delimited multiple classNames, as well as attribute values
    // and function values
    if (support.classList){
        classlistMethod = function(method){
            return function(className){
                return this.each(function(el, i){
                    var value = this.getValue(className, i);
                    this.processList(value, function(className){
                        el.classList[method](className);
                    });
                }, this);
            };
        };

        // Browser supports native classLists in SVG, e.g. Firefox
        cssClassApi = {
            // Return true if _any_ element has className
            hasClass: function(className){
                return this.some(function(el, i){
                    var value = this.getValue(className, i);
                    return el.classList.contains(value);
                }, this);
            },
            addClass: classlistMethod('add'),
            removeClass: classlistMethod('remove'),
            toggleClass: classlistMethod('toggle')
        };
    }

    // Browser doesn't support native classLists in SVG, e.g. IE9, Chrome 21
    else {
        cssClassApi = {
            // Return true if _any_ element has className
            hasClass: function(className){
                return this.some(function(el, i){
                    // Avoid unnecessary Pablo collection creation
                    var value = this.getValue(className, i),
                        classString = getAttribute(el, 'class');

                    return classString && (' ' + classString + ' ')
                        .indexOf(' ' + value + ' ') !== -1;
                }, this);
            },

            addClass: function(className){
                var isSingle = this.length === 1;
                return this.each(function(el, i){
                    // Avoid unnecessary Pablo collection creation
                    var node = isSingle ? this : Pablo(el),
                        value = this.getValue(className, i),
                        classString;

                    this.processList(value, function(className){
                        if (!node.hasClass(className)){
                            classString = node.attr('class');
                            classString = classString ? (classString + ' ') : '';
                            node.attr('class',  classString + className);
                        }
                    });
                });
            },

            removeClass: function(className){
                var isSingle = this.length === 1;
                return this.each(function(el, i){
                    // Avoid unnecessary Pablo collection creation
                    var node = isSingle ? this : Pablo(el),
                        value = this.getValue(className, i);

                    this.processList(value, function(className){
                        // TODO: avoid excessive RegExp creation
                        var classPattern = new RegExp('(?:^|\\s)' + className + '(\\s|$)'),
                            classString;

                        if (node.hasClass(className)){
                            classString = node.attr('class');
                            classString = classString.replace(classPattern, '$1');
                            node.attr('class', classString);
                        }
                    });
                });
            },

            toggleClass: function(className){
                var isSingle = this.length === 1;
                return this.each(function(el, i){
                    // Avoid unnecessary Pablo collection creation
                    var node = isSingle ? this : Pablo(el),
                        value = this.getValue(className, i);

                    this.processList(value, function(className){
                        if (node.hasClass(className)){
                            node.removeClass(className);
                        }
                        else {
                            node.addClass(className);
                        }
                    });
                });
            }
        };
    }

    extend(pabloCollectionApi, cssClassApi);

    /* For alternative implementations of class manipulation, see:
        * https://gist.github.com/1319121
        * https://developer.mozilla.org/media/uploads/demos/p/a/paulrouget/8bfba7f0b6c62d877a2b82dd5e10931e/hacksmozillaorg-achi_1334270447_demo_package/classList/classList.js
        * https://hacks.mozilla.org/2010/01/classlist-in-firefox-3-6/
    */


    /////


    // PABLO API

    // Pablo main function
    function Pablo(node, attr){
        if (canBeWrapped(attr)){
            return new PabloCollection(arguments);
        }
            
        return new PabloCollection(node, attr);
    }

    // Check if the object is a Pablo collection
    function isPablo(obj){
        return obj instanceof Pablo.Collection;
    }
    
    // Pablo methods
    extend(Pablo, {
        version: pabloVersion,
        isSupported: true,
        support: support,
        userAgent: userAgent,
        ns: {
            xmlns: xmlns,
            svg: svgns,
            html: htmlns,
            xlink: xlinkns
        },
        svgVersion: svgVersion,
        Collection: PabloCollection,
        Events: Events,
        fn: pabloCollectionApi,

        // methods
        make: make,
        isPlainObject: isPlainObject,
        isArray: isArray,
        isArrayLike: isArrayLike,
        isElement: isElement,
        isSVGElement: isSVGElement,
        isHTMLElement: isHTMLElement,
        hasSvgNamespace: hasSvgNamespace,
        hasHtmlNamespace: hasHtmlNamespace,
        isNodeList: isNodeList,
        isDocument: isDocument,
        // isPablo is overwritten in functional.js extension
        isPablo: isPablo,
        isNumeric: isNumeric,
        numericToNumber: numericToNumber,
        extend: extend,
        toArray: toArray,
        getAttributes: getAttributes,
        getAttribute: getAttribute,
        setAttribute: setAttribute,
        removeAttribute: removeAttribute,
        canBeWrapped: canBeWrapped,
        camelCase: camelCase,
        hyphenate: hyphenate,
        findPrefixedProperty: findPrefixedProperty,
        resolveCssProperty: resolveCssProperty,
        svgElementNames: svgElementNames,

        // data
        // TODO: should `Pablo.cache` & `.data()` be removed, to keep cache private?
        cache: cache,

        // TODO: support `collection.append('myTemplate')`
        template: function(name, callback){
            // e.g. Pablo.star()
            Pablo[name] = function(){
                return callback.apply(null, arguments);
            };
            // e.g. collection.star()
            pabloCollectionApi[name] = function(){
                var args = arguments;
                return this.map(function(el){
                    return Pablo[name].apply(el, args).appendTo(el);
                });
            };
            return this;
        },

        get: function(url, callback){
            var xhr;

            if (XMLHttpRequest){
                xhr = new XMLHttpRequest();
                
                xhr.onload = function(){
                    callback(this.responseText, this);
                };
                xhr.open('get', url, true);
                xhr.send();
            }
            return this;
        },

        // TODO: use importNode and IE9 importNode polyfill
        // http://stackoverflow.com/questions/7981100/how-do-i-dynamically-insert-an-svg-image-into-html/7986519#7986519
        // http://stackoverflow.com/questions/8078948/appendchild-with-svg-brings-a-hierarchy-request-err-3-in-ie9-0
        load: function(url, callback){
            // An empty collection to be populated with the loaded content, once loaded, like a promise
            var collection = Pablo();

            this.get(url, function(markup, xhr){
                if (xhr.responseXML){
                    // Create Pablo collection from document
                    //collection.add(document.importNode(xhr.responseXML.childNodes, true));
                    collection.add(xhr.responseXML.childNodes);
                }
                //collection.add(markupToSvgElement(markup));

                callback.call(collection, xhr);
            });

            return collection;
        }
    });


    /////

    
    // SVG ELEMENT METHODS
    svgElementNames.split(' ')
        .forEach(function(nodeName){
            var camelCaseName = camelCase(nodeName),
                createElement = function(attr){
                    return Pablo(make(nodeName), attr);
                };

            // <svg> elements
            if (nodeName === 'svg'){
                createElement = function(attr){
                    // Extend <svg> element with SVG version and xmlns namespace
                    attr = extend(attr, {
                        version: svgVersion,
                        xmlns: svgns
                    });

                    // Extend attribute with each namespace in the `Pablo.ns` map
                    Object.keys(Pablo.ns).forEach(function(ns){
                        // There's no need to add `xmlns:svg`, as this is already
                        // provided by the plain `xmlns` attribute
                        if (ns !== 'xmlns' && ns !== 'svg' && ns !== 'html'){
                            attr['xmlns:' + ns] = Pablo.ns[ns];
                        }
                    });

                    // Create the element
                    return Pablo(make(nodeName), attr);
                };
            }
            
            // Add a new method namespace for each element name
            Pablo.template(nodeName, createElement);

            // Create methods aliases to allow camelCase element name
            Pablo[camelCaseName] = Pablo[nodeName];
            pabloCollectionApi[camelCaseName] = pabloCollectionApi[nodeName];
        });

    
    /////
    
    // Set as a global variable
    window.Pablo = Pablo;

}());

}(
    this,
    this.Object,
    this.Array,
    this.Element,
    this.SVGElement,
    this.HTMLElement,
    this.NodeList,
    this.Document,
    this.HTMLDocument,
    this.document,
    this.navigator,
    this.XMLHttpRequest,
    this.DOMParser,
    this.XMLSerializer,
    this.atob,
    this.btoa,
    this.escape,
    this.unescape,
    this.setTimeout,
    this.clearTimeout
));