from django import template
register = template.Library()


@register.inclusion_tag('helpers/publicMainHeading.html')
def mainHeading(heading,subHeading):
    return {'heading':heading,'subHeading':subHeading}