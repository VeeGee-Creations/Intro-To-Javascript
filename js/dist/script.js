let pokemonRepository = function () { const e = [], t = [], n = [], o = []; let i = void 0; const c = "https://pokeapi.co/api/v2/pokemon/?limit=-1", r = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"; let a = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"; function s(t) { const n = Object.keys(t), o = ["name", "detailsUrl"], i = (r = o, (c = n).length === r.length && c.every(e => r.includes(e))); var c, r, a; if ("object" == typeof t) { if (!0 === i) { let n = t; return e.push(n) } for (let e = 0; e < n.length; e++)if (n[e] !== o[e]) console.error(n[e] + " is an incorrect property"); else for (let e = 0; e < o.length; e++) { !0 === (a = o[e], !n.includes(a)) && console.error(o[e] + " is missing from object") } } else console.error(typeof t + " is an incorrect type") } function l() { const t = document.getElementById("search-input").value.toLowerCase(), i = new RegExp(t, "g"); if ("" === t) { const t = document.querySelector("#pokelist"), n = document.querySelectorAll(".nav-item"); e.length = 0, t.innerHTML = "", t.removeAttribute("style", "columns: 1"), n.forEach(function (e) { e.parentNode.removeChild(e) }), pokemonRepository.loadList().then(function () { pokemonRepository.getAll().forEach(function (e) { pokemonRepository.addListItem(e) }) }).then(function () { pokemonRepository.addHomeButton() }).then(function () { pokemonRepository.getMenu().forEach(function (e) { pokemonRepository.addMenuItem(e) }) }) } else if (o.length = 0, n.forEach(function (e) { e.name.match(i) && o.push(e) }), o.length < 1) { const e = document.querySelector("#pokelist"), t = document.createElement("li"); t.classList.add("search-error"), t.innerText = "Search did not return results.", e.innerHTML = "", e.setAttribute("style", "columns: 1"), e.appendChild(t) } else pokemonRepository.loadSearch(o) } function u() { const e = document.querySelector("#nav-menu"), t = document.createElement("li"), n = document.createElement("button"), o = document.querySelector("#search-button"), i = document.querySelector("#search-input"); n.classList.add("nav-button"), n.innerText = "Home", n.classList.add("nav-button"), t.classList.add("nav-item"), t.appendChild(n), e.appendChild(t), n.addEventListener("click", d), o.addEventListener("click", l), i.addEventListener("search", l) } function d() { const e = document.querySelector("#pokelist"); document.querySelectorAll(".nav-item").forEach(function (e) { e.parentNode.removeChild(e) }), a = r, e.innerHTML = "", e.removeAttribute("style", "columns: 1"), pokemonRepository.loadList().then(function () { pokemonRepository.getAll().forEach(function (e) { pokemonRepository.addListItem(e) }) }).then(function () { u() }).then(function () { pokemonRepository.getMenu().forEach(function (e) { pokemonRepository.addMenuItem(e) }) }) } function m() { const e = document.querySelector("main"), t = document.createElement("p"); t.classList.add("loading-message"), t.innerText = "Loading Pokemon", e.appendChild(t) } function p() { const e = document.getElementsByClassName("loading-message")[0]; e.parentNode.removeChild(e) } return { addPokemon: s, getAll: function () { return e }, getMenu: function () { return t }, addListItem: function (e) { const t = document.querySelector("#pokelist"), n = document.createElement("li"), o = document.createElement("button"); o.innerText = e.name.charAt(0).toUpperCase() + e.name.slice(1), o.classList.add("pokebutton"), o.setAttribute("data-toggle", "modal"), o.setAttribute("data-target", "#pokemonModal"), n.appendChild(o), t.appendChild(n), o.addEventListener("click", function () { !async function (e) { await pokemonRepository.loadDetails(e).then(function () { const t = e.name.charAt(0).toUpperCase() + e.name.slice(1), n = e.height / 10, o = e.weight / 10, i = [], c = [], r = e.imageUrl, a = r; e.types.forEach(function (e) { i.push(e.type.name.charAt(0).toUpperCase() + e.type.name.slice(1)) }), e.abilities.forEach(function (e) { c.push(e.ability.name.charAt(0).toUpperCase() + e.ability.name.slice(1)) }); const s = "Height: " + n + "m\nWeight: " + o + "kg\nTypes: " + i.join(", ") + "\nAbilities: " + c.join(", "); !function (e, t, n) { const o = document.querySelector("#pokemonModalLabel"), i = document.querySelector(".modal-body"), c = document.createElement("img"), r = document.createElement("p"); o.innerText = "", o.innerText = e, o.setAttribute("tabindex", "0"), i.innerHTML = "", t && c.setAttribute("src", t), c.setAttribute("id", "pokemon-img"), c.setAttribute("alt", e + "-image"), r.innerText = n, r.setAttribute("tabindex", "0"), i.appendChild(c), i.appendChild(r) }(t, a, s) }) }(e) }) }, addHomeButton: u, addMenuItem: function (e) { [].push(e); const t = document.querySelector("#nav-menu"), n = document.createElement("li"), o = document.createElement("button"), c = document.querySelector(".nav-title"), r = c.childNodes[0], s = document.createElement("p"), l = a.match(/\d+/g).map(Number); l.shift(); const d = l[0] + l[1]; s.innerText = "Pokemon " + l[0] + " - " + d + " of " + i, s.classList.add("text-center"), s.setAttribute("tabindex", "0"), o.innerText = Object.keys(e)[0].charAt(0).toUpperCase() + Object.keys(e)[0].slice(1), n.classList.add("nav-item"), o.classList.add("nav-button"), n.appendChild(o), t.appendChild(n), c.replaceChild(s, r), o.addEventListener("click", function () { !function (e) { for (let t in e) if (e.hasOwnProperty(t)) { let n = e[t]; if (null === n) return; { const e = document.querySelector("#pokelist"), t = document.querySelectorAll(".nav-item"); t.forEach(function (e) { e.parentNode.removeChild(e) }), a = n, e.innerHTML = "", pokemonRepository.loadList().then(function () { pokemonRepository.getAll().forEach(function (e) { pokemonRepository.addListItem(e) }) }).then(function () { u() }).then(function () { pokemonRepository.getMenu().forEach(function (e) { pokemonRepository.addMenuItem(e) }) }) } } }(e) }) }, loadAllPokemon: async function () { await fetch(c).then(function (e) { if (e.ok) return e.json() }).then(function (e) { e.results.forEach(function (e) { const t = { name: e.name, detailsUrl: e.url }; n.push(t) }) }).catch(e => console.log(e)) }, loadSearch: function (t) { const n = document.querySelector("#pokelist"), i = document.querySelectorAll(".nav-item"), c = document.querySelector(".nav-title"), r = c.childNodes[0], a = document.createElement("p"); a.innerText = "Returned " + o.length + " Pokemon", a.classList.add("text-center"), e.length = 0, n.innerHTML = "", c.replaceChild(a, r), i.forEach(function (e) { e.parentNode.removeChild(e) }), n.setAttribute("style", "columns: 1"), u(), t.forEach(function (e) { s(e) }), pokemonRepository.getAll().forEach(function (e) { pokemonRepository.addListItem(e) }) }, loadList: async function () { m(), function (n) { p(); const o = { next: n.next }, c = { previous: n.previous }; i = n.count, e.length = 0, t.length = 0, t.push(c, o), n.results.forEach(function (e) { const t = { name: e.name, detailsUrl: e.url }; s(t) }) }(await (await fetch(a).catch(function (e) { p(), console.error(e) })).json()) }, loadDetails: async function (e) { m(); const t = e.detailsUrl; return await fetch(t).then(function (e) { return e.json() }).then(function (t) { p(), e.imageUrl = t.sprites.other["official-artwork"].front_default, e.height = t.height, e.types = t.types, e.weight = t.weight, e.abilities = t.abilities }).catch(function (e) { p(), console.error(e) }) } } }(); pokemonRepository.loadList().then(function () { pokemonRepository.loadAllPokemon() }).then(function () { pokemonRepository.getAll().forEach(function (e) { pokemonRepository.addListItem(e) }) }).then(function () { pokemonRepository.addHomeButton() }).then(function () { pokemonRepository.getMenu().forEach(function (e) { pokemonRepository.addMenuItem(e) }) });