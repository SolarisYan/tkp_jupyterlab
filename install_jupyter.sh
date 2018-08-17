#!/bin/bash
export NODE_OPTIONS=--max-old-space-size=32768
jupyter labextension install @jupyter-widgets/jupyterlab-manager > /dev/null 2>&1 || echo "Extension failed to install:  @jupyter-widgets/jupyterlab-manager"
jupyter labextension install @jupyterlab/toc > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_toc"
jupyter labextension install @jupyterlab/statusbar > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_toc"
jupyter labextension install nbdime-jupyterlab > /dev/null 2>&1 || echo "Extension failed to install: nbdime-jupyterlab"
jupyter labextension install jupyterlab_iframe > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_iframe"
jupyter labextension install jupyterlab_html > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_html"
jupyter labextension install jupyterlab_email > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_email"
jupyter labextension install jupyterlab_commands > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_commands"
jupyter labextension install jupyterlab_templates > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_templates"
jupyter labextension install jupyterlab-drawio > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab-drawio"
jupyter labextension install jupyterlab_voyager > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_voyager"
jupyter labextension install jupyterlab-monaco > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_monaco"
jupyter labextension install @jupyterlab/plotly-extension > /dev/null 2>&1 || echo "Extension failed to install: @jupyterlab/plotly-extension"
# jupyter labextension install plotlywidget > /dev/null 2>&1 || echo "Extension failed to install: @jupyterlab/plotly-extension"
jupyter labextension install jupyterlab_bokeh > /dev/null 2>&1 || echo "Extension failed to install: jupyterlab_bokeh"
jupyter labextension install pylantern > /dev/null 2>&1 || echo "Extension failed to install: pylantern"
jupyter labextension install bqplot > /dev/null 2>&1 || echo "Extension failed to install: bqplot"
jupyter labextension install qgrid > /dev/null 2>&1 || echo "Extension failed to install: qgrid"
jupyter labextension install ipyvolume > /dev/null 2>&1 || echo "Extension failed to install: ipyvolume"
jupyter labextension install jupyter-threejs > /dev/null 2>&1 || echo "Extension failed to install: jupyter-threejs"
jupyter labextension install jupyter-leaflet > /dev/null 2>&1 || echo "Extension failed to install: jupyter-leaflet"
jupyter labextension install @jupyter-widgets/jupyterlab-sidecar > /dev/null 2>&1 || echo "Extension failed to install: @jupyter-widgets/jupyterlab-sidecar"
jupyter labextension install @oriolmirosa/jupyterlab_materialdarker > /dev/null 2>&1 || echo "Extension failed to install: @oriolmirosa/jupyterlab_materialdarker"
jupyter labextension install @jpmorganchase/perspective-jupyterlab > /dev/null 2>&1 || echo "Extension failed to install: @jpmorganchase/perspective-jupyterlab"


jupyter serverextension enable --py nbdime
jupyter serverextension enable --py jupyterlab_iframe
jupyter serverextension enable --py jupyterlab_templates
jupyter serverextension enable --py jupyterlab_commands
jupyter serverextension enable --py jupyterlab_email
jupyter serverextension enable --py nbresuse