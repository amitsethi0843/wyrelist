from django import forms
from models import Event, EventRule, EventImage


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ('description', 'createdBy','totalEntries')
        widgets = {
            'description': forms.Textarea(attrs={'rows': 5}),
        }


class EventImageForm(forms.ModelForm):
    class Meta:
        model = EventImage
        fields = ('image',)


class EventRuleForm(forms.ModelForm):
    class Meta:
        model = EventRule
        fields = '__all__'

    def clean_feesPerEntry(self):
        entryChargeable = self.cleaned_data.get('entryChargeable')
        feesPerEntry=self.cleaned_data['feesPerEntry']
        if entryChargeable and not feesPerEntry:
            raise forms.ValidationError("Entry Fees Required when Entry Chargeable is checked")
        return feesPerEntry
