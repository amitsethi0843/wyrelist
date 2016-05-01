from django  import forms
from models import Event,EventRule

class EventForm(forms.ModelForm):
    class Meta:
        model=Event
        fields=('description','createdBy')
        widgets = {
            'description': forms.Textarea(attrs={ 'rows': 5}),
        }

class EventRuleForm(forms.ModelForm):
    class Meta:
        model=EventRule
        fields='__all__'

    def clean_feesPerEntry(self):
        entryChargeable=self.cleaned_data.get('entryChargeable')
        type(entryChargeable)
        if entryChargeable and not self.cleaned_data['feesPerEntry']:
            raise forms.ValidationError("Entry Fees Required when Entry Chargeable is checked")
        return self.cleaned_data.get('entryChargeable')

