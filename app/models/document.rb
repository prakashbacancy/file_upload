class Document < ApplicationRecord
	has_one_attached :document_file

	validates :document_file, attached: true, content_type: [:doc, :docx, :pdf]
	validates :document_file, attached: true, size: { less_than: 1.megabytes , message: 'is too large'} 

	belongs_to :user
	after_save :update_name

	def update_name
		self.update_column(:name,  "#{document_file.name}_#{created_at.strftime("%m-%d-%Y")}")
	end
end
