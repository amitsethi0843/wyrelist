from rest_framework.authtoken.models import Token

def createToken(data):
    print("==================="+str(data))
    # token=Token.objects.get_or_create(user=user)
    # print "================"+str(token.key)