HackMichiana.github.io
======================

Hack Michiana Website

Install dependencies, [python](https://www.python.org/)/[pip](https://pip.pypa.io/en/stable/installing/) & [node.js](https://nodejs.org/en/)/[npm](https://www.npmjs.com/) are required.

    git clone -b build https://github.com/HackMichiana/HackMichiana.github.io.git
    pip install -r requirements.txt
    npm install
    npm install -g bower
    bower install

Build the site

    ./build.py

Run a local HTTP server to preview changes

    cd build/
    python -m SimpleHTTPServer
    open index.html

Make changes, run `build.py` to rebuild the site to see them in action.

To deploy, run the following. This will take the contents of the `build/` folder and push it to the live site which is served from the master branch. Only do this after verifying that the changes are correct as they will take effect immediately.

    ghp-import -npb master build/


# Templates

This site uses [Jinja](http://jinja.pocoo.org/docs/dev/) templates. Site pages are located in `templates/pages/` and they can include any other templates relative to the `templates/` directory. Static files should be placed in `static/` and can be reference in templates relative to the `static` variable. Other media can be put in `media/` and accessed relative to the `media` variable. [Bower](http://bower.io/) packages can be added via bower.json & will automatically be put into `bower_components` upon running `bower install`. Bower packages can be accessed relative to the `bower` variable. To build URLs relative to the site root use the `root` variable.
