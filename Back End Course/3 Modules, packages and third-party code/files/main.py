import os
import shutil
from zipfile import ZipFile

__winc_id__ = 'ae539110d03e49ea8738fd413ac44ba8'
__human_name__ = 'files'


def clean_cache():
    shutil.rmtree('cache', ignore_errors=True)
    os.mkdir('cache')


def cache_zip(zip_file_path, cache_dir_path):
    clean_cache()
    with ZipFile(zip_file_path, 'r') as _zip:
        _zip.extractall(cache_dir_path)


def cached_files():
    cache_abspath = os.path.abspath("cache")
    paths = [os.path.join(cache_abspath, x) for x in os.listdir("cache")]
    abspaths = [path for path in paths if os.path.isfile(path)]
    return abspaths


def find_password(file_paths):
    for file_path in file_paths:
        text = open(file_path).read()
        for line in text.split("\n"):
            if "password" in line:
                return line.split(" ")[-1]


if __name__ == '__main__':
    zip_file_path = "data.zip"
    cache_dir_path = "cache"
    cache_zip(zip_file_path, cache_dir_path)
    print(find_password(cached_files()))
