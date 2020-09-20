exports.getConfig = data => {
    let configs = {
        'tg_api_key': "1325311045:AAGRsCBET9xUth-SFq5BmwKJUESQuZO2aUc",
        'mongo_db': "mongodb+srv://sayron97:vk2232772@cluster0.mo36r.mongodb.net/<dbname>?retryWrites=true&w=majority"
    };

    return configs[data]
}

exports.TG_API_KEY = '1325311045:AAGRsCBET9xUth-SFq5BmwKJUESQuZO2aUc'
