d_visualize.state.templates = {};
d_visualize.state.setting = {};
d_visualize.state.iframe_src = '';

d_visualize.mutations['LOAD_CONTENT_FAIL'] = function (state, payload) {
};
d_visualize.mutations['LOAD_CONTENT_SUCCESS'] = function (state, payload) {
	Vue.set(state.setting, 'active_template', payload.setting.active_template);
	Vue.set(state.setting, 'status', payload.setting.status);
	Vue.set(state.setting, 'auto_save', payload.setting.auto_save);
	Vue.set(state, 'templates', payload.templates);
	Vue.set(state, 'available_components', payload.available_components);
	Vue.set(state, 'iframe_src', payload.iframe_src);

};