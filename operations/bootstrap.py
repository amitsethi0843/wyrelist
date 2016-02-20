from django.contrib import contenttypes
from django.contrib.auth.models import Group
from django.contrib.auth.models import ContentType, User, Permission


def createGroupsAndPermissions():
    contentType = ContentType.objects.get_for_model(User)
    userPermission = Permission.objects.get_or_create(codename="ROLE_USER", name="is User", content_type=contentType)[0]
    restaurantPermission = Permission.objects.get_or_create(codename="ROLE_RESTAURANT", name="is Restaurant",
                                                                    content_type=contentType)[0]
    employeePermission = Permission.objects.get_or_create(codename="ROLE_EMPLOYEE", name="is Employee",
                                                          content_type=contentType)[0]
    restaurantGroup = Group.objects.get_or_create(name="Restaurant")[0]
    restaurantGroup.permissions.add(restaurantPermission)
    employeeGroup = Group.objects.get_or_create(name="Employee")[0]
    employeeGroup.permissions.add(employeePermission)
    userGroup = Group.objects.get_or_create(name="User")[0]
    userGroup.permissions.add(userPermission)

    print(restaurantPermission, restaurantGroup)
    # restaurant.permissions.add(restPerm)

# def create_Groups():

#
# Group.objects.get_or_create(name="User")
