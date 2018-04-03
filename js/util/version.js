export function createVersionString(package_data, timestamp) {
    return `Version ${package_data.version} (${timestamp.year}-${timestamp.month}-${timestamp.day})`
    //version.innerHTML = "Version " + package_data.version + " ("
    //    + timestamp.year + "-"
    //    + timestamp.month + "-"
    //    + timestamp.day
    //    + ")";
}
