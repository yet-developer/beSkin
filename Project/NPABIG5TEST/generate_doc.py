import codecs
import re
import jinja2

def chunks(l, n):
    """ Yield successive n-sized chunks from l.
    """
    for i in xrange(0, len(l), n):
        yield l[i:i+n]

def parse_def(d):
    m_obj = re.search(r"\-\ (.*): (.*)", d)
    if m_obj:
        return dict(dt=m_obj.group(1),
                    dd=m_obj.group(2))
    return dict(dt="", dd="")

def parse_question(question):
    lines = question.split('\r\n')
    one, two = lines[0:2]
    obj = dict(a=one, b=two)
    if lines[2:]:
        obj["dl"] = [parse_def(d) for d in lines[2:]]
    return obj

def foo():
    with codecs.open( "data.txt", "r", "utf-8" ) as f:
        l = chunks(f.read()[:-2].split('\r\n\r\n'), 21)
        for part in l:
            title = part[0]
            yield dict(title=title, questions=[parse_question(q) for q in part[1:]])
                
templateLoader = jinja2.FileSystemLoader( searchpath="." )
templateEnv = jinja2.Environment( loader=templateLoader )
TEMPLATE_FILE = "template.txt"
template = templateEnv.get_template( TEMPLATE_FILE )
templateVars = { "parts" : list(foo())}
with codecs.open( "index.html", "w", "utf-8" ) as f:
    f.write(template.render( templateVars ))
