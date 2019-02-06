# Elements Xwalks

This directory contains the actual Elements crosswalk configuration ("map") files, and other associated files.

## Maps

The two files here are the inbound ("harvest", mapping from Hyrax to Elements) and outbound ("deposit", mapping from Elements to Hyrax) xwalk files. These are XML files which define the specific metadata mappings to be performed by the Elements crosswalk engine.

Map files are the only portion of the crosswalk process which is configurable per-customer. The versions of the files in this directory are the (in-development) versions for use by Oxford.

## Schemas

The XSD schema files in this directory can be used to validate the format of the map files above. `XwalkIn.xsd` can be used to validate the xwalk-in map file; `XwalkOut.xsd` can be used to validate the xwalk-out map. `XwalkCommon.xsd` is imported by both of these.

These schemas ensure that the map files are in a form which is compatable with the Elements crosswalk engine.

## Xwalk Out

This directory contains example input Elements API XML representation files, and the resulting output produced when running the crosswalk using the xwalk out map from the `Maps` directory.

## Xwalk In

This directory contains example input Hyrax XML files, and the resulting Elements API format output produced when running the crosswalk using the xwalk in map from the `Maps` directory.