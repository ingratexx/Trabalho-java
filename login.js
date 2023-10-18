let registros = [];
        
        function adicionarRegistro() {
            const valor = parseFloat(document.getElementById("valor").value);
            const data = document.getElementById("data").value;
            const observacoes = document.getElementById("observacoes").value;

            if (isNaN(valor) || valor <= 0 || data === "") {
                alert("Preencha todos os campos corretamente.");
                return;
            }

            registros.push({ valor, data, observacoes });

            atualizarListaRegistros();
            calcularTotal();
            
            document.getElementById("valor").value = "";
            document.getElementById("data").value = "";
            document.getElementById("observacoes").value = "";
        }

        function atualizarListaRegistros() {
            const recordsDiv = document.getElementById("records");
            recordsDiv.innerHTML = "";

            registros.forEach(registro => {
                const div = document.createElement("div");
                div.textContent = `Data: ${registro.data} - Valor: R$ ${registro.valor.toFixed(2)} - Observações: ${registro.observacoes}`;
                recordsDiv.appendChild(div);
            });
        }

        function calcularTotal() {
            const totalDiv = document.getElementById("total");
            const total = registros.reduce((acc, registro) => acc + registro.valor, 0);
            totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
        }
