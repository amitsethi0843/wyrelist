from django.shortcuts import render,redirect
from django.core.urlresolvers import reverse
from django.views.generic import TemplateView
from choices import *
# Create your views here.

class about(TemplateView):
    template_name = "general/about.html"

class landing(TemplateView):
    template_name = "landing/landing.html"
    # fixedDepositTenuree=FixedDepositTenureType()
    # for fixedDepositTenure,value in fixedDepositTenuree.fixedDepositTenureChoices:
    #     if fixedDepositTenure in fixedDepositTenuree.getIciciTenure():
    #         print(fixedDepositTenure)
    # for fixedDeposit in fixedDepositTenure.getIciciTenure():
    #         print(fixedDepositTenure.fixedDepositTenureChoices.__eq__(fixedDeposit))
    #         print("dsasdadas")

# def search(request,searchParam):
#     if(searchParam==searchType.FIXEDDEPOSIT):
#         return redirect(reverse('fixedDeposit:main'))



# def bootstrap(request):
#     bootstrapData()


