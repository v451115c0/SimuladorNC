@extends('index')

@section('resultados')
    Cadena 1(Paises): &nbsp; {{$cadena1}}<br>
    Cadena 2(PI WATER): &nbsp; {{$cadena2}}<br>
    Cadena 3(WATERFALL): &nbsp; {{$cadena3}}<br>
    Cadena 4(AQUA POUR): &nbsp; {{$cadena4}}<br>
    Cadena 5(OPTIMIZER): &nbsp; {{$cadena5}}<br>
    <div class="row">
        <div class="col-lg-12">
            <div class="table-responsive">
                <div>
                    @if (count($response))
                        <table class="table align-items-center table-dark">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">
                                        #
                                    </th>
                                    <th scope="col">
                                        idLevel
                                    </th>
                                    <th scope="col">
                                        Pais
                                    </th>
                                    <th scope="col">
                                        PI WATER
                                    </th>
                                    <th scope="col">
                                        WATERFALL
                                    </th>
                                    <th scope="col">
                                        AQUA POUR
                                    </th>
                                    <th scope="col">
                                        OPTIMIZER
                                    </th>
                                    <th scope="col">
                                        TotalKinya
                                    </th>
                                    <th scope="col">
                                        TotalLvel1
                                    </th>
                                    <th scope="col">
                                        TotalLevel2
                                    </th>
                                    <th scope="col">
                                        CantProd
                                    </th>
                                    <th scope="col">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                @php
                                    $num = 0;
                                @endphp
                                    @foreach ($response as $fila)
                                    <tr>
                                        <th>
                                            @php
                                                $num++;
                                                echo $num;
                                            @endphp
                                        </th>
                                        <th>
                                            {{$fila->idLevel}}
                                        </th>
                                        <td>
                                            {{$fila->Pais}}
                                        </td>
                                        <td>
                                            {{$fila->PW}}
                                        </td>
                                        <td>
                                            {{$fila->Wf}}
                                        </td>
                                        <td>
                                            {{$fila->AP}}
                                        </td>
                                        <td>
                                            {{$fila->Optimizer}}
                                        </td>
                                        <td>
                                            {{$fila->TotalKinya}}
                                        </td>
                                        <td>
                                            {{$fila->Total_Level1}}
                                        </td>
                                        <td>
                                            {{$fila->Total_Level2}}
                                        </td>
                                        <td>
                                            {{$fila->CantProd}}
                                        </td>
                                        <td>
                                            {{$fila->Total}}
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>    
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
