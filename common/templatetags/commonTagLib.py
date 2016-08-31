from  django import template
register=template.Library()

@register.inclusion_tag('tags/fieldErrors.html')
def fieldError(errorList,field):
    print(errorList)