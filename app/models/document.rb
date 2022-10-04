class Document < ApplicationRecord
	has_one_attached :document_file

	validates :document_file, attached: true, content_type: [:doc, :docx, :csv, :txt]
	validates :document_file, attached: true, size: { less_than: 10.megabytes , message: 'is too large'} 

	belongs_to :user
	after_save :update_name

	def update_name
		object = self.document_file.blob.filename
		self.document_file.blob.update(key: "#{object.base}_#{self.file_type}_#{created_at.strftime("%Y%m%d")}.#{object.extension}")
		self.update_column(:name,  "#{self.document_file.blob.filename.to_s}_#{created_at.strftime("%m-%d-%Y")}")
	end
end
