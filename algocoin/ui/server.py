import os
import os.path
import tornado.ioloop
import tornado.web
from aat.ui.handlers.html import HTMLOpenHandler


def getHandlers():
    root = os.path.join(os.path.dirname(__file__), 'assets')
    static = os.path.join(root, 'static', 'js')

    settings = {
        "template_path": os.path.join(root, 'templates'),
    }

    return settings, [
        (r"/", HTMLOpenHandler, {'template': 'index.html'}),
        (r"/static/js/(.*)", tornado.web.StaticFileHandler, {"path": static}),
        ]
