frappe.pages['buttoncounter'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Button Counter',
		single_column: true
	});
    this.page.$export_tool = new frappe.buttoncounter.ExportTool(this.page);
}