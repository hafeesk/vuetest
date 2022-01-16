frappe.pages['buttoncounter'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Button Counter',
		single_column: true
	});

    const assets = [
			'assets/buttoncounter/js/export_tool.js',
			'assets/buttoncounter/js/vue.js',
		];

    frappe.require(assets, () => {
        this.page.$export_tool = new frappe.buttoncounter.ExportTool(this.page);
    });

}