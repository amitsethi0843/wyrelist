from rest_framework.permissions import BasePermission

class HasToken(BasePermission):
    def has_permission(self, request, view):
        return (request.POST['token'] or request.GET['token'])