#!/bin/bash
export NODE_OPTIONS=--max-old-space-size=32768

EXTENSIONS="
@jpmorganchase/perspective-jupyterlab
@jupyter-widgets/jupyterlab-manager
@jupyter-widgets/jupyterlab-sidecar
@jupyterlab/celltags
@jupyterlab/git
@jupyterlab/plotly-extension
@jupyterlab/statusbar
@jupyterlab/toc
@mflevine/jupyterlab_html
@oriolmirosa/jupyterlab_materialdarker
@pyviz/jupyterlab_pyviz
beakerx_table-jupyterlab
bqplot
ipyannotate
ipyevents
ipysheet
ipyvolume
jupyter-leaflet
jupyter-threejs
jupyterlab-drawio
jupyterlab-kernelspy
jupyterlab_autoversion
jupyterlab_bokeh
jupyterlab_commands
jupyterlab_email
jupyterlab_iframe
jupyterlab_templates
jupyterlab_tensorboard
lineup_widget
plotlywidget
pylantern
qgrid
"

for item in EXTENSIONS; do
    until jupyter labextension install $item > /dev/null 2>&1 
    do
        echo "Extension failed to install:  $item"
    done
done

jupyter serverextension enable --py nbdime
jupyter serverextension enable --py jupyterlab_iframe
jupyter serverextension enable --py jupyterlab_autoversion
jupyter serverextension enable --py jupyterlab_commands
jupyter serverextension enable --py jupyterlab_email
jupyter serverextension enable --py jupyterlab_git
jupyter serverextension enable --py jupyterlab_templates
jupyter serverextension enable --py nbresuse
jupyter serverextension enable --py jupyter_tensorboard
