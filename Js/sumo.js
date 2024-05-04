function LoadSumoMultiSelect() {
    $('.multiSelectAll').SumoSelect();

    $('.multiSelectAll').on('change', function() {
        var _selectedValue = $(this).val();

        $.each(_selectedValue, function(key, value) {
            if (value == 1 || value == 2 || value == 3) {
                if (!$('.multiSelectAll option[value="12"]').length) {
                    $('select.multiSelectAll')[0].sumo.add('12', 'Blankın doldurulması');
                }
            }
        });

        var sOption1 = $('.multiSelectAll option[value="1"]:selected');
        var sOption2 = $('.multiSelectAll option[value="2"]:selected');
        var sOption3 = $('.multiSelectAll option[value="3"]:selected');
        var isset = $('.multiSelectAll option[value="12"]').length;

        if (isset && (sOption1.length === 0 && sOption2.length === 0 && sOption3.length === 0)) {
            $(".multiSelectAll option[value='12']").remove();
            $('select.multiSelectAll')[0].sumo.reload();
        }

        //Sadə, Sifarişli və Elektron xəbərnamələrin ancaq 1-i seçilə bilər
        var indexes = [];
        if (sOption1.length === 1) indexes = [2, 3];
        if (sOption2.length === 1) indexes = [1, 3];
        if (sOption3.length === 1) indexes = [1, 2];
        for (var i = 0; i < indexes.length; i++) {
            $('.multiSelectAll')[0].sumo.unSelectItem(indexes[i] + '');
        }
    });
}