const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});



// const installBtn = document.getElementById('buttonInstall');

// window.addEventListener('beforeinstallprompt', (event) => {
//     window.deferredPrompt = event;

//     installBtn.classList.toggle('hidden', false);
// });

// installBtn.addEventListener('click', async () => {
//     const promptEvent = window.deferredPrompt;

//     if (!promptEvent) {
//         return;
//     }

//     promptEvent.prompt();

//     window.deferredPrompt = null;

//     installBtn.classList.toggle('hidden', true);
// });

// window.addEventListener('appinstalled', (event) => {
//     window.deferredPrompt = null;
// });


// const butInstall = document.getElementById("buttonInstall");

// window.addEventListener('beforeinstallprompt', (event) => {
//     console.log('hit')
//     console.log("event" + event)
//     event.preventDefault();
//     // Store the triggered events
//     window.deferredPrompt = event;

//     // Remove the hidden class from the button.
//     butInstall.classList.toggle('hidden', false);
// });

// butInstall.addEventListener('click', async () => {
//     const promptEvent = window.deferredPrompt;
//     // console.log(promptEvent)
//     if (!promptEvent) {
//         return;
//     }

//     // Show prompt
//     promptEvent.prompt();

//     // Reset the deferred prompt variable, it can only be used once.
//     window.deferredPrompt = null;

//     butInstall.classList.toggle('hidden', true);
// });

// window.addEventListener('appinstalled', (event) => {
//     // Clear prompt
//     console.log('install hit')
//     window.deferredPrompt = null;
// }); 

