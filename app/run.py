from jinja2 import Environment, FileSystemLoader
import os
 
_IGNORE_FILES = ["base.html", "project_base.html"]
_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))



templates_dir = os.path.join(_ROOT, 'jinja2')
projects_template_dir = os.path.join(templates_dir, 'projects')


def write_to_html(dir):
    files = os.listdir(dir)
    env = Environment(loader = FileSystemLoader(templates_dir))
    path_to = os.path.join(_ROOT, "projects") if "/projects" in dir else _ROOT
    print("path_to", path_to)
    for fileName in files:
        if fileName.endswith(".html") and fileName not in _IGNORE_FILES:
            write_to = os.path.join(path_to, fileName)
            fileName = os.path.join("projects", fileName)  if "/projects" in dir else fileName
            print("fileName", fileName)
            print("writing to", write_to)
            template = env.get_template(fileName)
            with open(write_to, 'w') as fh:
                fh.write(template.render())


write_to_html(templates_dir)
write_to_html(projects_template_dir)