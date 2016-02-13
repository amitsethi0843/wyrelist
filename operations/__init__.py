
# from django.contrib.auth.models import User
# from channel.models import Channel,ChannelNameEnum
#
#
# def findUser(token):
#     user=None
#     try:
#         user=Channel.objects.get(channelToken=token)
#     except User.DoesNotExist:
#         user=None
#     return user

# None if findUser("amit@email.com") else User.objects.create_superuser(username="amit@email.com",password="1234",is_active=True,email="amit@email.com").save()
# None if findUser("test@email.com") else User.objects.create(username="amit@email.com",password="1234",is_active=True,email="amit@email.com").save()
# if findUser(ChannelNameEnum.AXIS):
#     print("user")
# else:
#     print("wtf")
      # User.objects.create(username="amit@email.com",password="1234",is_active=True,email="amit@email.com").save()



# if not User.objects.filter(username="amit@email.com").exists():
#     User.objects.create_superuser(username="amit@email.com",password="1234",is_active=True,email="amit@email.com").save()