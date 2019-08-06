        let aLangKeys = new Array();
        aLangKeys['en'] = new Array();
        aLangKeys['es'] = new Array();
        aLangKeys['it'] = new Array();
        aLangKeys['en']['titulo'] = 'Home';
        aLangKeys['es']['titulo'] = 'Casa';
        aLangKeys['it']['titulo'] = 'Casa';
        aLangKeys['en']['no-match'] = "Your search didn't match any result.";
        aLangKeys['es']['no-match'] = 'No se encontraron resultados.';
        aLangKeys['it']['no-match'] = 'Nessun risultato trovato';
        aLangKeys['en']['search-input'] = "Search...";
        aLangKeys['es']['search-input'] = 'Buscar...';
        aLangKeys['it']['search-input'] = 'Cerca...';







        $(function() {

            $('.lang').click(function() {
                var lang = $(this).attr('id');

                $('#search').attr("placeholder", aLangKeys[lang][$('#search').attr('key')]);


                $('.tr').each(function(i) {
                    $(this).text(aLangKeys[lang][$(this).attr('key')]);
                });
            });

        });