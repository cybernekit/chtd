// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import ChronicTokenChtChronicTokenChtCht from './ChronicToken/cht/ChronicToken.cht.cht'


export default { 
  ChronicTokenChtChronicTokenChtCht: load(ChronicTokenChtChronicTokenChtCht, 'ChronicToken.cht.cht'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
