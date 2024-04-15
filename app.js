
        document.getElementById('currency-form').addEventListener('submit', function(event) {
            event.preventDefault();

            var cantidad = document.getElementById('amount').value;
            var moneda = document.getElementById('currency').value;

            var tasaDeCambio = obtenerTasaDeCambio(moneda);

            var resultado = cantidad * tasaDeCambio;

            document.getElementById('result').innerText = 'valor equivalente: ' + resultado.toFixed(2) + ' COP';
        });

        function obtenerTasaDeCambio(moneda) {
          
            var tasas = {
                'EUR': 4071.02, 
                'USD': 3814.85,
                'BRL': 745.29,  
            };

            return tasas[moneda];
        }
