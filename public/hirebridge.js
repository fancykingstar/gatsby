(function () {
    var host = (document.location.protocol ? 'https://' : 'http://') + 'rss.hirebridge.com/';
    var meta = document.getElementsByName('viewport');
    var nodeContent = document.getElementById('hrbr-widget');
    var delElement = document.getElementsByName('hirebridge-script')[0];
    var itemPerPage = hirebridge_conf.itempage === "undefined" ? 10 : Number(hirebridge_conf.itempage);
    var peiodActualItem = 864000000; //(10 days)
    var publisher = 'Company';
    var setting = {};
    var userFilters = ['search', 'company', 'brand', 'department', 'location', 'category', 'jobfunction', 'jobgroup', 'country', 'state', 'jobtype', 'group', 'sort'];
    var data = [];
    var filterDepartment = [];
    var filterLocation = [];
    var filterCategory = [];
    var filterBrand = [];
    var filterJobFunction = [];
    var filterJobGroup = [];
    var filterCompany = [];
    var filterCountry = [];
    var filterState = [];
    var filterJobtype = [];

    var filterSort = ['Sort by:', 'Date created', 'Job title'];
    var filterGroup = ['Group by:', 'Department', 'Location', 'Category'];

    (function () {
        var hirebridge_awesome = document.createElement('link');
        hirebridge_awesome.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
        hirebridge_awesome.rel = 'stylesheet';
        document.head.appendChild(hirebridge_awesome);
    })();

    if (typeof delElement != 'undefined') {
        delElement.parentNode.removeChild(delElement);
    }

    if (meta.length === 0) {
        (function () {
            var meta_head = document.createElement('meta');
            meta_head.name = 'viewport';
            meta_head.content = 'width=device-width, initial-scale=1';
            document.head.appendChild(meta_head);
        })();
    }

    //init user data, init filter data
    function loadData(job) {
        var hot;
        userFilters.forEach(function (item) {
            if (hirebridge_conf.filters.indexOf(item) !== -1) {
                setting[item] = true;
            }
        });
        if (typeof hirebridge_conf.description !== "undefined") {
            setting.description = Number(hirebridge_conf.description);
        }
        if (job && typeof job[0] == "undefined") {
            var job1 = job;
            job = [];
            job[0] = job1;
        }
        var item_number;
        var count = 1;
        job.forEach(function (item, i, arr) {
            hot = !((Date.now() - Date.parse(item.date)) > peiodActualItem);

            if (!data[item.referencenumber]) {
                item_number = item.referencenumber;

            } else {
                item_number = item.referencenumber + count;
                count++;
            }

            data[item_number] = {
                'sortDepartment': item.department,
                'sortLocation': item.location,
                'sortCategory': item.category,
                'sortBrand': (typeof item.brand == "object") ? item.brand : [],
                'sortJobFunction': item.jobfunction,
                'sortJobGroup': item.jobgroup,
                'sortCompany': item.company.trim(),
                'sortCountry': item.country,
                'sortState': item.state,
                'sortJobtype': item.jobtype,
                'title': item.title,
                'url': item.ApplicationURL,
                'urlPage': item.url,
                'description': item.description,
                'referencenumber': item.referencenumber,
                'date': item.date,
                'html': buildItem(item.title, item.location, item.description, item.referencenumber, hot, item.date, item.department, item_number)
            };

            if (setting.department && item.department != null && filterDepartment.indexOf(item.department) === -1) {
                filterDepartment.push(item.department);
            }

            if (setting.location && item.location != null && filterLocation.indexOf(item.location) === -1) {
                filterLocation.push(item.location);
            }
            if (setting.category && item.category != null && filterCategory.indexOf(item.category) === -1) {
                filterCategory.push(item.category);
            }
            if (setting.brand && typeof item.brand == "object" && item.brand.length != 0) {
                for (var iBrand = 0; iBrand < item.brand.length; iBrand++) {
                    if (filterBrand.indexOf(item.brand[iBrand]) === -1) {
                        filterBrand.push(item.brand[iBrand]);
                    }
                }
            }
            if (setting.jobfunction && item.jobfunction != null && filterJobFunction.indexOf(item.jobfunction) === -1) {
                filterJobFunction.push(item.jobfunction);
            }
            if (setting.jobgroup && item.jobgroup != null && filterJobGroup.indexOf(item.jobgroup) === -1) {
                filterJobGroup.push(item.jobgroup);
            }
            if (setting.company && item.company != null && filterCompany.indexOf(item.company.trim()) === -1) {
                filterCompany.push(item.company.trim());
            }
            if (setting.country && item.country != null && filterCountry.indexOf(item.country) === -1) {
                filterCountry.push(item.country);
            }
            if (setting.state && item.state != null && filterState.indexOf(item.state) === -1) {
                filterState.push(item.state);
            }
            if (setting.jobtype && item.jobtype != null && filterJobtype.indexOf(item.jobtype) === -1) {
                filterJobtype.push(item.jobtype);
            }
        });

    }

    //build html for single item
    function buildItem(title, location, description, referencenumber, hot, date, department, item_number) {
        var html = '' +
            '<li class="hrbr-job">' +
                '<div class="hrbr-row">' +
                    '<div class="hrbr-col-md-8 hrbr-job-details">' +
                        '<a href="#" data-item="' + item_number + '" class="hrbr-title hrbr-handler">' + title + '</a>';
        if (hot) {
            html += '<span class="hrbr-label hrbr-label-default">' +
                (hirebridge_lang.new ? hirebridge_lang.new : 'New') + '</span>';
        }
        html += '<p class="hrbr-location"><small>' + location + '</small></p>'; // ' | ' + date + // ' | ' + department +
        if (setting.description) {
            html += '<p>' + (description.replace(/<\/?[^>]+>/g, '').replace(/(&nbsp;)+/g, '').substr(0, setting.description).trim()) + '...</p>';
        }
        html += '</div>' +
                 '<div class="hrbr-col-md-4 hrbr-view-button hrbr-handler" data-item="' + item_number + '">' +
                    '<a href="#" class="hrbr-btn hrbr-btn-primary hrbr-btn-sm">' +
                         (hirebridge_lang.details ? hirebridge_lang.details : 'JOB&nbsp;DETAILS') + '</a>' +
                 '</div>' +
             '</div>' +
         '</li>';

        return html;
    }

    //load common tempaltes
    function renderTemplate() {
        if (noJob > 0) {
            var html = '<h4 style="text-align: center;">There are no open positions at this time</h4>'

        }
        else {
            var html = '' +
                '<section class="hrbr-home">' +
                    '<div class="hrbr-bottom-content hrbr-container">' +
                        '<div class="hrbr-row">' +
                            '<div class="hrbr-col-md-12 hrbr-job-list-cont">' +
                                '<div id="hrbr-swap-table">';
            if (hirebridge_conf.showtitle === true) {

                html += '<h2>' + publisher + ' ' + (hirebridge_lang.title ? hirebridge_lang.title : 'jobs list') + '</h2>';
            }
            html += '<div class="hrbr-wr-fl">';
            if (setting.search) {
                html +=
                       '<div class="hrbr-row-search">' +
                           '<input id="hrbr-job-filter-search" type="text" class="hrbr-form-control" placeholder="Search">' +
                       '</div>';
            }
            html += '<div class="hrbr-row-filters" id="hrbr-filters">';
            userFilters.forEach(function (item) {
                if (setting[item] && item !== 'search') {
                    html +=
                        '<div class="hrbr-col">' +
                        '<select id="hrbr-job-filter-' + item + '" class="hrbr-form-control" style="width: 100%;"></select>' +
                        '</div>';
                }
            });
            html += '</div>' +
               '</div>' +
                   '<div class="hrbr-row hrbr-jobs">' +
                       '<div class="hrbr-col-md-12">' +
                           '<ul id="hrbr-job-lists" class="hrbr-list-unstyled hrbr-job-list"></ul>' +
                           '<nav>' +
                                '<ul id="hrbr-job-pagination" class="hrbr-wrapper-pagination hrbr-pagination-sm"></ul>' +
                           '</nav>' +
                       '</div>' +
                   '</div>' +
               '</div>' +
               '<div id="hrbr-swap-page" style="display: none;">' +
                   '<h3 id="hrbr-page-title"></h3>' +
                   '<div id="hrbr-page-info">' +
                       '<i class="fa fa-map-marker"></i> ' +
                       '<span id="hrbr-page-location"></span> ' +
                       '<br><span id="hrbr-page-department"></span> | <span>' + (hirebridge_lang.id ? hirebridge_lang.id : 'ID') + ':</span>' +
                       '<span id="hrbr-page-referencenumber"></span>' +
                   '</div>' +
                   '<hr />' +
                   '<a href="#" target="_blank" class="hrbr-page-url hrbr-btn hrbr-btn-primary hrbr-btn-sm hrbr-col-xs-12">' +
                   (hirebridge_lang.apply ? hirebridge_lang.apply : 'Apply') + '</a>' +
                   '<a class="hrbr-back-button hrbr-btn hrbr-btn-primary-invert hrbr-btn-sm" href="#" >' +
                   (hirebridge_lang.all ? hirebridge_lang.all : 'View&nbsp;all&nbsp;jobs') + '</a>' +
                   '<a class="hrbr-email-button hrbr-btn hrbr-btn-primary-invert hrbr-btn-sm" href="#">' +
                   (hirebridge_lang.email ? hirebridge_lang.email : 'Email&nbsp;Job') + '</a>' +
                   '<hr />' +
                   '<div id="hrbr-page-message"></div>' +
                   '<hr />' +
                   '<a href="#" target="_blank" class="hrbr-page-url hrbr-btn hrbr-btn-primary hrbr-btn-sm hrbr-col-xs-12">' +
                   (hirebridge_lang.apply ? hirebridge_lang.apply : 'Apply') + '</a>' +
                   '<a class="hrbr-back-button hrbr-btn hrbr-btn-primary-invert hrbr-btn-sm" href="#" >' +
                   (hirebridge_lang.all ? hirebridge_lang.all : 'View&nbsp;all&nbsp;jobs') + '</a>' +
                   '<a class="hrbr-email-button hrbr-btn hrbr-btn-primary-invert hrbr-btn-sm" href="#">' +
                   (hirebridge_lang.email ? hirebridge_lang.email : 'Email&nbsp;Job') + '</a>' +
                   '<div class="hrbr-col-md-12 hrbr-spacer"></div>' +
               '</div>' +
           '</div>' +
       '</div>' +
   '</div>' +
'</section>';
        }

        nodeContent.innerHTML = html;

        if (setting.department) {
            filterDepartment.sort().unshift('All departments');
            document.getElementById('hrbr-job-filter-department').innerHTML = fillSelect(filterDepartment, 'department');
        }
        if (setting.location) {
            filterLocation.sort().unshift('All locations');
            document.getElementById('hrbr-job-filter-location').innerHTML = fillSelect(filterLocation, 'location');
        }
        if (setting.category) {
            filterCategory.sort().unshift('All categories');
            document.getElementById('hrbr-job-filter-category').innerHTML = fillSelect(filterCategory, 'category');
        }
        if (setting.brand) {
            filterBrand.sort().unshift('All brands');
            document.getElementById('hrbr-job-filter-brand').innerHTML = fillSelect(filterBrand, 'brand');
        }
        if (setting.jobfunction) {
            filterJobFunction.sort().unshift('All job functions');
            document.getElementById('hrbr-job-filter-jobfunction').innerHTML = fillSelect(filterJobFunction);
        }
        if (setting.jobgroup) {
            filterJobGroup.sort().unshift('All job groups');
            document.getElementById('hrbr-job-filter-jobgroup').innerHTML = fillSelect(filterJobGroup, 'jobgroup');
        }
        if (setting.company) {
            filterCompany.sort().unshift('All companies');
            document.getElementById('hrbr-job-filter-company').innerHTML = fillSelect(filterCompany);
        }
        if (setting.country) {
            filterCountry.sort().unshift('All countries');
            document.getElementById('hrbr-job-filter-country').innerHTML = fillSelect(filterCountry);
        }
        if (setting.state) {
            filterState.sort().unshift('All states');
            document.getElementById('hrbr-job-filter-state').innerHTML = fillSelect(filterState);
        }
        if (setting.jobtype) {
            filterJobtype.sort().unshift('All job types');
            document.getElementById('hrbr-job-filter-jobtype').innerHTML = fillSelect(filterJobtype);
        }
        if (setting.group) {
            document.getElementById('hrbr-job-filter-group').innerHTML = fillSelect(filterGroup);
        }
        if (setting.sort) {
            document.getElementById('hrbr-job-filter-sort').innerHTML = fillSelect(filterSort);
        }
    }

    /**
	 * multiSortArray(items, ['key1', 'key2', 'key3', ... ], ['asc', 'desc', 'asc', ... ]);
	 *
	 * @param arr
	 * @param keys keys for sorting
	 * @param direction for sorting
	 * @returns {*}
	 */
    function multiSortArray(arr, keys, direction) {
        direction = direction || 'asc';

        if (typeof arr !== 'object' || (typeof keys !== 'string' && typeof keys !== 'object')) {
            return false;
        }

        if (typeof keys === 'string') {
            keys = [keys];
        }

        if (typeof direction === 'string') {
            direction = [direction];
        }

        return arr.sort(function (a, b) {
            if (typeof a === 'string') {
                a = a.toLowerCase();
            }

            if (typeof b === 'string') {
                b = b.toLowerCase();
            }

            var r;
            for (var i = 0, l = keys.length; i < l; i++) {
                var k = keys[i];
                if (a[k] !== b[k]) {
                    if (a[k] === undefined) {
                        r = 1;
                    } else if (direction[i] && direction[i] === 'asc') {
                        if (k === 'date') { r = Date.parse(a[k]) > Date.parse(b[k]) ? -1 : 1; } else { r = a[k] > b[k] ? 1 : -1; };
                    } else if (direction[i] && direction[i] === 'desc') {
                        if (k === 'date') { r = Date.parse(a[k]) < Date.parse(b[k]) ? 1 : -1; } else { r = a[k] < b[k] ? -1 : 1; };
                    } else {
                        if (k === 'date') { r = Date.parse(a[k]) > Date.parse(b[k]) ? -1 : 1; } else { r = a[k] > b[k] ? 1 : -1; };
                    }
                    break;
                } else {
                    r = 0;
                }
            }
            return r;
        });
    }

    //load dynamic items
    function renderItems(department, location, category, brand, jobFunction, jobGroup, company, country, state, jobtype, group, sort, search, page) {
        var node = document.getElementById('hrbr-job-lists');
        var element = '';
        var showElement = [];
        page = Number(page) ? page : 0;

        data.forEach(function (item, i, arr) {
            if (department && department !== item.sortDepartment) {
                return;
            }
            if (location && location !== item.sortLocation) {
                return;
            }
            if (category && category !== item.sortCategory) {
                return;
            }
            if (brand) {
                if (item.sortBrand.length != 0) {
                    outer:
                        do {
                            for (var iBrand = 0; iBrand < item.sortBrand.length; iBrand++) {
                                if (brand === item.sortBrand[iBrand]) {
                                    break outer;
                                }
                            }
                            return;
                        } while (false);
                } else {
                    return;
                }
            }
            if (jobFunction && jobFunction !== item.sortJobFunction) {
                return;
            }
            if (jobGroup && jobGroup !== item.sortJobGroup) {
                return;
            }
            if (company && company !== item.sortCompany) {
                return;
            }
            if (country && country !== item.sortCountry) {
                return;
            }
            if (state && state !== item.sortState) {
                return;
            }
            if (jobtype && jobtype !== item.sortJobtype) {
                return;
            }
            if (search && !searchWorld(search, item)) {
                return;
            }
            showElement.push(item);
        });

        var groupkey2 = 'title';
        var groupkey2dir = 'asc';
        var groupsort = false;
        if (sort && group) { var groupsort = true; };

        //sort: date
        if (sort && sort == filterSort[1]) {
            if (groupsort) {
                groupkey2 = 'date';
                groupkey2dir = 'desc';
            } else {
                showElement.sort(function (itemOne, itemTwo) { return Date.parse(itemTwo.date) - Date.parse(itemOne.date); });
            };
        };
        //sort: title
        if (sort && sort == filterSort[2]) {
            if (groupsort) {
                groupkey2 = 'title';
                groupkey2dir = 'asc';
            } else {
                showElement.sort(function (itemOne, itemTwo) { return itemOne.title.localeCompare(itemTwo.title); });
            };
        };
        //group: sort: sortDepartment,title||date
        if (group && group == filterGroup[1]) {
            showElement = multiSortArray(showElement, ['sortDepartment', groupkey2], ['asc', groupkey2dir]);
        }
        //group: sort: sortLocation,title||date
        if (group && group == filterGroup[2]) {
            showElement = multiSortArray(showElement, ['sortLocation', groupkey2], ['asc', groupkey2dir]);
        }
        //group: sort: sortCategory,title||date
        if (group && group == filterGroup[3]) {
            showElement = multiSortArray(showElement, ['sortCategory', groupkey2], ['asc', groupkey2dir]);
        }

        //Object.keys(showElement):
        //sortDepartment, sortLocation, sortCategory, sortBrand, sortJobFunction, sortJobGroup, sortCompany, sortCountry, sortState, sortJobtype, title, url, urlPage, description, referencenumber, date, html

        var subgroupname = '';
        for (var iElem = itemPerPage * page; (iElem < showElement.length && iElem < itemPerPage * (page + 1)) ; iElem++) {
            if (group && group == filterGroup[1] && subgroupname !== showElement[iElem].sortDepartment) {
                element += '<li class="subgroup"><h3>' + showElement[iElem].sortDepartment + '</h3></li>' + showElement[iElem].html;
                subgroupname = showElement[iElem].sortDepartment;
            } else if (group && group == filterGroup[2] && subgroupname !== showElement[iElem].sortLocation) {
                element += '<li class="subgroup"><h3>' + showElement[iElem].sortLocation + '</h3></li>' + showElement[iElem].html;
                subgroupname = showElement[iElem].sortLocation;
            } else if (group && group == filterGroup[3] && subgroupname !== showElement[iElem].sortCategory) {
                element += '<li class="subgroup"><h3>' + showElement[iElem].sortCategory + '</h3></li>' + showElement[iElem].html;
                subgroupname = showElement[iElem].sortCategory;
            } else {
                element += showElement[iElem].html;
            };
        }
        buildPagination(showElement.length, page);
        if (showElement.length === 0) {
            element = '<li>Not found</li>';
        }
        node.innerHTML = element;
        registerHandlerSingleElement();
        applyStyles();
    }

    //build pagination
    function buildPagination(ct, page) {
        var html = '';
        if (ct) {
            var allPages = Math.ceil(ct / itemPerPage);
            html += '<li><a href="#" data-page="prew" class="hrbr-pagination"><span aria-hidden="true">&laquo;</span><span class="hrbr-sr-only">Previous</span></a></li>';
            for (var iPag = 0; iPag < allPages; iPag++) {
                html += page == iPag ? '<li class="active">' : '<li>';
                html += '<a href="#" class="hrbr-pagination" data-page="' + iPag + '">' + (iPag + 1) + '</a></li>';
            }
            html += '<li><a href="#" data-page="next" class="hrbr-pagination"><span aria-hidden="true">&raquo;</span><span class="hrbr-sr-only">Next</span></a></li>';
        }

        if (allPages > 1) {
            document.getElementById('hrbr-job-pagination').innerHTML = html;
            registerHandlerPaginationElement();
        } else {
            document.getElementById('hrbr-job-pagination').innerHTML = '';
        }
    }

    //load filters
    function fillSelect(data, filter) {
        var html = '';
        var selected = '';
        data.forEach(function (item, i, arr) {
            if (hirebridge_conf.valuesFilter && item == hirebridge_conf.valuesFilter[filter]) {
                selected = ' selected';
            }
            html += '<option' + selected + '>' + item + '</option>';
            selected = '';
        });
        return html;
    }

    //handle filters
    function handleFilters(event, page) {

        var params = [];

        if (hirebridge_conf.isOptionsFilter > 0) {
            for (var filter in hirebridge_conf.valuesFilter) {

                if (hirebridge_conf.optionsFilter[filter] > 0) {
                    params[filter] = hirebridge_conf.valuesFilter[filter];
                }
            }
        }

        userFilters.forEach(function (item) {
            if (setting[item]) {
                params[item] = document.getElementById('hrbr-job-filter-' + item).value;
                if (hirebridge_conf.optionsFilter) {
                    hirebridge_conf.optionsFilter[item] = 0;
                }
            }
        });

        var df = params.department && params.department !== 'All departments' ? params.department : null;
        var lf = params.location && params.location !== 'All locations' ? params.location : null;
        var cf = params.category && params.category !== 'All categories' ? params.category : null;
        var bf = params.brand && params.brand !== 'All brands' ? params.brand : null;
        var ff = params.jobfunction !== filterJobFunction[0] ? params.jobfunction : null;
        var gf = params.jobgroup && params.jobgroup !== 'All job groups' ? params.jobgroup : null;
        var cpf = params.company !== filterCompany[0] ? params.company : null;
        var ctf = params.country !== filterCountry[0] ? params.country : null;
        var stf = params.state !== filterState[0] ? params.state : null;
        var jf = params.jobtype !== filterJobtype[0] ? params.jobtype : null;
        var gbf = params.group !== filterGroup[0] ? params.group : null;
        var sf = params.sort !== filterSort[0] ? params.sort : null;
        var wf = params.search ? params.search : null;
        var p = typeof page == 'undefined' ? 0 : page;

        renderItems(df, lf, cf, bf, ff, gf, cpf, ctf, stf, jf, gbf, sf, wf, p);
    }

    //search sort
    function searchWorld(search, item) {
        var word = search.toLowerCase();
        if (word.length < 3) {
            return true;
        }
        if (item.title.toLowerCase().indexOf(word) !== -1) {
            return true;
        }
        if (item.description.toLowerCase().indexOf(word) !== -1) {
            return true;
        }
        return false;
    }

    //register handlers
    function registerHandlers() {
        var handlerFilter = document.getElementById('hrbr-filters');
        if (setting.search) {
            var searchFilter = document.getElementById('hrbr-job-filter-search');
            searchFilter.oninput = function (event) {
                handleFilters(event);
            };
        }

        handlerFilter.onchange = function (event) {
            handleFilters(event);
        };

        if (setting.sort) {
            if (hirebridge_conf.sortBy) {

                document.getElementById("hrbr-job-filter-sort").options.selectedIndex = hirebridge_conf.sortBy;
                handlerFilter.onchange();

            };
            if (hirebridge_conf.sortByDisabled) {
                //document.getElementById("hrbr-job-filter-sort").setAttribute("disabled", true);
                document.getElementById("hrbr-job-filter-sort").parentNode.style.display = 'none';
            };
        }

        if (setting.group) {
            if (hirebridge_conf.groupBy) {

                document.getElementById("hrbr-job-filter-group").options.selectedIndex = hirebridge_conf.groupBy;
                handlerFilter.onchange();
            };

            if (hirebridge_conf.groupByDisabled) {
                //document.getElementById("hrbr-job-filter-group").setAttribute("disabled", true);
                document.getElementById("hrbr-job-filter-group").parentNode.style.display = 'none';
            };
        }


        registerHandlerSingleElement();
        registerHandlerButtonBack();
    }

    // add handler single job item
    function registerHandlerButtonBack() {
        var items = document.getElementsByClassName('hrbr-back-button');
        for (var iBack = 0; iBack < items.length; iBack++) {
            items[iBack].onclick = function () {
                document.getElementById('hrbr-swap-page').style.display = 'none';
                document.getElementById('hrbr-swap-table').style.display = 'block';
                if (typeof (Storage) !== "undefined") {
                    // get previous scroll position and go to it
                    var scrollPos = sessionStorage.getItem('hrbr-scroll-pos');
                    window.scrollTo(0, scrollPos);
                    sessionStorage.removeItem('hrbr-scroll-pos');
                }
                return false;
            }
        }
    }

    // add handler single job item
    function registerHandlerSingleElement() {
        var items = document.getElementsByClassName('hrbr-handler');
        for (var iItems = 0; iItems < items.length; iItems++) {
            addHandlerItem(items[iItems]);
        }
    }

    function addHandlerItem(this_el) {
        this_el.onclick = function (el) {
            var linkToEmail = data[this_el.dataset.item].urlPage;
            var linkToEmailFormattig = '';
            var swapPage = document.getElementById('hrbr-swap-page');
            var buttonLink = document.getElementsByClassName('hrbr-page-url');
            var emailLink = document.getElementsByClassName('hrbr-email-button');
            document.getElementById('hrbr-swap-table').style.display = 'none';

            document.getElementById('hrbr-page-title').innerHTML = data[this_el.dataset.item].title;
            document.getElementById('hrbr-page-message').innerHTML = data[this_el.dataset.item].description;
            document.getElementById('hrbr-page-department').innerHTML = data[this_el.dataset.item].sortDepartment;
            document.getElementById('hrbr-page-location').innerHTML = data[this_el.dataset.item].sortLocation;
            document.getElementById('hrbr-page-referencenumber').innerHTML = data[this_el.dataset.item].referencenumber;

            for (var iLink = 0; iLink < buttonLink.length; iLink++) {
                buttonLink[iLink].setAttribute('href', data[this_el.dataset.item].url);
            }
            for (var iEmail = 0; iEmail < emailLink.length; iEmail++) {
                linkToEmailFormattig = encodeURIComponent(linkToEmail);
                emailLink[iEmail].setAttribute('href', 'mailto:?subject=' + data[this_el.dataset.item].title
                    + '@' + publisher + '&body=' + linkToEmailFormattig);
            }
            swapPage.style.display = 'block';
            if (typeof (Storage) !== "undefined") {
                // save current scroll position so we can restore it when going back to table
                sessionStorage.setItem('hrbr-scroll-pos', window.scrollY);
            }
            var top = 0;
            if (typeof hirebridge_conf.top !== "undefined" && hirebridge_conf.top != 0 && nodeContent != null) {
                top += Number(hirebridge_conf.top);
            }
            document.getElementById("hrbr-widget").scrollIntoView();
            window.scrollBy(0, -top);
            return false;
        }
    }

    // add handler single pagination item
    function registerHandlerPaginationElement() {
        var items = document.getElementsByClassName('hrbr-pagination');
        for (var iItems = 0; iItems < items.length; iItems++) {
            addHandlerPagination(items[iItems]);
        }
    }

    function addHandlerPagination(this_el) {
        this_el.onclick = function (el) {
            var page = this_el.dataset.page;
            var parentUl = document.getElementById('hrbr-job-pagination');
            var active = parentUl.getElementsByClassName('active')[0].getElementsByTagName('a')[0].dataset.page;
            var allChild = parentUl.getElementsByTagName('li');
            var lastChild = allChild[allChild.length - 2].getElementsByTagName('a')[0].dataset.page;
            if (this_el.dataset.page == 'prew' && active != 0) {
                page = Number(active) - 1;
            }
            if (this_el.dataset.page == 'next') {
                page = active != lastChild ? Number(active) + 1 : Number(active);
            }
            if (this_el.dataset.page == 'next' && active != lastChild) {
                page = Number(active) + 1;
            }
            handleFilters(el, Number(page));
            applyStyles();
            window.scrollTo(0, 0);
            return false;
        }
    }

    //fix makeup on swap large and small dispaly
    function fixMakeup() {
        var wrapper = document.getElementById('hrbr-filters');
        var mode = wrapper.offsetWidth < 992 && wrapper.offsetWidth > 460 ? '50%' : '';
        addHandlerHrbrCol(mode);

        window.onresize = function () {
            var mode = wrapper.offsetWidth < 992 && wrapper.offsetWidth > 460 ? '50%' : '';
            addHandlerHrbrCol(mode);
        }
    }


    function addHandlerHrbrCol(mode) {
        var items = document.getElementsByClassName('hrbr-col');
        for (var iItems = 0; iItems < items.length; iItems++) {
            items[iItems].style.width = mode;
        }
    }


    /*generate  CSS file from JS value*/
    ; (function () {
        // Create the <style> tag
        var style = document.createElement("style");
        style.type = 'text/css';
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);

        style.sheet.insertRule('.hrbr-btn-primary{  background-color: #' + hirebridge_conf.btncolor + ';border-color: #' + hirebridge_conf.btncolor + ';color: #' + hirebridge_conf.btnfontcolor + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-btn-primary:hover{  background-color: #' + hirebridge_conf.btncolorhover + ';border-color: #' + hirebridge_conf.btncolor + ';color: #' + hirebridge_conf.btnfontcolorhover + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-btn-primary:active{  background-color: #' + hirebridge_conf.btncolorhover + ';border-color: #' + hirebridge_conf.btncolor + ';color: #' + hirebridge_conf.linkcolorhover + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-btn-primary:focus{  background-color: #' + hirebridge_conf.btncolorhover + ';border-color: #' + hirebridge_conf.btncolor + ';color: #' + hirebridge_conf.linkcolorhover + '!important}', style.sheet.cssRules.length);


        style.sheet.insertRule('.hrbr-btn-primary-invert{color: #' + hirebridge_conf.linkcolor + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-btn-primary-invert:hover{  background-color: #' + hirebridge_conf.btncolorhover + ';border-color: #' + hirebridge_conf.btncolor + ';color: #' + hirebridge_conf.linkcolorhover + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-btn-primary-invert:active{  background-color: #' + hirebridge_conf.btncolorhover + ';border-color: #' + hirebridge_conf.btncolor + ';color: #' + hirebridge_conf.linkcolorhover + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-btn-primary-invert:focus{  background-color: #' + hirebridge_conf.btncolorhover + ';border-color: #' + hirebridge_conf.btncolor + ';color: #' + hirebridge_conf.linkcolorhover + '!important}', style.sheet.cssRules.length);

        style.sheet.insertRule('.hrbr-title{ color: #' + hirebridge_conf.linkcolor + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-title:hover{ color: #' + hirebridge_conf.linkcolorhover + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-title:focus{ color: #' + hirebridge_conf.linkcolorhover + '!important}', style.sheet.cssRules.length);
        style.sheet.insertRule('.hrbr-title:active{ color: #' + hirebridge_conf.linkcolorhover + '!important}', style.sheet.cssRules.length);


        style.sheet.insertRule('.hrbr-pagination{ color: #' + hirebridge_conf.linkcolor + '!important}', style.sheet.cssRules.length);

        style.sheet.insertRule('.active .hrbr-pagination{ background-color: #' + hirebridge_conf.btncolor + '!important; border-color: #' + hirebridge_conf.btncolor + '!important;}', style.sheet.cssRules.length);
        style.sheet.insertRule('#hrbr-widget{ background-color: #' + hirebridge_conf.formbackgroundcolor + '!important;}', style.sheet.cssRules.length);
        // return style;

    })();

    //fix makeup on swap large and small dispaly
    function applyStyles() {

        var elements;
        var i;
        var color;
        var linkcolor;



        if (hirebridge_conf.font) {
            document.getElementById('hrbr-widget').style.fontFamily = hirebridge_conf.font;
        }
        if (hirebridge_conf.h3font) {
            elements = document.getElementsByTagName('h3');

            for (i = 0; i < elements.length; i++) {
                elements[i].style.fontFamily = hirebridge_conf.h3font;
            }
        }

        if (hirebridge_conf.btnfont) {
            elements = document.getElementsByClassName('hrbr-view-button');

            for (i = 0; i < elements.length; i++) {
                elements[i].style.fontFamily = hirebridge_conf.btnfont;
            }

            elements = document.getElementById('hrbr-swap-page').getElementsByTagName('a');

            for (i = 0; i < elements.length; i++) {
                elements[i].style.fontFamily = hirebridge_conf.btnfont;
            }
        }

        if (hirebridge_conf.fontsize) {

            document.getElementById('hrbr-widget').style.fontSize = hirebridge_conf.fontsize;

        }

        if (hirebridge_conf.btnsize) {

            elements = document.getElementsByClassName('hrbr-btn');
            for (i = 0; i < elements.length; i++) {
                //console.log(elements)
                element = elements[i].getElementsByTagName('a')[0];

                elements[i].classList.remove('hrbr-btn-sm');
                elements[i].classList.add(hirebridge_conf.btnsize);

            }

            elements = document.getElementById('hrbr-swap-page').getElementsByTagName('a');

            for (i = 0; i < elements.length; i++) {
                elements[i].classList.remove('hrbr-btn-sm');
                elements[i].classList.add(hirebridge_conf.btnsize);
            }
        }
    }

    //load data
    function run() {
        var xmlhttp = new XMLHttpRequest();
        if (typeof hirebridge_client === "undefined" ||
            typeof hirebridge_conf === "undefined" ||
            typeof hirebridge_conf.filters === "undefined" ||
            typeof hirebridge_lang === "undefined" ||
            nodeContent === null) {
            return;
        }
        xmlhttp.open('GET', host + hirebridge_client + '.json', true);
        xmlhttp.send({});
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    var jsonData = JSON.parse(xmlhttp.responseText);

                    if (typeof jsonData.source.publisher !== 'undefined') {
                        publisher = jsonData.source.publisher;
                    }
                    noJob = 0;

                    if (!jsonData.source.job) {
                        noJob = 1;
                    }
                    else {
                        loadData(jsonData.source.job);
                    }
                    renderTemplate();

                    if (hirebridge_conf.isOptionsFilter > 0) {
                        handleFilters()
                        //hirebridge_conf.optionsFilter = 0;
                    } else {
                        renderItems();
                    }

                    registerHandlers();
                    fixMakeup();

                }
            }
        };
    }
    run();

    //add custum top margin
    if (typeof hirebridge_conf.top !== "undefined" && hirebridge_conf.top != 0 && nodeContent != null) {
        (function () {
            nodeContent.style.marginTop = Number(hirebridge_conf.top);
        })();
    }
})();