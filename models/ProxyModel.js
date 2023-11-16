const axios = require('axios');

class ProxyModel {
  static async fetchData(params) {
    const {url,...param} = params
    console.log(param)
    const options = {
      method: 'GET',
      url: url,
      params: {
        function: param.function,
        interval:param.interval,
        symbol:param.symbol,
        referenceCurrencyUuid:param.referenceCurrencyUuid,
        timePeriod:param.timePeriod,
        tier:param.tier,
        orderBy:param.orderBy,
        orderDirection:param.orderDirection,
        limit:param.limit,
        offset:param.offset,
        datatype: param.datatype,
        outputsize: param.outputsize,
        from_symbol:param.from_symbol,
        to_symbol:param.to_symbol,
        market:param.market,
        time_period:param.timePeriod,
        series_type:param.series_type,
        format:param.format,
        from:param.from,
        to:param.to,
        amount:param.amount,
        start_date:param.start_date,
        end_date:param.end_date,
        q:param.q,
        performanceId:param.performanceId,
        locale_info:param.locale_info,
        lang_ID:param.lang_ID,
        time_utc_offset:param.time_utc_offset,
        sort:param.sort,
        fromCurrency:param.fromCurrency,
        toCurrency:param.toCurrency,

      },
      headers: {
        'X-RapidAPI-Key': params.header1,
        'X-RapidAPI-Host': params.header2,
        // Add any additional headers specific to this API
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProxyModel;
