import Swal from "sweetalert2";
import $ from "jquery";
import * as utils from "./utils";
import {checkApi} from "./content-module-geolocation";

require('arrive')

export function createSwitchModeButton() {
    return utils.createElement('button', {
        onclick: () => {
            switchMode()
        },
    }, [
        utils.createElement('b', {
            innerText: chrome.i18n.getMessage("switchModeButtonText")
        })
    ])
}

export function createSwitchModeButtonContainer() {
    return utils.createElement('div', {
        id: "switchModeButtonContainer"
    }, [
        utils.createElement('br'),
        createSwitchModeButton(),
        utils.createElement('span', {
            innerText: " "
        }),
        utils.createElement('span', {
            id: "apiStatusContainer"
        })
    ])
}

export function injectSwitchModeButton() {
    let switchModeButtonContainer = createSwitchModeButtonContainer()

    let rules = $("[data-tr=\"rules\"]")
    if (rules.length === 1) {
        let switchModeButtonEnjoyer: HTMLElement = rules[0].parentElement!
        $(switchModeButtonContainer).appendTo(switchModeButtonEnjoyer)
    }

    document.arrive("[data-tr=\"rules\"]", function (el) {
        let switchModeButtonEnjoyer: HTMLElement = el.parentElement!
        $(switchModeButtonContainer).appendTo(switchModeButtonEnjoyer)
        let switchModeSelector = $('#switchModeButtonContainer')
        switchModeSelector.show()

        const obs = new MutationObserver((mutationList, observer) => {
            let switchModeSelector = $('#switchModeButtonContainer')
            console.dir(arguments[0].dataset.tr)
            if (arguments[0].dataset.tr === "searching") {
                if (switchModeSelector.length == 1) {
                    switchModeSelector.hide()
                }
            }
            if (arguments[0].dataset.tr === "rules") {
                if (switchModeSelector.length == 1) {
                    switchModeSelector.show()
                }
            }
        })
        obs.observe(el, {attributes: true})
        document.unbindArrive("[data-tr=\"rules\"]")
    })
}


export function switchMode() {
    let preselect = globalThis.settings.minimalism
    Swal.fire({
        title: chrome.i18n.getMessage("switchModeTitle"),
        allowOutsideClick: false,
        heightAuto: false,
        html: `${chrome.i18n.getMessage("switchModeText")}<br><br>
 <form id="modeSelector">
 <input type="radio" id="minimalism" name="mode" value="minimalism">
 <label for="minimalism">${chrome.i18n.getMessage("switchModeLabelMod1")}<br><img src="${chrome.runtime.getURL('resources/img/' + chrome.i18n.getMessage("minimalismImg"))}" style="border:1px solid" width="300px"></label><br>
 <br>
 <input type="radio" id="full" name="mode" value="full">
 <label for="full">${chrome.i18n.getMessage("switchModeLabelMod2")}</label></form>`,
        preConfirm: () => {
            let newMode = $("#modeSelector").serializeArray()[0]['value']
            if (typeof newMode === "undefined") {
                return false
            } else {
                if (!globalThis.settings.askForMode && newMode === "minimalism" && preselect) {
                    return true
                } else if (!globalThis.settings.askForMode && newMode === "full" && !preselect) {
                    return true
                } else {
                    if (newMode === "minimalism") {
                        chrome.storage.sync.set({askForMode: false, minimalism: true}, function () {
                            location.reload()
                        });
                    } else {
                        chrome.storage.sync.set({askForMode: false, minimalism: false}, function () {
                            location.reload()
                        });
                    }
                }
            }
        },
        didRender: () => {
            if (globalThis.settings.minimalism) {
                (document.getElementById('minimalism') as HTMLInputElement).checked = true
            } else {
                (document.getElementById('full') as HTMLInputElement).checked = true
            }
        }
    })
}