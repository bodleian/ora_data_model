#! /usr/bin/python3
"""
  generate_test_objects.py

  A test of the OCFL code libraries requires a decent sized repository for scale. This code
  generates a large number of objects into a root file system.
"""

import os
import sys
import datetime
import uuid

OBJECTS_TO_CREATE = 1000
OCFL_ROOT = "/mnt/hard_disk/ocfl/test_roots"

def generate_object(uuid):
  # uuid of object to generate
  pass
  # remame temp directory files
  # subprocess call to ocfl go

def create_objects(number_to_generate, ocfl_root=):
  # Create a series of test objects
  for _ in range(0..number_to_generate):
    fake_uuid = uuid.uuid4()
    # generate_object(fake_uuid)

def create_ocfl_root():
  # dIn
  timestamp = "{:%Y%m%d%H%m%S}".format(datetime.datetime.now())
  root_directory = os.path.join(OCFL_ROOT, timestamp)

  os.mkdir(root_directory)

  initiate_repo_command = "ocfl mkroot {}".format(root_directory)
  os.system(initiate_repo_command)

  #configure_root_command = "export OCFL_ROOT={}".format(OCFL_ROOT)
  #os.system(configure_root_command)

  return root_directory

def main():
  # do the basic configuration
  ocfl_root = create_ocfl_root()
  print("Creating root directory at: {}".format(ocfl_root))

if __name__ == "__main__":
    main()
