from django import template
register = template.Library()


@register.inclusion_tag('helpers/flashMessage.html')
def flash(messages):
    return {'messages':messages}

@register.filter(name='replaceBlankSpace')
def replaceBlankSpace(value,arg):
    if len(value):
        return value.replace(' ',arg)
