#!/bin/bash
export NODE_OPTIONS=--max-old-space-size=32768

until jupyter labextension install @jupyter-widgets/jupyterlab-manager > /dev/null 2>&1 
do
    echo "Extension failed to install:  @jupyter-widgets/jupyterlab-manager"
done

until jupyter labextension install @jupyterlab/toc > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_toc"
done

until jupyter labextension install @jupyterlab/statusbar > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_toc"
done

until jupyter labextension install nbdime-jupyterlab > /dev/null 2>&1
do
    echo "Extension failed to install: nbdime-jupyterlab"
done

until jupyter labextension install jupyterlab_iframe > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_iframe"
done

until jupyter labextension install jupyterlab_html > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_html"
done

until jupyter labextension install jupyterlab_email > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_email"
done

until jupyter labextension install jupyterlab_commands > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_commands"
done

until jupyter labextension install jupyterlab_templates > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_templates"
done

until jupyter labextension install jupyterlab-drawio > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab-drawio"
done

until jupyter labextension install jupyterlab_voyager > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_voyager"
done

until jupyter labextension install jupyterlab-monaco > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_monaco"
done

until jupyter labextension install @jupyterlab/plotly-extension > /dev/null 2>&1
do
    echo "Extension failed to install: @jupyterlab/plotly-extension"
done

until jupyter labextension install plotlywidget > /dev/null 2>&1
do
    echo "Extension failed to install: @jupyterlab/plotly-extension"
done

until jupyter labextension install jupyterlab_bokeh > /dev/null 2>&1
do
    echo "Extension failed to install: jupyterlab_bokeh"
done

until jupyter labextension install pylantern > /dev/null 2>&1
do
    echo "Extension failed to install: pylantern"
done

until jupyter labextension install bqplot > /dev/null 2>&1
do
    echo "Extension failed to install: bqplot"
done

until jupyter labextension install qgrid > /dev/null 2>&1
do
    echo "Extension failed to install: qgrid"
done

until jupyter labextension install ipyvolume > /dev/null 2>&1
do
    echo "Extension failed to install: ipyvolume"
done

until jupyter labextension install jupyter-threejs > /dev/null 2>&1
do
    echo "Extension failed to install: jupyter-threejs"
done

until jupyter labextension install jupyter-leaflet > /dev/null 2>&1
do
    echo "Extension failed to install: jupyter-leaflet"
done

until jupyter labextension install @jupyter-widgets/jupyterlab-sidecar > /dev/null 2>&1
do
    echo "Extension failed to install: @jupyter-widgets/jupyterlab-sidecar"
done

until jupyter labextension install @oriolmirosa/jupyterlab_materialdarker > /dev/null 2>&1
do
    echo "Extension failed to install: @oriolmirosa/jupyterlab_materialdarker"
done

until jupyter labextension install @jpmorganchase/perspective-jupyterlab > /dev/null 2>&1
do
    echo "Extension failed to install: @jpmorganchase/perspective-jupyterlab"
done

until jupyter labextension install beakerx-jupyterlab > /dev/null 2>&1
do
    echo "Extension failed to install: beakerx-jupyterlab"
done



jupyter serverextension enable --py nbdime
jupyter serverextension enable --py jupyterlab_iframe
jupyter serverextension enable --py jupyterlab_templates
jupyter serverextension enable --py jupyterlab_commands
jupyter serverextension enable --py jupyterlab_email
jupyter serverextension enable --py nbresuse