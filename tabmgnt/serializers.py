from rest_framework import serializers


class AdvancedSerializer(serializers.ModelSerializer):
	def get_field(self,field,model,lookup_field='id'):
		if(field in self.initial_data):
			field_data = self.initial_data.pop(field)
			if(field_data is not None and lookup_field in field_data):
				lookup_key = field_data[lookup_field]
				try:
					return model.objects.get((lookup_field,lookup_key))
				except:
					return None
		return None



class AdvancedModelSerializer(serializers.ModelSerializer):
	def get_exclude_validation_fields(self):
		exclude_validation_fields = getattr(self.Meta, 'exclude_validation_fields',[])
		return exclude_validation_fields
	def run_validation(self, data):
		exclude_validation_fields = self.get_exclude_validation_fields()
		print(exclude_validation_fields)
		excluded_data = {}

		for field in exclude_validation_fields:
			if(field in data):
				excluded_data[field] = data.pop(field)

		ret = super(AdvancedModelSerializer, self).run_validation(data)

		for field in exclude_validation_fields:
			if(field in excluded_data):
				ret[field] = excluded_data.pop(field)

		return ret
