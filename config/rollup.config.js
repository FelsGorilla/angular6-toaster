export default {
    entry: './dist/angular6-toaster.js',
    dest: './dist/bundles/angular6-toaster.umd.js',
    format: 'umd',
    moduleName: 'angular6toaster',
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs',
        'rxjs/operators'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs': 'Rx',
        'rxjs/operators': 'Rx.operators',
    },
    onwarn: (e) => { return }
}
