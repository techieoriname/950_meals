const fs = require("fs");
const path = require("path");
const env = require("@xpresser/env")(__dirname, {
    castBoolean: true,
    required: [
        'BackendStoragePath',
        'FrontendBasePath'
    ]
})

// ===> $root/api/storage/public
const BackendStoragePath = path.resolve(__dirname + env['BackendStoragePath']);
// ===> $root/nuxt/storage
const FrontendStoragePath = path.resolve(__dirname + env['FrontendBasePath'] + "/static/items");


console.log({
    BackendStoragePath,
    FrontendStoragePath
})

if (!fs.existsSync(FrontendStoragePath)) {
    if (!fs.existsSync(BackendStoragePath)) {
        throw new Error(`Main storage does not exists: ${BackendStoragePath}`);
    }

    // Try Symlinking
    try {
        fs.symlinkSync(BackendStoragePath, FrontendStoragePath);
        console.log("Symlink successful.")
    } catch (e) {
        throw Error(e);
    }
}
