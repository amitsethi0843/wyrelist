import django_filters
from event.models import Event
from event.choices import EntryType
from rest_framework import filters


class EventFilter(django_filters.FilterSet):
    entryType=django_filters.ChoiceFilter(name='eventRule__entryType',choices=EntryType.entryChoices)
    entryChargeable=django_filters.BooleanFilter(name="eventRule__entryChargeable")
    max_fees=django_filters.Filter(name="eventRule__feesPerEntry",lookup_type="lte")
    min_fees=django_filters.NumberFilter(name="eventRule__feesPerEntry",lookup_type="gte")
    max_date=django_filters.DateFilter(name="eventRule__dateOfEvent",lookup_type="lte")
    min_date=django_filters.DateFilter(name="eventRule__dateOfEvent",lookup_type="gte")

    class Meta:
        model = Event
        fields=('entryType','entryChargeable','max_fees','min_fees','max_date','min_date',)


